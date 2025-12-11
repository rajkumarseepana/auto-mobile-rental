import Button from "ui/Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "ui/Dialog"
import { Input } from "ui/Input";
import { Label } from "ui/Label";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBackToLogin: () => void;
}

const SignUp = ({ open, onOpenChange, onBackToLogin }: Props) => {

    const handleCreateAccount = () => {

    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle className='flex gap-2 items-center'>
                        <div className='text-xl text-blue-400 cursor-pointer'>User</div>
                        <h1>Sign Up</h1>
                    </DialogTitle>
                </DialogHeader>
                <div className='space-y-4'>
                    <div>
                        <Label>Name</Label>
                        <Input type='text' placeholder='e.g.,Raj Kumar'
                            className='rounded-lg'
                        />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type='text' placeholder='e.g.,rajkumar123@gmail.com'
                            className='rounded-lg'
                        />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input type="password" placeholder='e.g.,***43'
                            className='rounded-lg'
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Label>Already have account?</Label>
                        <div className='text-sm text-blue-400 cursor-pointer'
                            onClick={() => {
                                onOpenChange(false);   // close signup
                                onBackToLogin();       // open login (via parent/Login)
                            }}
                        >Click here</div>
                    </div>
                </div>
                <DialogFooter>
                    <div className='flex w-full justify-between'>
                        <Button variant='outline'
                            onClick={() => onOpenChange(false)}
                        >Cancel</Button>
                        <Button onClick={handleCreateAccount}>Create account</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignUp
