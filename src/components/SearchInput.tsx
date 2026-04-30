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
                       className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                       placeholder="Search" required/>
                <button type="button"
                        className="absolute inset-e-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search
                </button>
            </div>
        </form>
    );
}

export default SearchInput;