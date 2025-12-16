import { NavLink } from "react-router-dom"
import { menuLinks } from "data/constantsData"
import { Facebook, Instagram, Mail, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto">
                <div className="border-b-2 py-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Auto mobile rental</h2>
                        <p className="text-gray-500">Premium rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>
                        <div className="flex gap-4 mt-2">
                            <Facebook size={18} />
                            <Instagram size={18} />
                            <Twitter size={18} />
                            <Mail size={18} />
                        </div>
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
                <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 py-4 gap-2">
                    <p>© 2025 Brand. All rights reserved.</p>
                    <p>Privacy | Terms</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
