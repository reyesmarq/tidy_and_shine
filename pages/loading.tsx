import Skeleton from 'react-loading-skeleton';

const LoadingPage = () => {
  return (
    <>
      <Skeleton duration={3} />
      <h1>loading</h1>
    </>
  );
};

export default LoadingPage;
