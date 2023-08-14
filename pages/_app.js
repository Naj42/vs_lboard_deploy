import '@/styles/globals.css'
//import Navbar from '../components/Nav';
import Header from '../components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return <>
  
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  
}
