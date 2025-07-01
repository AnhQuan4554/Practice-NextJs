// 'use client';
import React from 'react';

interface Product {
  id: string;
  title: string;
}
const ListData = async () => {
  // const [list, setList] = useState<Product[]>([]);
  const fetchData = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    const data = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    });
    const posts = await data.json();
    // setList(posts);
    return posts;
  };

  const list: Product[] = await fetchData();
  console.log('fetching...22');
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="flex justify-center pt-7">
      <div className="w-xl rounded-[12px] bg-amber-100 p-4">
        <ul>
          {list?.map((post) => (
            <li key={post?.id}>{post?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListData;
