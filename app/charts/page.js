import {generateMockData} from "@/utils/mockData";

const ChartsSection = () => {
    const {sales, expenses, revenueByRegion, expensesByCategory} =
        generateMockData();
    return (
        <>
            <ChartsSection
                sales={sales}
                expenses={expenses}
                revenueByRegion={revenueByRegion}
                expensesByCategory={expensesByCategory}
            />
        </>
    );
}

export default ChartsSection;