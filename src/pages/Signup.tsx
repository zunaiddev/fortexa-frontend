import Container from "../components/Container.tsx";
import {useForm} from "react-hook-form";
import type {AuthFormData} from "../utils/types.ts";
import InputField from "../components/InputField.tsx";
import Button from "../components/Button.tsx";
import RegEx from "../utils/RegEx.ts";
import {Link} from "react-router-dom";
import AuthForm from "../components/AuthForm.tsx";
import AuthH1 from "../components/AuthH1.tsx";

function Signup() {
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
                <AuthH1>Create An Account</AuthH1>
                <InputField register={register("username", {
                    required: "Enter username",
                    pattern: {
                        value: RegEx.username.reg,
                        message: RegEx.username.message
                    }
                })} label="Username" error={errors.username} disabled={isSubmitting} autoComplete="username"/>

                <InputField type="password" register={register("password", {
                    required: "Enter Password",
                    pattern: {
                        value: RegEx.password.reg,
                        message: RegEx.password.message
                    }
                })} label="Password" error={errors.password} disabled={isSubmitting} autoComplete="new-password"/>

                <Button isSubmitting={isSubmitting} className="mt-4">Signup</Button>

                <Link to={"/auth/login"} className={isSubmitting ? "pointer-events-none select-none" : ""}>Not Have an
                    account login</Link>
            </AuthForm>
        </Container>
    );
}

export default Signup;