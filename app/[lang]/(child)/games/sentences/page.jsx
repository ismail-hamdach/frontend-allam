"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { parseSentence } from "@/lib/utils";

const page = () => {
    const [wordDetails, setWordDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                const response = await fetch('https://cms.allam.tech/language/sentence', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        category: 'animals'
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch vocabulary');
                }
                const data = await response.json();
                setWordDetails(parseSentence(data.sentence));
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVocabulary();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const progress = ((currentIndex + 1) / wordDetails?.length) * 100;

    const handleContinue = () => {
        if (currentIndex < wordDetails.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (isLoading) {
        return <div>Loading vocabulary...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (wordDetails.length === 0) {
        return <div>No vocabulary words available.</div>;
    }



    return (
        <div className="mt-6">
            <Progress value={0} />
            <div className="flex justify-around mt-8">
                <div className="w-full/3">
                    <h1 className="text-lg">Arabic</h1>
                    <p className="font-bold text-4xl">{wordDetails.arabic}</p>
                    <p className="font-bold text-4xl mt-6">{wordDetails.transliteration}</p>
                    <h1 className="text-lg mt-10">English</h1>
                    <div className="my-5 w-[300px] md:w-[500px] border-b-2 border-gray-200"></div>
                    <p className="text-lg mt-10">{wordDetails.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                    <Button onClick={handleContinue}>Continue</Button>
                    <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300">I already know!</Button>
                </div>
            </div>
        </div>
    )
}

export default page;