"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { parseSentence, parseStory } from "@/lib/utils";

const page = () => {
    const [wordDetails, setWordDetails] = useState({
        mainContent: "كان هناك أرنب صغير يحب القفز واللعب في الغابة. في يوم من الأيام، قابل الأرنب سلحفاة بطيئة الحركة. شعر الأرنب بالأسف تجاهها وقرر أن يصبحا أصدقاء. تعلم الأرنب أن النجاح ليس فقط في السرعة، بل في مساعدة الآخرين.",
        description: "القصة تتحدث عن أرنب وسلحفاة يتعرفان على بعضهما البعض في الغابة. يتعلم الأرنب أن الصداقة والنجاح ليست مرتبطة بالسرعة فقط، بل بمساعدة الآخرين والشعور بالآخرين."
    });
    const [imageStory, setImageStroy] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                let response = await fetch('http://localhost:8000/language/story', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        category: 'animals'
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch story');
                }
                const data = await response.json();
                const story = parseStory(data.story)
                setWordDetails(story);
                response = await fetch('http://localhost:8000/image/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "story": story.mainContent.split(".")[0],
                        "seed": 0,
                        "width": 1024,
                        "height": 1024,
                        "num_inference_steps": 4
                    })
                });

                const img = await response.json().image_base64;
                alert(img)
                setImageStroy(img)
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
        return <div>Loading Story...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (wordDetails?.length === 0) {
        return <div>No vocabulary words available.</div>;
    }



    return (
        <div className="mt-6">
            <Progress value={0} />
            <div className="flex justify-around mt-8 gap-6">
                <div className="w-full/3">
                    <h1 className="text-lg">Story</h1>
                    <p dir="rtl" className="font-bold text-2xl text-justify">{wordDetails.mainContent}</p>

                    <h1 className="text-lg mt-10">Meaning</h1>
                    <div className="my-5 w-[300px] md:w-[500px] border-b-2 border-gray-200"></div>
                    <p dir="rtl" className="text-lg mt-10">{wordDetails.description}</p>
                </div>
                <div className="flex flex-col gap-6">
                    {imageStory ? (
                        <img
                            src={imageStory}
                            alt="Retrieved for Stroy"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    ) : (
                        <p>Loading image...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default page;