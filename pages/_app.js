import { NewsProvider } from "../newsContext";
import "@/styles/globals.css";
import Layout from "./layout";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <NewsProvider>
          <Component {...pageProps} />
        </NewsProvider>
      </Layout>
    </>
  );
}
