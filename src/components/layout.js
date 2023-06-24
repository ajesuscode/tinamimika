import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="h-full">{children}</main>
            <Footer />
        </>
    );
}
