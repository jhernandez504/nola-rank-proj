import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { AlertProvider } from '../context/AlertContext';
import AlertBanner from '../components/AlertBanner';
function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <Navbar />
      <AlertBanner />
      <Component {...pageProps} />
    </AlertProvider>
  );
}

export default MyApp;
