import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const apiUrl = "https://pakpathology.org/wp-json/gf/v2/forms/1/entries";

  useEffect(() => {
    // Fetch data from the API using the fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("API Response:", responseData); // Log the response data
        setData(responseData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((entry) => (
          <li key={entry.id}>
            {/* Display the data properties you're interested in */}
            Name: {entry.name} | Email: {entry.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
