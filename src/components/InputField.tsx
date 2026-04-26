import type {UseFormRegisterReturn} from "react-hook-form";
import type {InputHTMLAttributes} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    register: UseFormRegisterReturn,
    error: string,
    label?: string;
    type?: "text" | "password";
}

function InputField({name, register, error, label, type = "text"}: Props) {
    return (
        <div>
            {label && (<span className="text-gray-100 text-sm font-semibold">{label}</span>)}
            <input {...register} name={name} type={type}
                   className="border border-b-blue-100 text-gray-300 outline-none rounded px-2 py-1.5 w-full"/>
            {error && <small className="text-red-700">error</small>}
        </div>
    );
}

export default InputField;