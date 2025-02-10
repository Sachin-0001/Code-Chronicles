import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer"
import Layout from "@/components/Layout"
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }) {
  return <>
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  </>
}
