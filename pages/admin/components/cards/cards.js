import { MdInsertEmoticon } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card } from "flowbite-react";

const CustomCard = (props) => {
  return (
    <div>
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default CustomCard;
