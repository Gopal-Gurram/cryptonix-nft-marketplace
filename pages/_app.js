import { ThemeProvider } from "next-themes";
import { Script } from "next/script";

import { NavBar, Footer } from "../components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script
      src="https://kit.fontawesome.com/d0db8599f8.js"
      crossOrigin="anonymous"
    />
  </ThemeProvider>
);

export default MyApp;

