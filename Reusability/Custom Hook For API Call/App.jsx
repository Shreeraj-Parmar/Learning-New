import { useEffect, useState } from "react";
import useFetchData from "./utils/Reusable-Custom-Hook";

function App() {
  const [url, setUrl] = useState(null); // To store the API URL
  const [data, setData] = useState(null); // To store the fetched image URL

  // Fetch data using the custom hook
  const fetchedData = useFetchData(url); // 'fetchedData' will contain the fetched API data

  // Set data (image URL) when 'fetchedData' changes
  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData.message); // 'message' contains the image URL
    }
  }, [fetchedData]); // Runs when fetchedData changes

  // Button click handler to set the URL and trigger the fetch
  const handleClick = () => {
    // Append a unique timestamp to the URL to force a new fetch
    setUrl(
      `https://dog.ceo/api/breeds/image/random?timestamp=${new Date().getTime()}`
    );
  };

  return (
    <div>
      <h1>Dog Images</h1>
      {data && <img src={data} alt="dog" />}{" "}
      {/* Display image when available */}
      <button onClick={handleClick}>Get New Dog Image</button>
    </div>
  );
}

export default App;
