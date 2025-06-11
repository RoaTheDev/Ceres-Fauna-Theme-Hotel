
interface LoginDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onLogin: (email: string) => void;
}


const LoginDialog = ({ open, onOpenChange, onLogin }: LoginDialogProps) => {
    return (
        <>
        I Love Rem
        </>
    )
}
export default LoginDialog;
