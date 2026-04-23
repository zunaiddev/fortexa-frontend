import Container from "../components/Container.tsx";
import {useForm} from "react-hook-form";
import type {AuthForm} from "../utils/types.ts";
import InputField from "../components/InputField.tsx";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<AuthForm>();

    async function onSubmit(): void {

    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField name={}/>
                <InputField name={}/>
            </form>
        </Container>
    );
}

export default Signup;