"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
export default function WordOfTheDay() {
    const [wordData, setWordData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWord() {
            try {

                const options = {
                    method: "GET",
                    url: "https://word-of-the-day11.p.rapidapi.com/",
                    headers: {
                        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
                        "x-rapidapi-host": "word-of-the-day11.p.rapidapi.com",
                    },
                };

                const response = await axios.request(options);
                console.log(response.data)
                setWordData(response.data);
            } catch (error) {
                console.error("Error fetching word of the day:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchWord();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!wordData) return <p>Could not load word.</p>;

    return (
        <Card sx={{ maxWidth: 400, margin: "1rem auto" }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h6" color="primary">
                    {wordData.word}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {wordData.meaning}
                </Typography>
            </CardContent>
        </Card>
    );
}
