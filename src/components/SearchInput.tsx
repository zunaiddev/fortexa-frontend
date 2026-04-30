import type {InputHTMLAttributes} from "react";
import SearchIcon from "../assets/SearchIcon.tsx";

type Props = InputHTMLAttributes<HTMLInputElement>


function SearchInput({...props}: Props) {
    return (
        <form className="max-w-md mx-auto">
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon/>
                </div>
                <input type="search" id="search"
                       className="block w-full p-3 ps-9 bg-prussianblue border text-white text-sm rounded"
                       placeholder="Search" required/>
                <button type="button"
                        className="absolute inset-e-1.5 bottom-1.5 text-white bg-blue-600 shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 cursor-pointer">Search
                </button>
            </div>
        </form>
    );
}

export default SearchInput;