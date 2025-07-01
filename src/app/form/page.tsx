'use client';

import ListData from '@/components/ListData';
import React, { Suspense, useState } from 'react';

const FormRegister = () => {
  const [show, setShow] = useState(false);
  ////
  return (
    <>
      <button
        className="cursor-pointer border-amber-300 bg-amber-600"
        onClick={() => setShow(!show)}
      >
        Open The Beatles artist page
      </button>

      <Suspense fallback={<div>🌀 Loading.............</div>}>
        {show && <ListData />}
      </Suspense>
    </>
  );
};

export default FormRegister;
