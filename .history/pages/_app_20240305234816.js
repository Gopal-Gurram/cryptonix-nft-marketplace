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

    <script
      src="https://kit.fontawesome.com/d0db8599f8.js"
      crossorigin="anonymous"
    ></script>
  </ThemeProvider>
);

export default MyApp;

