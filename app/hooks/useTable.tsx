import { useState, useEffect } from "react";

const calculateRange = (data: GlobalProps["orders"], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};
let rowsPerPage: number = 10;
const sliceData = (data: GlobalProps["orders"], page: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: GlobalProps["orders"], page: number) => {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<any[]>([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
