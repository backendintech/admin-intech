import api from "../..";
import { ENDPOINT } from "../../index";

const getAllTransactions = async () => {
    try {
        const allTransaction = await api.get(ENDPOINT.TRANSACTIONS);
        return allTransaction.data
    } catch (error) {
        throw error
    }
}
const getOneTransactionById = async (id) => {
    try {
        const transaction = await api.get(`${ENDPOINT.TRANSACTIONS}/${id}`)
        return transaction.data
    } catch (error) {
        throw error
    }
}

const deleteOneTransactionById = async (id) => {
    try {
        const transaction = await api.delete(`${ENDPOINT.TRANSACTIONS}/${id}`)
        return transaction.data
    } catch (error) {
        throw error
    }
}


const makeTransactionsFinished = async (id) => {
    try {
        const transaction = await api.put(`${ENDPOINT.TRANSACTIONS}/mark-finish/${id}`)
        return transaction.data
    } catch (error) {
       
        throw error.response.data.msg
    }
}
export {
    getAllTransactions,
    getOneTransactionById,
    deleteOneTransactionById,
    makeTransactionsFinished
}