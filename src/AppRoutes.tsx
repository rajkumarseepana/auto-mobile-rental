import { Route, Routes } from 'react-router-dom'
import Layout from 'layout/Layout'
import { DASHBOARD } from 'data/navigations'
import Dashboard from 'components/Dashboard'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
            <Route path={DASHBOARD} element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes
