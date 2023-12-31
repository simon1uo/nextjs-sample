import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const name = "sample";
export const siteTitle = "blog sample";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
                <meta name="description" content="personal page"></meta>
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <img src="/images/profile.png" className={`${styles.headerImage} ${utilsStyles.borderCircle}`} alt={name} />
                        </Link>
                        <h2 className={utilsStyles.headingLg}>
                            <Link href="/" className={utilsStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home 🏠</Link>
                </div>
            )}
        </div>
    );
}
