"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { parseText } from "@/lib/utils";

const page = () => {
    const [vocabularyList, setVocabularyList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                const response = await fetch('http://localhost:8000/language/vocabulary?category=animals', {
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
                setVocabularyList(parseText(data.words));
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVocabulary();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const progress = ((currentIndex ) / vocabularyList?.length) * 100;

    const handleContinue = () => {
        if (currentIndex < vocabularyList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (isLoading) {
        return <div>Loading vocabulary...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (vocabularyList.length === 0) {
        return <div>No vocabulary words available.</div>;
    }

    return (
        <div className="mt-6">
            <Progress value={progress} />
            <div className="flex justify-around mt-8 flex-wrap sm:gap-4 md:gap-1">
                <div className="w-full/3">
                    <h1 className="text-lg">Arabic</h1>
                    <p className="font-bold text-4xl">{vocabularyList[currentIndex].arabic}</p>
                    <p className="font-bold text-4xl mt-4">{vocabularyList[currentIndex].transliteration}</p>
                    <h1 className="text-lg mt-10">English</h1>
                    <div className="my-5 w-[300px] md:w-[500px] border-b-2 border-gray-200"></div>
                    <p className="text-lg mt-10">{vocabularyList[currentIndex].description}</p>
                </div>
                <div className="flex flex-row md:flex-col gap-6 mt-6 md:mt-2">
                    <Button onClick={handleContinue}>Continue</Button>
                    <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300">I already know!</Button>
                </div>
            </div>
        </div>
    )
}

export default page;