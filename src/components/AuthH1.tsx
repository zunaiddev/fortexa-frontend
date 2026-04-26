import type {JSX} from "react";

interface Props {
    children: string;
}

function AuthH1({children}: Props): JSX.Element {
    return (
        <h1 className="font-bold text-white mb-4 text-lg">{children}</h1>
    );
}

export default AuthH1;