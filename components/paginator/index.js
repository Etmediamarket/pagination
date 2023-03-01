import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import iconForward from "../../public/next.svg";
import iconBack from "../../public/before.svg";

function paginator({ page, total }) {
  const totalPages = useMemo(() => total ?? 1, [total]);
  const [currentPage, setCurrentPage] = useState(page ?? 1);

  useEffect(() => {
    document.title = `Page ${currentPage}`;
  });

  return (
    <div className="pagination">
      <ul className="flex justify-center items-center gap-2 text-semi-bold text-lg">
        {currentPage > 1 && (
          <>
            <li
              className="back flex items-center justify-center rounded-full cursor-pointer border border-transparent hover:bg-gray-100 transition duration-300"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <Image src={iconBack} alt="back" width={50} height={50} />
            </li>
            <li
              className="num cursor-pointer"
              onClick={() => setCurrentPage(1)}
            >
              1
            </li>
          </>
        )}
        {currentPage > 3 && <li className="dots">...</li>}
        {currentPage > 2 && (
          <li
            className="num cursor-pointer"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {currentPage - 1}
          </li>
        )}
        <li className="num active rounded-full bg-black text-white">
          {currentPage}
        </li>
        {currentPage < totalPages && (
          <li
            className="num cursor-pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </li>
        )}
        {currentPage < totalPages - 2 && <li className="dots">...</li>}
        {currentPage < totalPages - 1 && (
          <li
            className="num cursor-pointer"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </li>
        )}
        {currentPage < totalPages && (
          <li
            className="forward flex items-center justify-center rounded-full cursor-pointer border border-transparent hover:bg-gray-100 transition duration-300"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <Image src={iconForward} alt="forward" width={50} height={50} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default paginator;
