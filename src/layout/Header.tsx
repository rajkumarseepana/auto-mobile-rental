import { Link, useLocation } from "react-router-dom"
import { menuLinks } from "../data/constantsData"

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === "/"

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
                    <Link key={index} to={link.path} className="hover:text-primary text-2xl">
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header