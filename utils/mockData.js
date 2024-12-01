import {faker} from "@faker-js/faker";

// Generate sales data for the last 12 months
function generateSalesData() {
    return Array.from({length: 12}, (_, i) => ({
        month: `Month ${i + 1}`,
        value: faker.number.int({min: 1000, max: 5000}),
    }));
}

// Generate expenses data for the last 12 months
function generateExpensesData() {
    return Array.from({length: 12}, (_, i) => ({
        month: `Month ${i + 1}`,
        value: faker.number.int({min: 500, max: 3000}),
    }));
}

// Generate revenue by region
function generateRevenueByRegion() {
    const regions = ["North America", "Europe", "Asia"];
    return regions.map((region) => ({
        region,
        revenue: faker.number.int({min: 10000, max: 50000}),
    }));
}

// Generate expenses by category
function generateExpensesByCategory() {
    const categories = ["Marketing", "Operations", "HR"];
    return categories.map((category) => ({
        category,
        value: faker.number.int({min: 1000, max: 10000}),
    }));
}

// Generate random transactions
function generateTransactions() {
    return Array.from({length: 50}, () => ({
        id: faker.string.uuid(),
        date: faker.date.past({years: 10}).toISOString().split("T")[0], // Past year
        amount: faker.number.float({min: 10, max: 100, multipleOf: 0.02}),
        type: faker.helpers.arrayElement(["Sale", "Expense"]),
        status: faker.helpers.arrayElement(["Completed", "Pending"]),
    }));
}

// Combine all data into one mock generator
export function generateMockData() {
    return {
        sales: generateSalesData(),
        expenses: generateExpensesData(),
        revenueByRegion: generateRevenueByRegion(),
        expensesByCategory: generateExpensesByCategory(),
        transactions: generateTransactions(),
    };
}
