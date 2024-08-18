import LazyImage from "@/components/lazyloadingimage/LazyImage";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Vortex } from "react-loader-spinner";

interface VideoInterface {
    title: string;
    description: string;
    videoId: string;
    thumbnailUrl: string;
    duration: string;
    channelTitle: string;
}

const YOUTUBE_SEARCH_API_URL = "https://www.googleapis.com/youtube/v3/search";
const YOUTUBE_VIDEOS_API_URL = "https://www.googleapis.com/youtube/v3/videos";
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Replace with your YouTube API key

const HTMLSelection = () => {
    const [videoList, setVideoList] = useState<VideoInterface[]>();

    // Function to convert ISO 8601 duration to readable format (e.g., 5:33)
    const formatDuration = (isoDuration: string): string => {
        const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
        const matches = regex.exec(isoDuration);
        const hours = matches?.[1] ? parseInt(matches[1]) : 0;
        const minutes = matches?.[2] ? parseInt(matches[2]) : 0;
        const seconds = matches?.[3] ? parseInt(matches[3]) : 0;
        return `${hours ? `${hours}:` : ''}${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    async function fetchVideoData() {
        try {
            // Step 1: Search for videos matching the HTML & CSS
            const searchResponse = await axios.get(YOUTUBE_SEARCH_API_URL, {
                params: {
                    part: "snippet",
                    q: "HTML & CSS course",
                    type: "video",
                    videoDuration: 'long',
                    key: YOUTUBE_API_KEY,
                    maxResults: 20,
                },
            });

            // Step 2: Fetch all video IDs from the search response
            const videoIds = searchResponse.data.items.map((item: any) => item.id.videoId).join(",");

            // Step 3: Fetch all video details from the video IDs
            const videosResponse = await axios.get(YOUTUBE_VIDEOS_API_URL, {
                params: {
                    part: "contentDetails,snippet",
                    id: videoIds,
                    key: YOUTUBE_API_KEY,
                },
            });

            // Step 4: Extract all video details from the video response
            const videos: VideoInterface[] = videosResponse.data.items.map((item: any) => ({
                title: item.snippet.title,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                videoId: item.id,
                thumbnailUrl: item.snippet.thumbnails.high.url,
                duration: formatDuration(item.contentDetails.duration),
            }));

            setVideoList(videos);
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
            toast.error("require internet connection")
        }
    }

    useEffect(() => {
        fetchVideoData();
    }, []);

    return (
        <div className="w-full flex flex-col border border-black p-5 gap-5">
            <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl font-serif">Expand your career opportunities with HTML & CSS</p>
                <p className="resize-none line-clamp-3">
                    Take one of LCode range of HTML & CSS courses and learn how to code using this incredibly useful language.
                    Its simple syntax and readability make HTML & CSS perfect for Flask, Django, data science, and machine learning.
                    You will learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to you.
                </p>
                <button className="border border-slate-600 p-2 rounded-md font-bold w-fit">Explore HTML & CSS</button>
            </div>
            <div className="duration-300 flex flex-nowrap p-1 gap-x-3 overflow-x-auto">
                {!videoList ? (
                    <div>
                        <Vortex
                            visible={true}
                            ariaLabel="rotating-lines-loading"
                        />
                    </div>
                ) : (
                    videoList.map((course) => (
                        <div className="duration-200 p-1 cursor-pointer min-w-[250px]" key={course.videoId}>
                            <LazyImage src={course.thumbnailUrl} alt={course.title} />
                            <p className="font-bold line-clamp-2">{course.title}</p>
                            <div className="flex flex-row items-center w-full justify-between">
                                <p className="text-sm font-light">{course.channelTitle}</p>
                                <p className="text-xs text-gray-500">{course.duration}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HTMLSelection;
