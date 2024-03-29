import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

interface Props{
  classNames?: string,
}

export default function Toolbox({classNames} : Props) {
  return (
    <div className={classNames}>
      <Button color="primary" size="lg" radius="sm">
        Start Trial
      </Button>
      <Button size="lg" variant="light">
        <Link href="/sign-up">Login</Link>
      </Button>
    </div>
  );
}
