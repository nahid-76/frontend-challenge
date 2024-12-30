"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term.toLowerCase().trim());
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearch(e.target.value)}
      className="border p-2 rounded-md focus:outline-none focus:ring-0"
      defaultValue={searchParams.get("search")?.toString().trim()}
    />
  );
};
