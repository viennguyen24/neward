"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Register: React.FC = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-10 my-0">
      <div className="text-center">
        <h1 className="color-title text-4xl font-bold">Welcome to Neward!</h1>
        <p className="color-subtitle text-2xl">
          Start your digital communication with the most powerful SaaS tool
        </p>
      </div>
      <form className="flex flex-col items-center gap-2 text-2xl">
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
        />
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
        <Input
          isRequired
          type="password"
          radius="sm"
          variant="bordered"
          color="primary"
          placeholder="Re-enter your password"
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
          Register
        </Button>
      </form>
      <p className="color-subtitle">
        Already have an account?{" "}
        <span
          className="color-title"
          onClick={() => router.push("/auth/login")}
        >
          Login now!
        </span>
      </p>
    </section>
  );
};
export default Register;
