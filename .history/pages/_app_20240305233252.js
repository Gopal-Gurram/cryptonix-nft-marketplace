import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="classic">
    <div>
      <h1>NavBar</h1>
      <Component {...pageProps} />
      <h1>Footer</h1>
    </div>
  </ThemeProvider>
);

export default MyApp;

