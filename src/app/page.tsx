"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1 className="bg-blue-200">Basic Routing</h1>
      <br />
      <Link href="contact" >Contact Us</Link>
      <br />
      <Link href="about" >About Us</Link>
      <br />
      <Link href="navbar" >navbar</Link>
      <br />
      <button className="bg-blue-200 rounded-md p-1" onClick={()=>router.push("/login")}>Login</button>
    </div>
  );
}
