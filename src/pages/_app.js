import "@/styles/globals.css";
import Layout from "@/components/layout";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
const MyApp = ({ Component, pageProps }) => (
    <>
        <DefaultSeo
            title="Tina Mimika"
            description="Medium range photographer portfolio site"
            openGraph={{
                type: "website",
                locale: "en_IE",
                url: "https://www.tinamimika.fr/",
                siteName: "TinaMimika",
            }}
        />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
);

export default appWithTranslation(MyApp);
