
import Head from "next/head";
import Layout from "../../../components/Layout";
import { getAllPostIds, getPostData } from "../../../lib/post";
import utilStyle from "../../styles/utils.module.css";

// 開発環境はSSRで少し遅延するが、デプロイすればSSGで生成
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,   // paths以外は404「Not Found」になる
  };
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingX1}>
          {postData.title}
        </h1>
        <div className={utilStyle.lightText}>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
};
