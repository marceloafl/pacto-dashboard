import { VideoData } from "@/app/api/videos/route";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VideoWrapper({ searchTerm }: { searchTerm: string }) {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: VideoData[] = await response.json();
        setVideos(data);
      } catch (err) {
        console.log((err as Error).message);
      }
    };
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ul className="w-full  grid grid-cols-6 gap-4">
      {filteredVideos.map((video) => (
        <li key={video.id} className="h-52">
          <div className="h-1/2 w-full relative">
            <Image alt={video.name} src={video.imgPath} fill />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm">{video.name}</p>
            <p className="text-pactto-gray text-xs">
              Date: {formatDate(video.date)}
            </p>
            <span className="flex gap-1 bg-pactto-gray rounded-md w-fit text-xs px-1">
              {video.tags.map((tag, index) => (
                <p key={index} className="" w-fit>
                  {tag}
                </p>
              ))}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
