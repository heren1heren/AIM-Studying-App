import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import MuiProvider from "../components/MuiClientProvider";

export const metadata: Metadata = {
    title: "Default",
    description: "default generated page title",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <MuiProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </MuiProvider>
            </body>
        </html>
    );
}
