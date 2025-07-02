import React from 'react';
import ListData from '@/components/ListData';

const FormRegister = async () => {
  const fetchData = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    const data = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    });
    const posts = await data.json();
    return posts;
  };

  const list = await fetchData();
  console.log('fetching...22');
  return (
    <div>
      <ListData listData={list} />
    </div>
  );
};

export default FormRegister;
