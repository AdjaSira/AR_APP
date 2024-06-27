import Link from "next/link";
import { useRouter } from "next/router";
import "../../../styles/login.module.css";
import React, { useState } from "react";

function Login() {
  const [click, setClick] = useState("");
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    // setClick("bien envoyé");
    event.preventDefault();
    router.push("/admin");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form
        action=""
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Email"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="password"
          placeholder="Mot de Passe"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
        <Link href="/admin/resetPassword">Mot de passe oublié ?</Link>
        <button
          type="button"
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Se connecter
        </button>
        {/* <link
          href="/admin"
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Se connecter
        </link> */}
      </form>
      <p className="mt-4 text-gray-700">{click}</p>
    </div>
  );
}

export default Login;
