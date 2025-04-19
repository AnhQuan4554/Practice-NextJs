"use client";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => json);
      const posts = await data;
      // console.log("posttttt", posts);
      setList(posts);
    };
    fetchData();
  }, []);

  console.log("list", list);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        Home
        <div>
          {list?.length > 0 ? (
            <ul>
              {list
                ? list.map((post) => <li key={post.id}>{post.title}</li>)
                : "Loanding"}
            </ul>
          ) : (
            "Loadin 123"
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
