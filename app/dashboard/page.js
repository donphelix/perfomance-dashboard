"use client";

import {VStack, Heading} from "@chakra-ui/react";
import ChartsSection from "@/components/ChartsSection";
import TransactionTable from "@/components/TransactionTable";
import {generateMockData} from "@/utils/mockData";
import KPIGrid from "@/components/KPIGrid";

export default function DashboardPage() {
    const {sales, expenses, revenueByRegion, expensesByCategory, transactions} =
        generateMockData();

    return (
        <VStack spacing={8} p={6}>
            <Heading>Business Performance Dashboard</Heading>
            <KPIGrid data={{sales, expenses}}/>
            <ChartsSection
                sales={sales}
                expenses={expenses}
                revenueByRegion={revenueByRegion}
                expensesByCategory={expensesByCategory}
            />
            <TransactionTable transactions={transactions}/>
        </VStack>
    );
}
