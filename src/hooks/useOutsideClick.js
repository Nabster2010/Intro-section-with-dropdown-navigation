import React, { useEffect } from "react";

const useOutsideClick = (callBack) => {
  useEffect(() => {
    document.body.addEventListener("click", callBack);
    return () => {
      document.body.removeEventListener("click", callBack);
    };
  }, []);
};

export default useOutsideClick;
