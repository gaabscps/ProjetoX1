import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Status } from '@/types/Status';
import { EmptyUser } from '@/assets/svg/EmptyUser';
import EmptyUserDashboard from '@/assets/svg/EmptyUserDashboard';

interface UserImageProps {
    userImage: string;
    status?: Status;
    width?: number;
    height?: number;
    statusPosition?: {
        right: string;
    }
    className?: string;
}

export default function UserImage({ userImage, width, height, status, statusPosition, className }: UserImageProps) {

    const handleStatus = () => {
        switch (status) {
            case 0:
                return '#83C93D'
            case 1:
                return '#E54F49'
            case 2:
                return '#807C83'
            default:
                return '#83C93D'
        }
    }


    return (
        <div className={`user-image-container ${className || ''}`}>
            {userImage == '' ? <EmptyUserDashboard width='40px' /> :
                <img className="user-image" src={userImage} width={width || 48} height={height || 48} alt="use image" />
            }
            <div style={{ background: handleStatus(), right: statusPosition?.right || '' }} className="status" />
        </div>
    )

}