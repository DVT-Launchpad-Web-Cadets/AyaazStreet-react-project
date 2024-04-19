import Navbar from "../components/Navbar"

function ErrorPage() {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center w-screen h-screen">
                <h1>404 Not Found</h1>
            </main>
        </>
    )
}

export default ErrorPage
