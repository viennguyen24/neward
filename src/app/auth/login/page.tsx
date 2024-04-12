"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Login: React.FC = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-10 my-0">
      <div className="text-center">
        <h1 className="color-title text-4xl font-bold">Welcome back!</h1>
      </div>
      <form className="flex flex-col items-center gap-2 text-2xl">
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
        />
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
        />
        <Button
          endContent={<FaArrowRight />}
          color="primary"
          radius="sm"
          size="lg"
          type="submit"
          className="my-4"
        >
          Login
        </Button>
      </form>
      <p className="color-subtitle">
        Don't have an account yet?{" "}
        <span
          className="color-title"
          onClick={() => router.push("/auth/register")}
        >
          Sign up now!
        </span>
      </p>
    </section>
  );
};
export default Login;
