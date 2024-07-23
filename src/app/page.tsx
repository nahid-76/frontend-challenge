"use client"

import React, {useEffect, useState} from "react";

export default function Home() {

  const [data, setData] = useState<any>();
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/query",
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setData(data);
    }

    void fetchList();
  }, []);


  return (
    <main>
      <div className="container mx-auto">
        <div className="py-4 px-2 bg-gray-500">
          <div className={"flex flex-col w-full"}>
            <table className={""}>
              <thead>
                <tr className="bg-black py-1 px-2 font-bold">
                  <th>Name</th>
                  <th className={"w-48"}>Date</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {data?.docs?.map(d => (
                  <tr key={d.name}
                      className="border-b bg-black py-1 px-2 mt-2 shadow-black shadow-sm rounded-md">
                    <td className="text-center">{d.name}</td>
                    <td className="text-center">{new Date(d.date_utc).toDateString()}</td>
                    <td className="whitespace-break-spaces">{d.details}</td>
                  </tr>
                ))}
              </tbody>

            </table>

            <div className="mt-3 flex align-middle justify-center flex-wrap">
              <button onClick={() => setPage(page - 1)}
                      className={"p-2 bg-gray-800 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1"}>{
                "<"}</button>

              {Array.from(new Array(data?.totalPages ?? 1)).map((_, i) => (
                <button onClick={() => setPage(i + 1)} key={i}
                        className={"p-2 bg-gray-800 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1"}>{i + 1}</button>
              ))}
              <button onClick={() => setPage(page + 1)}
                      className={"p-2 bg-gray-800 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1"}>{
                ">"}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
