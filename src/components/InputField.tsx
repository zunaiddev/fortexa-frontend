interface Props {
    name: string,
    label?: string;
    placeholder?: string;
}

function InputField({name, label, placeholder}: Props) {
    return (
        <div>
            {label && (<span className="text-gray-100 text-sm font-semibold">{label}</span>)}
            <input name={name} placeholder={placeholder}
                   className="border border-b-blue-100 text-gray-300 outline-none rounded px-2 py-1.5 w-full"/>
            <small className="text-red-700"></small>
        </div>
    );
}

export default InputField;