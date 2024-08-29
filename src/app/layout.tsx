import type {Metadata} from "next";

import {Open_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={sans.className}>
            <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
                <Header />
                <main className='grow'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
