import Head from 'next/head';
import Navbar from '../components/Navbar';

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

      <Navbar />
    </main>
  );
};

export default IndexPage;
