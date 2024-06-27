import Image from "next/image";
import { useRouter } from "next/router";
import { MdSearch } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [click, setClick] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setClick("Voulez-vous confimer ?");
    event.preventDefault();
    router.push("/admin/login");
  };

  return (
    <header className="bg-orange-600 text-white p-4 flex  justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
        <h1 className="ml-4 text-xl">Admin's dashboard</h1>
      </div>
      <div className="flex items-center">
        <button>
          <MdNotificationsActive className="text-2xl mr-4 hover:bg-zinc-400 " />
        </button>
        <button onClick={handleClick}>
          <LogoutIcon className="text-2xl hover:bg-zinc-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
