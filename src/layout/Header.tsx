import { Link, useLocation } from "react-router-dom"
import { Search } from "lucide-react"
import { menuLinks } from "data/constantsData"
import { Input } from "ui/Input"
import Button from "ui/Button"
import { useState } from "react"
import Login from "components/dialog-boxes/Login"

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <header
            className={`w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4
                text-gray-600 border-b border-borderColor
                ${isHome ? "bg-white" : "bg-light"}`}
        >
            <Link to="/" className="shrink-0">
                <img
                    src="/logo1.png"
                    alt="logo"
                    className="h-14 w-auto inline-block"
                />
            </Link>

            <nav className="flex items-center gap-6">
                {menuLinks.map((link, index) => (
                    <Link key={index} to={link.path} className={`text-2xl hover:text-gray-500 
                        ${location.pathname === link.path ? "text-primary" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="relative">
                    <Input type="text" className="pr-9 h-9" placeholder="Search products..." />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                </div>
                <Button variant="primary"
                    onClick={() => { setOpenLogin(true) }}
                >
                    Log In
                </Button>
            </nav>
            {openLogin && (
                <Login
                    open={openLogin}
                    onOpenChange={setOpenLogin}
                />
            )}
        </header>
    )
}

export default Header