import { SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function KPIGrid({ data }) {
    const totalSales = data.sales.reduce((acc, cur) => acc + cur.value, 0);
    const totalExpenses = data.expenses.reduce((acc, cur) => acc + cur.value, 0);
    const netProfit = totalSales - totalExpenses;

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6} w="full">
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Total Sales</Text>
                <Text fontWeight="bold">${totalSales}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Total Expenses</Text>
                <Text fontWeight="bold">${totalExpenses}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Net Profit</Text>
                <Text fontWeight="bold">${netProfit}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Active Users</Text>
                <Text fontWeight="bold">1,200</Text>
            </Box>
        </SimpleGrid>
    );
}
