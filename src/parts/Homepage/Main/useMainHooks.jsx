import { useEffect, useState } from "react";
import { getAllProducts } from "../../../api/services/products";
import { getAllUsers } from "../../../api/services/users";
import { getAllTransactions } from "../../../api/services/transactions";

function useMainHooks() {
  const [allTransactions, setAllTransactions] = useState('')
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBenefit, setTotalBenefit] = useState(0);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const result = await getAllProducts();
      setTotalProducts(result.data.length);
    };
    const fetchAllUsers = async () => {
      const result = await getAllUsers();
      setTotalUsers(result.data.length);
    };
    const fetchAllTransactions = async () => {
      const result = await getAllTransactions();
      const totalAS = result.data.reduce((total, item) => {
        let benefit = 0;

        if (item.statusPayment === "success" && item.id_product) {
          const sellPrice = parseFloat(item.sell_price);
          const purchasePrice = parseFloat(item.purchase_price);
          const totalPcs = parseFloat(item.total_pcs);

          if (!isNaN(sellPrice) && !isNaN(purchasePrice) && !isNaN(totalPcs)) {
            benefit = (sellPrice - purchasePrice) * totalPcs;
          }
        }

        return total + benefit;
      }, 0);
      setAllTransactions(result.data)
      setTotalBenefit(totalAS)
    };

    fetchAllProducts();
    fetchAllUsers();
    fetchAllTransactions();
  }, []);
  return {
    totalProducts,
    totalUsers,
    totalBenefit,
    allTransactions
  };
}

export default useMainHooks;
