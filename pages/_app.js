import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer"
export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
