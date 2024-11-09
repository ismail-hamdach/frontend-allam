"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { parseText } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";



const page = () => {
    const [vocabularyList, setVocabularyList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [audioIsLoading, setAudioIsLoading] = useState('');

    const audioIcon = () => {
        return (
            <svg className="cursor-pointer hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.725 17.625H12.05L9.225 20.45q-.575.575-1.412.575T6.4 20.45l-2.825-2.825Q3 17.05 3 16.2t.575-1.425l2.8-2.8V6.3zm-10.5-13.25q2.675-1.7 5.788-1.362T18.375 5.6t2.588 5.363T19.6 16.75l-1.45-1.45q1.125-2.05.788-4.337T16.95 7.025t-3.937-1.987t-4.338.787zm2.95 2.95Q11.6 6.9 13.05 7.15t2.5 1.3t1.288 2.488t-.188 2.862l-1.7-1.7q0-.625-.187-1.212t-.613-1.013q-.45-.45-1.037-.65t-1.238-.2z"></path>
            </svg>
        )
    }

    const loadingIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeDasharray={16} strokeDashoffset={16} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c4.97 0 9 4.03 9 9">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate>
                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
                </path>
            </svg>
        )
    }

    const handlePlayAudio = async (text, lang, position) => { // Function to play audio

        setAudioIsLoading(position)
        const response = await fetch('https://cms.allam.tech/tts/synthesize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                language: lang,
                speaker: "zeina"
            })
        });
        setAudioIsLoading(0)

        if (!response.ok) {
            throw new Error('Failed to synthesize speech');
        }

        const data = await response.json();


        const audio = new Audio(`data:audio/wav;base64,${data.audio}`);
        audio.play();



    };



    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                const response = await fetch('https://cms.allam.tech/language/vocabulary?child_id=1&category=animals&age=12&language_level=biginner', {
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
                setVocabularyList(parseText(data));
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVocabulary();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const progress = ((currentIndex) / vocabularyList?.length) * 100;

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
                    <p className="font-bold text-4xl">{vocabularyList[currentIndex].arabic} - {vocabularyList[currentIndex].pronunciation}</p>
                    <div onClick={() => handlePlayAudio(vocabularyList[currentIndex].arabic, "ar", 1)} className="text-primary-500">
                        {audioIsLoading !== 1 ? audioIcon() : loadingIcon()}
                    </div>
                    <h1 className="text-lg mt-10">English</h1>
                    <p className="font-bold text-4xl mt-4">{vocabularyList[currentIndex].english}</p>
                    <div onClick={() => handlePlayAudio(vocabularyList[currentIndex].english, "en", 2)} className="text-primary-500">
                        {audioIsLoading !== 2 ? audioIcon() : loadingIcon()}
                    </div>
                    <div className="my-5 w-[300px] md:w-[500px] border-b-2 border-gray-200"></div>
                    <h1 className="text-lg mt-10">Example</h1>
                    <p className="text-lg mt-10">{vocabularyList[currentIndex].exampleArabic}</p>
                    <div onClick={() => handlePlayAudio(vocabularyList[currentIndex].exampleArabic, "ar", 3)} className="text-primary-500">
                        {audioIsLoading !== 3 ? audioIcon() : loadingIcon()}
                    </div>
                    <p className="text-lg mt-10">{vocabularyList[currentIndex].exampleEnglish}</p>
                    <div onClick={() => handlePlayAudio(vocabularyList[currentIndex].exampleEnglish, "en", 4)} className="text-primary-500">
                        {audioIsLoading !== 4 ? audioIcon() : loadingIcon()}
                    </div>

                </div>
                <div className="flex flex-row md:flex-col gap-6 mt-6 md:mt-2">
                    <Button onClick={handleContinue}>Continue</Button>
                    <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300">I already know!</Button>
                    <Button className="bg-orange-500 text-gray-900 hover:bg-gray-300">Hard!</Button>
                </div>
            </div>
        </div>
    )
}

export default page;