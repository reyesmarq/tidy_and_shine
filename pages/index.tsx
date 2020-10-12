import Head from 'next/head';
import Landing from '../components/Landing';
import Skeleton from 'react-loading-skeleton';

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

      <Landing />
    </main>
  );
};

export default IndexPage;
