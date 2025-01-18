import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setusername] = useState("Sudipkarmakar25");
  const [data, setdata] = useState("");
  

  async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log(response)
    const data = await response.json();

   
    console.log(data);
    if (response.ok) {
      setdata(data);
    }
    else{
      setdata(null)
    }
  }

  function handleSubmit() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
        GitHub Profile Finder
      </h1>
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-lg shadow-2xl w-[90%] max-w-2xl">
        <div className="flex items-center w-full gap-4">
          <input
            type="text"
            className="h-12 flex-grow px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Enter GitHub username"
            onChange={(event) => setusername(event.target.value)}
          />
          <button
            className="bg-slate-800 text-white text-lg px-8 py-2 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            onClick={() => handleSubmit()}
          >
            Search
          </button>
        </div>
        {data && (
          <div className="w-full border-t-2 border-gray-200 pt-6 flex flex-col items-center">
            <img
              src={data.avatar_url}
              className="h-40 w-40 rounded-full shadow-lg mb-4"
              alt={data.login}
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {data.name ? data.name : data.login}
            </h2>
            <div className="flex flex-row gap-6 text-lg text-gray-600 mb-4">
              <div>
                <span className="font-semibold">Followers:</span> {data.followers}
              </div>
              <div>
                <span className="font-semibold">Following:</span> {data.following}
              </div>
            </div>
            <h2 className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Public Repositories:</span>{" "}
              {data.public_repos}
            </h2>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Visit GitHub Profile
            </a>
          </div>

        )}
       {!data && (
  <div className="flex flex-col items-center mt-6">
    <img
      src="https://th.bing.com/th/id/OIP.rSNmtpnLXUmyw8akWO0FrQHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain"
      className="h-[150px] w-[400px] object-cover shadow-lg rounded-md"
      alt="Not Found"
    />
    <p className="text-lg text-gray-600 mt-4">
      No profile found. Please try searching for a different username.
    </p>
  </div>
)}

      </div>
    </div>
  );
};

export default App;
