import classNames from "classnames";
import Link from "next/link";

interface Props {
  hasPrevPage: Boolean;
  hasNextPage: Boolean;
  totalPages: number;
  page: number;
  searchParams: Record<string, string>;
}
export const Pagination: React.FC<Props> = ({
  hasPrevPage,
  totalPages,
  hasNextPage,
  page,
  searchParams,
}) => {
  return (
    <div className="mt-3 flex align-middle justify-center flex-wrap">
      <Link
        href={{
          pathname: "/",
          query: { ...searchParams, page: page - 1 },
        }}
        className={classNames(
          "p-2 bg-gray-800 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1 text-white",
          {
            "pointer-events-none opacity-40": !hasPrevPage,
          }
        )}
      >
        {"<"}
      </Link>

      {Array.from(new Array(totalPages ?? 1)).map((_, i) => (
        <Link
          href={{
            pathname: "/",
            query: { ...searchParams, page: i + 1 },
          }}
          key={i}
          className={classNames(
            "transition-transform duration-300 p-2 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1",
            page === i + 1
              ? "bg-gray-400 transform scale-125"
              : "bg-gray-800 text-white"
          )}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        href={{
          pathname: "/",
          query: { ...searchParams, page: page + 1 },
        }}
        className={classNames(
          "p-2 bg-gray-800 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1 text-white",
          {
            "pointer-events-none opacity-40": !hasNextPage,
          }
        )}
      >
        {">"}
      </Link>
    </div>
  );
};
