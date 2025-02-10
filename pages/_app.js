import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer"
import Layout from "@/components/Layout"
export default function App({ Component, pageProps }) {
  return <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </>
}
