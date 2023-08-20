import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Image from "next/image";
import mimika from "@/assets/mimika.jpeg";

export default function About() {
    const router = useRouter();
    const { t } = useTranslation("about");

    return (
        <section className="relative md:p-28 lg:py-24 px-12 bg-zinc-950 h-full py-20 lg:text-2xl overflow-y-auto">
            <button
                className="absolute top-4 right-4 border border-zinc-400 w-8 h-8 rounded-sm font-display text-zinc-400 text-xs lg:text-sm"
                onClick={() => {
                    const newLocale = router.locale === "en" ? "fr" : "en";
                    router.push(router.asPath, undefined, {
                        locale: newLocale,
                    });
                }}
            >
                {router.locale === "en" ? "fr" : "en"}
            </button>
            <div className="flex flex-col justify-center items-center gap-4">
                <div>
                    <p className="font-body font-normal text-zinc-200 ">
                        {t("intro")} Tina Mimika {t("description")}
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        {t("paragraph1")}
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        {t("paragraph2")}
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        {t("paragraph3")}
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        {t("paragraph4")}
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        {t("closing")}
                    </p>
                </div>
            </div>
        </section>
    );
}

export const getServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about"])),
        },
    };
};
