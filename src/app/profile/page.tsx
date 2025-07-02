import { Props } from '@/components/ListData';
import React, { useState } from 'react';

const Profile = ({ listData }) => {
  // const [listData, setlistData] = useState(initialState)
  const fetchData = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    const data = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    }).then;
    const posts = await data.json();
    return posts;
  };
  return (
    <div>
      Profile
      <h1>Data Profile</h1>
      {listData?.map((item) => {
        return <li key={item?.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default Profile;
