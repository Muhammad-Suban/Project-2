import React from "react";
import { useEffect, useState } from "react";

function Github() {
    const [data, setData]=useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Muhammad-Suban")
      .then((response) => response.json())
      .then((data) => 
      setData(data)

      );
  }, []);

  return (
    <div className="text-white p-4 bg-gray-950 text-3xl text-center m-4">
      Github Follwers:{data.followers}
      <img src={data.avatar_url} alt="Github Pic" width={300} />
    </div>
  );
}

export default Github;
