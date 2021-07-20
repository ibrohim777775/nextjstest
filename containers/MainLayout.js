import Head from "next/head";
import Link from "next/link";
import { StyledMainLayoutNav } from "../styles/MainLayoutNavStyled";
export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="nextjs, reactjs, javascript, redux" />
        <meta name="description" content="App for write and update posts" />
      </Head>
      <nav>
        <StyledMainLayoutNav>
          <div className="container">
            <Link href="/">
              <a>Posts</a>
            </Link>
            <Link href="/posts/new">
              <a>New Post</a>
            </Link>
          </div>
        </StyledMainLayoutNav>
      </nav>
      <main>{children}</main>
    </>
  );
}
