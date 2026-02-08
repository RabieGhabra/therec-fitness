'use client'
import Image from 'next/image'
import SlahImage from '../../assets/images/icons/7784684-200.png';
export function SlashIcon({ width = 50, height = 20, className = '' }) {
    return (
        <Image
            src={SlahImage}
            alt="slash"
            width={width}
            height={height}
        />
    )
}
