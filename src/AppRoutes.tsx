import { Route, Routes } from 'react-router-dom'
import Layout from 'layout/Layout'
import { AVAILABLE_CARS, DASHBOARD, MY_BOOKINGS } from 'data/navigations'
import Dashboard from 'components/Dashboard'
import AvailableCars from 'components/AvailableCars'
import MyBookings from 'components/MyBookings'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={DASHBOARD} element={<Dashboard />} />
                <Route path={AVAILABLE_CARS} element={<AvailableCars />} />
                <Route path={MY_BOOKINGS} element={<MyBookings />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
