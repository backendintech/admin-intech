import { useEffect } from "react";
import { useState } from "react";
import { createCategory, getAllCategories } from "../../../api/services/categories";
import {showErrorToast} from "../../../utils/showError"
import { showSuccessToast } from "../../../utils/showSuccess";

function useModalAddHooks() {

  const [allCategory, setAllCategory] = useState();
  const [form, setForm] = useState({
    category_name: "",
    
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
      setForm({ ...form, [name]: value });
  };

  const handleAddData = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const data = await createCategory({form : form})
      if(data){
        showSuccessToast("Add Category Success")
        setTimeout(() => {
          window.location.reload()
        },2000)
      }
    } catch (error) {
      setIsLoading(false)
      showErrorToast(`Error : ${error}`)
    }finally{
      setIsLoading(false)
    }
  }


  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await getAllCategories();
      setAllCategory(allCategories.data);
    };

    fetchAllCategories();
    
  }, []);

  return {
    handleOnChange,
    form,
    allCategory,
    handleAddData,
    isLoading
  };
}

export default useModalAddHooks;
