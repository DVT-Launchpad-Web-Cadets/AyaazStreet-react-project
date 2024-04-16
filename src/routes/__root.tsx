import { createRootRoute, Outlet } from '@tanstack/react-router'
import Footer from '../components/Footer'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            {/* Saving for later when working on project after marking */}
            <TanStackRouterDevtools />
        </>
    ),
})
