import Link from "next/link";
import "../../../styles/login.module.css";
import React, { useState } from "react";

function ResetPassword() {
  const [click, setClick] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setClick("bien envoyé");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Reinitialiser Mot de Passe</h1>
      <form
        action=""
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="password"
          placeholder="nouveau mot de passe"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
        <input
          type="password"
          placeholder="confirmer le nouveau mot de passe"
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
        <button
          type="button"
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Reinitialiser Mot de Passe
        </button>
      </form>
      <p className="mt-4 text-gray-700">{click}</p>
    </div>
  );
}

export default ResetPassword;
