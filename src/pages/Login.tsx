import Container from "../components/Container.tsx";
import {useForm} from "react-hook-form";
import type {AuthFormData} from "../utils/types.ts";
import AuthForm from "../components/AuthForm.tsx";
import AuthH1 from "../components/AuthH1.tsx";
import InputField from "../components/InputField.tsx";
import Button from "../components/Button.tsx";
import {Link} from "react-router-dom";

function Login() {
    const {
        register,
        handleSubmit,
        formState: {isSubmitting, errors},
    } = useForm<AuthFormData>({
        defaultValues: {
            username: 'john',
            password: "John@1232"
        }
    });

    async function onSubmit(data: AuthFormData): Promise<void> {
        await new Promise<void>((res) =>
            setTimeout(res, 5000));
        console.log("Form Data:", data);
    }

    return (
        <Container className="p-3">
            <AuthForm onSubmit={handleSubmit(onSubmit)}>
                <AuthH1>Welcome Back</AuthH1>
                <InputField register={register("username", {
                    required: "Enter username"
                })} label="Username" error={errors.username} disabled={isSubmitting} autoComplete="username"/>

                <InputField type="password" register={register("password", {
                    required: "Enter Password"
                })} label="Password" error={errors.password} disabled={isSubmitting} autoComplete="current-password"/>

                <Button isSubmitting={isSubmitting} className="mt-4">Signup</Button>

                <Link to={"/auth/singup"}>Already Have an account signup</Link>
            </AuthForm>
        </Container>
    );
}

export default Login;