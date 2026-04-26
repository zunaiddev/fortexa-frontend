import type {JSX} from "react";

interface Props {
    src: string | undefined;
    alt?: string;
    latter?: string | undefined;
}

function ProfilePic({src, alt, latter}: Props): JSX.Element {
    return (
        <div className={`size-10 rounded-full overflow-hidden flex
        justify-center items-center`} style={{backgroundColor: getRandomColor()}}>
            {src && <img src={src} alt={alt && "image"} className="size-full"/>}
            {latter && <span className="text-lg font-bold text-white">{latter}</span>}
        </div>
    );
}

const bgColors = [
    "#5a189a", "#19bf61", "#27187e", "#d9d9d9", "#624cab", "#1b2e4b",
    "#0d3b66", "#00798c", "#e07a5f", "#faa307", "#660708"
];

function getRandomColor(): string {
    const ran: number = Math.floor(Math.random() * bgColors.length);
    return `${bgColors[ran]}`;
}

console.log(getRandomColor());

export default ProfilePic;