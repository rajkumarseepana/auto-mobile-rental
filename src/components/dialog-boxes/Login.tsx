import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'ui/Button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from 'ui/Dialog'
import { Input } from 'ui/Input';
import { Label } from 'ui/Label';
import SignUp from './SignUp';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Login = ({ open, onOpenChange }: Props) => {
    const [openSignUp, setOpenSignUp] = useState(false);

    const handleLogin = () => {
        toast.error("Api error", { id: "1" });
    }

    return (
        <>
            {!openSignUp && (
                <Dialog open={open} onOpenChange={onOpenChange}>
                    <DialogContent className='bg-white'>
                        <DialogHeader>
                            <DialogTitle className='flex gap-2 items-center'>
                                <div className='text-xl text-blue-400 cursor-pointer'>User</div>
                                <h1>Login</h1>
                            </DialogTitle>
                        </DialogHeader>
                        <div className='space-y-4'>
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
                                <Label>Create new account?</Label>
                                <div className='text-sm text-blue-400 cursor-pointer'
                                    onClick={() => {
                                        setOpenSignUp(true);
                                    }}
                                >Click here</div>
                            </div>
                        </div>
                        <DialogFooter>
                            <div className='flex w-full justify-between'>
                                <Button variant='outline'
                                    onClick={() => onOpenChange(false)}
                                >Cancel</Button>
                                <Button onClick={handleLogin}>Login</Button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
            {openSignUp && (
                <SignUp
                    open={openSignUp}
                    onOpenChange={setOpenSignUp}
                    onBackToLogin={() => {
                        setOpenSignUp(false);
                        onOpenChange(true);
                    }}
                />
            )}
        </>
    )
}

export default Login
