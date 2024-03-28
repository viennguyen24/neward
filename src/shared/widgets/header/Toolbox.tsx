import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
export default function Toolbox() {
  return (
    <div>
      <Button color="primary" size="lg" radius="sm">
        Start Trial
      </Button>
      <Button size="lg" variant="light">
        <Link href="/sign-up">Login</Link>
      </Button>
    </div>
  );
}
