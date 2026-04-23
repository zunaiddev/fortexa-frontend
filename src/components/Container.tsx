import type {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    children: ReactNode;
    className?: string;
}

function Container({children, className}: Props) {
    return (
        <div className={twMerge("w-full h-full flex justify-center items-center", className)}>
            {children}
        </div>
    );
}

export default Container;