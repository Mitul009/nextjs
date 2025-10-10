import Header from "@/components/Header/Header"
import Footer from "./Footer/Footer"
import Hero from "@/components/Hero"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Hero/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout