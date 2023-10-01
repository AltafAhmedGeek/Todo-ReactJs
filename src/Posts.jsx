import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      {Data.map((data) => {
        return (
          <>
            <b>{data.title}</b>
            <br />
            <i>{data.body}</i>
            <br />
          </>
        );
      })}
    </>
  );
};

export default Posts;
