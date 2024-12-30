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
  const linkClasses =
    "transition-transform duration-300 p-2 rounded-md mx-1 size-8 flex items-center justify-center cursor-pointer mt-1";
  const renderPages = () => {
    const pages = [];

    const startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPages, page + 1);

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1) {
        pages.push(
          <Link
            href={{
              pathname: "/",
              query: { ...searchParams, page: i },
            }}
            key={i}
            className={classNames(
              linkClasses,
              page === i
                ? "bg-gray-400 transform scale-125"
                : "bg-gray-800 text-white"
            )}
          >
            {i}
          </Link>
        );

        if (startPage > 2) {
          pages.push(
            <span
              key="dots-start"
              className="p-2 mx-1 size-8 flex items-center justify-center mt-1 text-gray-500"
            >
              ...
            </span>
          );
        }
      } else if (i >= startPage && i <= endPage) {
        pages.push(
          <Link
            href={{
              pathname: "/",
              query: { ...searchParams, page: i },
            }}
            key={i}
            className={classNames(
              linkClasses,
              page === i
                ? "bg-gray-400 transform scale-125"
                : "bg-gray-800 text-white"
            )}
          >
            {i}
          </Link>
        );
      } else if (i === totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(
            <span
              key="dots-end"
              className="p-2 mx-1 size-8 flex items-center justify-center mt-1 text-gray-500"
            >
              ...
            </span>
          );
        }

        pages.push(
          <Link
            href={{
              pathname: "/",
              query: { ...searchParams, page: i },
            }}
            key={i}
            className={classNames(
              linkClasses,
              page === i
                ? "bg-gray-400 transform scale-125"
                : "bg-gray-800 text-white"
            )}
          >
            {i}
          </Link>
        );
      }
    }

    return pages;
  };

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

      {renderPages()}

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
