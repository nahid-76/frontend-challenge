import React from "react";
import { PaginatedTable, SearchInput } from "./components";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-5">
        <div className="flex flex-col w-full gap-2">
          <h1 className="font-bold">SpaceX</h1>
          <SearchInput searchKey="search" debounceTime={300} />
          <PaginatedTable searchParams={searchParams} />
        </div>
      </div>
    </main>
  );
}
