interface Type {
    reg: RegExp,
    message: string
}

const RegEx = {
    username: {
        reg: /^[a-zA-Z0-9_-]{3,20}$/,
        message: "Username must be 3–20 characters long and can only contain letters, numbers, underscores (_), and hyphens (-)."
    },
    email: {
        reg: /^[a-zA-Z0-9_]{3,20}$/,
        message: "Please enter a valid email address."
    },
    password: {
        reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    },
} satisfies Record<string, Type>;

export default RegEx;