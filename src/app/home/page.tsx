"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    valueForm: yup.object({
      firstName: yup.string().required("Đéo dc bỏ"),
      age: yup.number().positive().integer().required(),
    }),
  })
  .required();

const defaultValueForm = {
  valueForm: {
    firstName: "Nguyễn Văn A22",
    age: 30,
  },
};
const Page333 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValueForm,
  });
  const onSubmit = (data) => console.log(data);
  console.log("errors+++", errors);
  return (
    <div>
      <form>
        <input {...register("valueForm.firstName")} />
        {/* <p>{errors.valueForm.firstName?.message}</p> */}

        <input {...register("valueForm.age")} />
        {/* <p>{errors.valueFormage?.message}</p> */}

        <button onClick={handleSubmit(onSubmit)}>Submit22</button>
      </form>
    </div>
  );
};

export default Page333;
