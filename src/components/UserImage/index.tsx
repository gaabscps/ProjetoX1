import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface UserImageProps {
    userImage: StaticImageData;
    width?: number;
    height?: number;
    hasStatus?: boolean;
}

export default function UserImage({ userImage, width, height }: UserImageProps) {
    return (
        <div className="user-image-container">
            <Image className="user-image" src={userImage} width={width || 48} height={height || 48} alt="use image" />
            <div className="status" />
        </div>
    )

}