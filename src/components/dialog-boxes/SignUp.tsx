import { useState } from "react";
import toast from "react-hot-toast";
import Button from "ui/Button";
import { Label } from "ui/Label";
import { Input } from "ui/Input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "ui/Dialog"
import { isEmpty } from "utils/TextUtils";
import { Eye, EyeOff } from "lucide-react";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBackToLogin: () => void;
}

const SignUp = ({ open, onOpenChange, onBackToLogin }: Props) => {
    const [form, setForm] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false);

    const inputValidation = () => {
        if (isEmpty(form?.userName)) {
            toast.error("Name must not be empty.", { id: "1" });
            return false;
        } else if (isEmpty(form?.userEmail)) {
            toast.error("Email must not be empty.", { id: "1" });
            return false;
        } else if (isEmpty(form?.userPassword)) {
            toast.error("Password must not be empty.", { id: "1" });
            return false;
        }
        return true;
    }

    const handleCreateAccount = () => {
        if (!inputValidation()) return;

        const payload = {
            name: form?.userName,
            email: form?.userEmail,
            password: form?.userPassword,
        }
        console.log("Created new user:", payload);
        toast.error("Api not yet integrated", { id: "1" });
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
                        <Input type='text'
                            placeholder='e.g.,Raj Kumar'
                            className='rounded-lg'
                            value={form?.userName}
                            onChange={(e) => setForm({ ...form, userName: e.target.value })}
                        />
                    </div>
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
                        <div className="relative">
                            <Input type={showPassword ? "text" : "password"}
                                placeholder='e.g.,***43'
                                className='rounded-lg'
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
