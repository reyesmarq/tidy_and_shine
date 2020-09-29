import Head from 'next/head';
import { Nav } from '../components/Nav';

const IndexPage = () => {
  return (
    <main>
      <Head>
        <title>Tidy and Shine | landing page</title>
        <meta
          name="description"
          content="This is the description of the landing page"
        />
      </Head>

      <Nav />
    </main>
  );
};

export default IndexPage;
