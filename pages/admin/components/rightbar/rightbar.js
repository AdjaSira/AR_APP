import { Card } from "flowbite-react";
import { MdOutlineAttachMoney } from "react-icons/md";

const Rightbar = () => {
  return (
    <div>
      <Card className="max-w-sm">
        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white ">
          <MdOutlineAttachMoney />
          Chiffre d'affaires sur le mois
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
          1234
        </p>
      </Card>
      <Card className="max-w-sm my-20">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Produits
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Galaxy S24
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Iphone 15
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Galaxy Z Fold 5
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Iphone 15 Pro
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Galaxy Z-flip
        </p>
      </Card>
    </div>
  );
};

export default Rightbar;
