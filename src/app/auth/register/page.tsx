"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm, Resolver } from "react-hook-form";
import axiosInstance from "@/shared/utils/http";
import Link from "next/link";

type FormValues = {
  email: string;
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const formSubmit = (data: FormValues) => {
    axiosInstance
      .post("/auth/register", data)
      .then((response) => console.log(`This is a response: ${response}`))
      .catch((err) => console.log(err));
    // .then(() => router.push("/"))
    // .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "", username: "", password: "" },
  });
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-10 my-0">
      <div className="text-center">
        <h1 className="color-title text-4xl font-bold">Welcome back!</h1>
      </div>
      <form
        className="flex flex-col items-center gap-2 text-2xl"
        onSubmit={handleSubmit(formSubmit)}
      >
        <Input
          isRequired
          type="email"
          label="Email"
          labelPlacement="inside"
          radius="sm"
          variant="bordered"
          color="primary"
          placeholder="Enter your email"
          size="lg"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors?.email && <p>{errors.email.message}</p>}
        <Input
          isRequired
          type="username"
          label="Username"
          labelPlacement="inside"
          radius="sm"
          variant="bordered"
          color="primary"
          placeholder="Enter your username"
          size="lg"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        {errors?.username && <p>{errors.username.message}</p>}
        <Input
          isRequired
          type="password"
          label="Password"
          labelPlacement="inside"
          radius="sm"
          variant="bordered"
          color="primary"
          placeholder="Enter your password"
          size="lg"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors?.password && <p>{errors.password.message}</p>}
        <Button
          endContent={<FaArrowRight />}
          color="primary"
          radius="sm"
          size="lg"
          type="submit"
          className="my-4"
        >
          Sign up
        </Button>
      </form>
      <Link href="/auth/login">
        Already have an account?{" "}
        <span className="color-title">Sign up now</span>
      </Link>
    </section>
  );
};
export default Login;
