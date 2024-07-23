import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="mr-[100px]">
      <Image src="/images/logo.png" alt="logo" width={50} height={48} />
    </Link>
  );
}
