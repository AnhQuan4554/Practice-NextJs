import React from 'react';

export interface Product {
  id: string;
  title: string;
}
export interface Props {
  listData: Product[];
}
const ListData = ({ listData }: Props) => {
  return (
    <div className="flex justify-center pt-7">
      <div className="w-xl rounded-[12px] bg-amber-100 p-4">
        <ul>
          {listData?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListData;
