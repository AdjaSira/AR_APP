import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserPlus, FaProductHunt } from "react-icons/fa";
import { MdDashboard, MdComment, MdLogout } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const menuItems = [
  {
    path: "/admin",
    title: "Tableau de bord",
    icon: <MdDashboard />,
  },
  {
    path: "/admin/produits",
    title: "Produits",
    icon: <FaProductHunt />,
  },
  {
    path: "/admin/precommandes",
    title: "Précommandes",
    icon: <FiShoppingCart />,
  },
  {
    path: "/admin/commentaires",
    title: "Commentaires",
    icon: <MdComment />,
  },
  {
    path: "/admin/users",
    title: "Utilisateurs",
    icon: <FaUserPlus />,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-stone-950 min-h-screen w-full md:w-60 flex flex-col justify-between">
      <nav className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map(({ path, title, icon }) => (
            <li className="m-2" key={title}>
              <Link
                href={path}
                className="flex items-center p-2 bg-orange-600 rounded hover:bg-orange-50 cursor-pointer"
              >
                <span className="mr-2">{icon}</span>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
