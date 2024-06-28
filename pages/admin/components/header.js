import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-orange-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
        <h1 className="ml-4 text-xl">Admin&apos;s dashboard</h1>
      </div>
      <nav>
  
      </nav>
    </header>
  );
};

export default Header;
