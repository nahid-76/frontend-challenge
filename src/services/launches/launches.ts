import api from "@/modules/api";

export async function fetchLaunches(fetchLaunchesBody: {
  options: { page: number };
  query?: {
    $text?: {
      $search: string;
    };
  };
}) {
  try {
    const data = await api("v5").post<GetLaunchesRes>(
      "/launches/query",
      fetchLaunchesBody
    );
    return data;
  } catch {
    throw new Error();
  }
}