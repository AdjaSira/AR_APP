import Link from "next/link";
import Layout from "./components/layout";
import Chart from "./components/charts/charts";
import CustomCard from "./components/cards/cards";
import "flowbite";
import { Card } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex gap-2.5 mt-2.5 w-full">
          <div className="flex-1 bg-none flex flex-col gap-5">
            <div className="flex gap-5 justify-between">
              <Card className="flex-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Total des Précommandes
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
                  12356
                </p>
              </Card>
              <Card className="flex-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Précommandes en Cours de Validation
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
                  5
                </p>
              </Card>
              <Card className="flex-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Précommandes en Attente
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
                  1350
                </p>
              </Card>
              <Card className="flex-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Précommandes Validées
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
                  1678
                </p>
              </Card>
              <Card className="flex-1">
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Précommandes Refusées
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-4xl">
                  56
                </p>
              </Card>
            </div>
            <Chart />
          </div>
        </div>
      </Layout>
    </>
  );
}
