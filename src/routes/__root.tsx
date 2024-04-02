import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            {/* Saving for later when working on project after marking
            <TanStackRouterDevtools /> */}
        </>
    ),
})
