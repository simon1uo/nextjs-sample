import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilsStyle from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilsStyle.headingMd}>
                <p>Hello 👋</p>
            </section>

            <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
                <h2 className={utilsStyle.headingLg}>Posts</h2>
                <ul className={utilsStyle.list}>
                    {allPostsData.map(({ id, title, date }) => (
                        <li key={id} className={utilsStyle.listItem}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilsStyle.lightText}>{date}</small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
