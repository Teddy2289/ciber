import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ classname }: { classname?: string }) {
  return (
    <Link href="/" className={`mr-[100px] ${classname}`}>
      <Image src="/images/logo.png" alt="logo" width={50} height={48} />
    </Link>
  );
}
