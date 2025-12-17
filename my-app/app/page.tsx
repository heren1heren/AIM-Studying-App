
import type { Metadata } from "next";
import WordOfTheDay from "../components/WordOfTheDay";
export const metadata: Metadata = {
    title: "Home Page",
    description: "Learn more about our company",
};


export default function HomePage() {
    return (
        <main>
            <WordOfTheDay />


        </main>
    );
}
