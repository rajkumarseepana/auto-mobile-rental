import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'ui/Button';
import { Input } from 'ui/Input';
import { Label } from 'ui/Label';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from 'ui/Dialog'
import SignUp from './SignUp';
import { isEmpty } from 'utils/TextUtils';
import { Eye, EyeOff } from 'lucide-react';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Login = ({ open, onOpenChange }: Props) => {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        userEmail: "",
        userPassword: "",
    })

    const inputValidation = () => {
        if (isEmpty(form?.userEmail)) {
            toast.error("Email must not be empty.", { id: "1" });
            return false;
        } else if (isEmpty(form?.userPassword)) {
            toast.error("Password must not be empty.", { id: "1" });
            return false;
        }
        return true;
    }

    const handleLogin = () => {
        if (!inputValidation()) return;

        const payload = {
            email: form?.userEmail,
            password: form?.userPassword,
        }

        console.log("logged in user", payload);
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
                                <Input type='text'
                                    placeholder='e.g.,rajkumar123@gmail.com'
                                    className='rounded-lg'
                                    value={form?.userEmail}
                                    onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Password</Label>
                                <div className='relative'>
                                    <Input type={showPassword ? "text" : "password"}
                                        placeholder='e.g.,***437'
                                        className='rounded-lg pr-10'
                                        value={form?.userPassword}
                                        onChange={(e) => setForm({ ...form, userPassword: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
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
