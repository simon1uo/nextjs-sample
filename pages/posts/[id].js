import Head from "next/head";
import Layout from "../../components/layout";
import utilsStyle from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: { postData },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{`${postData.title} | ${postData.date}`}</title>
            </Head>

            <article>
                <h1 className={utilsStyle.headingXl}>{postData.title}</h1>
                <br />
                <div className={utilsStyle.lightText}>{postData.date}</div>
                <br />
            </article>

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </Layout>
    );
}
