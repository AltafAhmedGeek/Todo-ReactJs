import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    console.log(123123123);
    
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  });
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
