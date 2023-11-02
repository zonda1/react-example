import { useMemo } from "react";

export const usePagesArray = (totalPages) => {
  const cashedArray = useMemo(() => {
    const result = [];
    for (let index = 0; index < totalPages; index++) {
      result.push(index + 1);
    }
    return result;
  }, [totalPages]);

  return cashedArray;
};
