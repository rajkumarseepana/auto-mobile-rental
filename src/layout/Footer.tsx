import { menuLinks } from "data/constantsData"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Auto mobile rental</h2>
                    Premium rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        {menuLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block hover:text-gray-500 ${isActive ? "text-primary font-medium" : ""
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Resources</h2>
                    <div className="space-y-1">
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Contact</h2>
                    <div className="space-y-1">
                        <p>Email: info@automobile.com</p>
                        <p>Call: +91 1234567890</p>
                        <p>Address: Srikakulam, AP, India.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
