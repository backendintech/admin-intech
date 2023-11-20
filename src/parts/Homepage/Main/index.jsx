import React from "react";
import Card from "../../../components/Card";
import ItemsSVG from "../../../assets/icons/ItemsSVG";
import UsersSVG from "../../../assets/icons/UsersSVG";
import TransactionsSVG from "../../../assets/icons/TransactionsSVG";
import CardTable from "../../../components/CardTable";
import TableTransactionDashboard from "../../../components/TableTransactionsDashboard";
import useMainHooks from "./useMainHooks";
import { formatCurrencyRupiah } from "../../../utils/formatNumber";
function Main() {
  const { totalProducts, totalBenefit, totalUsers, allTransactions } =
    useMainHooks();
  return (
    <>
      <div className="mt-10 flex flex-col gap-32 flex-wrap justify-start">
        <Card
          href={"/products"}
          title={"Products"}
          value={totalProducts}
          icon={<ItemsSVG isActive />}
        />
        <div className="w-full">
          <h1 className="text-center text-sm md:text-base font-light italic">
            Intech Computers, founded by Andi Irfan Fauzan, has built a
            reputation as a leading laptop service provider for local and
            international investors. By focusing on quality without compromising
            accessibility, we ensure that each of our projects delivers
            satisfactory results. We believe in providing the best laptop
            solutions, according to our customers' daily and business needs.
          </h1>
        </div>
      </div>
      <div className="flex mt-16 flex-col gap-10 mb-10">
        <h2 className="text-center text-sm ">
          This Is In Tech - Computerizer Content Management System Apps
        </h2>
      </div>
    </>
  );
}

export default Main;
