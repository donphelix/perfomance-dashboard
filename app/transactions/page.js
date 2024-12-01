import {generateMockData} from "@/utils/mockData";

const TransactionTable = () => {
    const {sales, expenses, revenueByRegion, expensesByCategory, transactions} =
        generateMockData();

    return (
        <>
            <TransactionTable transactions={transactions}/>
        </>
    );
}

export default TransactionTable;