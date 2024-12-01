# Business Performance Dashboard

The **Business Performance Dashboard** is a dynamic and responsive web application built to visualize key business metrics, including sales, expenses, and transactions. Using modern technologies like **Next.js**, **Chakra UI**, **Recharts**, and **React Query**, this dashboard provides insightful charts, KPI cards, and a paginated transaction table to help stakeholders monitor performance effectively.

---

## Features

### Dashboard Overview
- **KPI Cards**:
    - Display key metrics such as Total Sales, Total Expenses, Net Profit, and Active Users.
    - Dynamically updates based on mock data.
    - Designed with **Chakra UI’s SimpleGrid** for responsiveness.

### Data Visualizations
- **Line Chart**:
    - Displays sales and expense trends over the last 12 months.
    - Built using **Recharts**.
- **Bar Chart**:
    - Visualizes revenue distribution by region (North America, Europe, Asia).
- **Pie Chart**:
    - Shows a percentage breakdown of expenses by category (Marketing, Operations, HR).

### Transaction Log
- **Paginated Table**:
    - Displays recent transactions with columns for:
        - Date, Transaction ID, Amount, Type (Sale/Expense), and Status (Completed/Pending).
    - Includes pagination controls for seamless navigation between pages.

### Responsive Design
- Fully mobile-friendly using **Chakra UI** and **Tailwind CSS**.

---

## Installation and Setup

### Prerequisites
- Ensure **Node.js** (v14 or higher) and **npm** are installed on your system.
- Install **Git** if you plan to clone the repository.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/donphelix/dashboard.git
   cd dashboard
   
2. Install project dependencies:
   ```
   npm install
   
3. Run the Application
   ```
   npm run dev
Open your browser and visit: http://localhost:3000.

## Future Enhancements
Dynamic Filters:
Add filters for date ranges, regions, and categories.

Dark Mode:
Implement a light/dark theme toggle using Chakra UI’s theming.

Drill-Down Charts:
Allow users to click on chart sections (e.g., region, category) for detailed data views.

Real-Time Updates:
Simulate live data updates for transactions and metrics.

Export Data:
Enable exporting transaction data and charts to CSV or PDF.