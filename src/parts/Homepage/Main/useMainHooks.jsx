import { useEffect, useState } from "react";
import { getAllProducts } from "../../../api/services/products";

function useMainHooks() {

  const [totalProducts, setTotalProducts] = useState(0);


  useEffect(() => {
    const fetchAllProducts = async () => {
      const result = await getAllProducts();
      setTotalProducts(result.data.length);
    };
    
    fetchAllProducts();
  }, []);
  return {
    totalProducts,
  };
}

export default useMainHooks;
