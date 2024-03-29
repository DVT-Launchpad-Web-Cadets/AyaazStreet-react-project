import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                {/* code for future reference */}
                {/* {
                    <Link to="/" className="">
                        Index
                    </Link>
                } */}
            </div>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
