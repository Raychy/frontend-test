import React from "react";

interface PaginationProps {
  range: number[];
  setPage: any;
  page: number;
}
const Pagination = ({ range, setPage, page }: PaginationProps) => {
  return (
    <div>
      <div className="flex gap-5">
        <button >
          <svg
            className="text-gray-400 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
          </svg>
        </button>
        {range.map((el, index) => (
          <button
            key={index}
            className={`py-1 px-3 rounded-md ${
              page === el
                ? "bg-blue-600 text-white"
                : "bg-skale-200 text-blue-600"
            }`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
        <button>
          <svg
            className="text-gray-400 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
