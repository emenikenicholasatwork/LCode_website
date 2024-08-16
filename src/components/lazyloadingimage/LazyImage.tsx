import { useState } from "react";
import Image from "next/image"

interface LazyImageProps {
    src: string,
    alt: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return (
        <div className="relative w-64 h-36">
            {/* Loading spinner or placeholder */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="loader"></div>
                </div>
            )}

            {/* Image component */}
            <Image
                className="w-64 h-64"
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                onLoadingComplete={() => setIsLoading(false)}
                placeholder="blur" // Optional: placeholder with blur effect
                blurDataURL="/images/placeholder.png" // Placeholder image (can be a small base64 image)
            />
        </div>
    );
}
export default LazyImage