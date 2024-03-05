import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
);

export default MyApp;

