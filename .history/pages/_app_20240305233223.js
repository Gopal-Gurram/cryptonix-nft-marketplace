import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <h1>NavBar</h1>
    <Component {...pageProps} />
    <h1>Footer</h1>
  </div>
);

export default MyApp;

