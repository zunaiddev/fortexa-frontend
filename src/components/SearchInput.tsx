import type {InputHTMLAttributes} from "react";

type Props = InputHTMLAttributes<HTMLInputElement>


function SearchInput({...props}: Props) {
    return (
        <input className="" {...props}/>
    );
}

export default SearchInput;