import { NewsProvider } from "../newsContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NewsProvider>
      <Component {...pageProps} />;
    </NewsProvider>
  );
}
