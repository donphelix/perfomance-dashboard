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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

