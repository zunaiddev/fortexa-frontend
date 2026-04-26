import type {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {type InputHTMLAttributes, type JSX, useState} from "react";
import {twMerge} from "tailwind-merge";
import EyeClose from "../assets/EyeClose.tsx";
import EyeOpen from "../assets/EyeOpen.tsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn,
    error: FieldError | undefined,
    className?: string,
    label?: string;
    type?: "text" | "password";
}

function InputField({register, error, className, label, type = "text", ...props}: Props): JSX.Element {
    const [show, setShow] = useState(false);
    const isPass: boolean = type === 'password';

    function handleShow() {
        setShow(!show);
    }

    return (
        <div className="w-full">
            {label && (<span className={twMerge("text-gray-100 text-sm font-semibold", className)}>{label}</span>)}
            <div className="relative">
                <input {...register} {...props} type={isPass ? (show ? "text" : "password") : type}
                       className={`bg-prussianblue border border-b-blue-100
                           text-gray-300 outline-none rounded px-2 disabled:opacity-65
                           py-1.5 w-full ${isPass && "pr-9"}`}/>
                {isPass && <button type="button" onClick={handleShow}
                                   className="right-2 absolute top-1/2 -translate-y-1/2 cursor-pointer">
                    {show ? <EyeClose/> : <EyeOpen/>}
                </button>}
            </div>
            {error && <small className="block wrap-break-word text-wrap
            text-red-700">{error.message}</small>}
        </div>
    );
}

export default InputField;