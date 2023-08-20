import "@/styles/globals.css";
import Layout from "@/components/layout";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default appWithTranslation(MyApp);
