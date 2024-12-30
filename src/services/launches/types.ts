interface GetLaunchesRes {
    docs: Doc[];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
  }
  interface Doc {
    fairings: string;
    links: string[];
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: string[];
    details: string;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: string[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string;
    id: string;
  }