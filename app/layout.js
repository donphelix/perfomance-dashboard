"use client"

import { Provider } from "@/components/ui/provider"
import {QueryClient, QueryClientProvider} from "react-query";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const queryClient = new QueryClient();

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <QueryClientProvider client={queryClient}>
            <Provider>
                <Navbar />
                {children}
            </Provider>
        </QueryClientProvider>
        </body>
        </html>
    );
}
