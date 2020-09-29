import Head from 'next/head';
import HeroLand from '../components/HeroLand';
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
      <HeroLand />
    </main>
  );
};

export default IndexPage;
