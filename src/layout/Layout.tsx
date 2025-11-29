import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            <div className="flex flex-col flex-1">
                <Header />

                <div className="flex-1 overflow-y-auto lg:peer-hover:pl-64 bg-gray-50 h-[calc(100vh-4rem)] transition-all duration-300">
                    <div className=' px-10 py-4 flex-1 overflow-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
