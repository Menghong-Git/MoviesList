import { Button } from "@/components/ui/button"


const SignUpButton = () => {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <a href="/SignUp">
                <Button>
                    SignUp
                </Button>
            </a>
        </div>
    )
}

export default SignUpButton
