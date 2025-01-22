import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setusers] = useState([]);
  const [searchparam, setsearchparam] = useState("");
  const [dropdown, setdropdown] = useState(false);
  const [filtered, setfiltered] = useState([]);

  async function fetchdata() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const firstNames = data.users.map(user => user.firstName);
      setusers(firstNames);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function handlechange(event) {
    const query = event.target.value.toLowerCase();
    setsearchparam(query);

    if (query.length > 1) {
      const filtered_data = users.filter(item =>
        item.toLowerCase().includes(query)
      );
      setdropdown(true);
      setfiltered(filtered_data);
    } else {
      setdropdown(false);
      setfiltered([]);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10">
      <h1 className="text-3xl font-bold mb-5 text-gray-700">Search Users</h1>
      <div className="relative w-full max-w-lg">
        <div className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-4">
          <span className="text-white bg-green-500 px-4 py-2 rounded-lg font-semibold">
            Search
          </span>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
            placeholder="Type a name..."
            value={searchparam}
            onChange={handlechange}
          />
        </div>
        {dropdown && (
          <ul className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-700 hover:bg-green-100 cursor-pointer"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500 text-center">
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
