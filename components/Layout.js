
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../src/styles/utils.module.css"
import Link from "next/link";

const name = "Vermouth Code";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/Vermouth.jpeg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/Vermouth.jpeg" className={`${utilStyles.borderCircle} ${styles.headerImage}`} />
            <h1 className={utilStyles.headingXl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">👈 ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
