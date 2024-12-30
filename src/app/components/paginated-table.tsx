import { fetchLaunches } from "@/services";
import { headers } from "../constants";
import { Pagination, Table } from "@/components";

interface Props {
  searchParams: { page?: string; search?: string };
}
export async function PaginatedTable({ searchParams }: Props) {
  const page = parseInt(searchParams?.page || "1", 10);
  const search = searchParams?.search;
  const fetchLaunchesBody = {
    options: { page: page },
    query: search
      ? {
          $text: {
            $search: search,
          },
        }
      : {},
  };
  const data = await fetchLaunches(fetchLaunchesBody);

  const filteredData = data?.docs.map((data: Doc) => ({
    name: data.name,
    date: new Date(data.date_utc).toLocaleString(),
    details: data.details,
  }));

  return (
    <>
      <Table data={filteredData} headers={headers} />
      <Pagination
        page={page}
        hasNextPage={data.hasNextPage}
        hasPrevPage={data.hasPrevPage}
        searchParams={searchParams}
        totalPages={data.totalPages}
      />
    </>
  );
}
