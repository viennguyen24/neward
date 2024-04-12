"use client";

import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Props {
  classNames?: string;
}

export default function Toolbox({ classNames }: Props) {
  const router = useRouter();
  return (
    <div className={classNames}>
      <Button color="primary" size="lg" radius="sm">
        Start Trial
      </Button>
      <Button
        size="lg"
        variant="light"
        onClick={() => router.push("/auth/login")}
      >
        Login
      </Button>
    </div>
  );
}
