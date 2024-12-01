import KPIGrid from "@/components/KPIGrid";
import {Heading} from "@chakra-ui/react";
import {generateMockData} from "@/utils/mockData";

const KPI = () => {
    const {sales, expenses, revenueByRegion, expensesByCategory, transactions} =
        generateMockData();

    return (
        <>
            <KPIGrid data={{sales, expenses}}/>
        </>
    )
        ;
}

export default KPI;