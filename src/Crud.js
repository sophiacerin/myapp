import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((response) => setDatas(response))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        setDatas(res.data);
      })
  }, []);

  return (
    <ul>
      {datas.length > 0 ? (
        datas.map((data, index) => <li key={index}>{data.id}-{data.title}</li>)
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}
