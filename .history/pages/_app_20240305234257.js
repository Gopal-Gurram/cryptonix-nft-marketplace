import { ThemeProvider } from "next-themes";

import { NavBar, Footer } from "../components";
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

