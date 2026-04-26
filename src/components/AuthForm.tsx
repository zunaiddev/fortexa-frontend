import type {HtmlHTMLAttributes, ReactNode} from "react";

interface Props extends HtmlHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

function AuthForm({children, ...props}: Props) {
    return (
        <form className="bg-levendergrey px-3 py-4 w-full max-w-md rounded-lg flex justify-center flex-col items-center"
              {...props}>
            {children}
        </form>
    );
}

export default AuthForm;