import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (e) {
      console.log("somthing error is :", e);
    }
  }, [url]);
  return data;
};

export default useFetchData;
