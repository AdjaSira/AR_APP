// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Login from "./admin/login";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Login />
      {/* <h2>Bienvenue</h2>
      <Link href="../../admin/login">Connectez-vous</Link> */}
    </>
  );
}