import type {InputHTMLAttributes} from "react";
import SearchIcon from "../assets/SearchIcon.tsx";
import ProfilePic from "./ProfilePic.tsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onClick?: () => void;
}

function SearchInput({onClick, ...props}: Props) {
    return (
        <form className="max-w-md mx-auto w-full relative">
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon/>
                </div>
                <input type="search" id="search" {...props}
                       className="block w-full p-3 ps-9 bg-prussianblue border text-white text-sm rounded"
                       placeholder="Search" required/>
                <button type="button" onClick={onClick}
                        className="absolute inset-e-1.5 bottom-1.5 text-white bg-blue-600 shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 cursor-pointer">Search
                </button>
            </div>
            <SearchResults/>
        </form>
    );
}

function SearchResults() {
    return (
        <div
            className="absolute w-full max-h-100 bg-green-950 mt-1 rounded border border-gray-50 overflow-y-auto px-1 py-1">
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>

        </div>
    );
}

function SearchResult() {
    return <div className="flex w-full h-10 bg-gray-300 mt-1 rounded border border-gray-50">
        <ProfilePic src={"jbx"}/>
    </div>
}

export default SearchInput;