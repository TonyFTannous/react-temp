import React, { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import LoaderScreen from '@/components/Screen/Loader/LoaderScreen';
import ContentScreen from '@/components/Screen/Content/ContentScreen';

import { delay } from '@/helper';

// import classes from '@/pages/Dashboards/Dashboards.module.css'

const HomePage: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  const { homeData }: any = useLoaderData();

  return (
    <Suspense fallback={<LoaderScreen text="Loading" />}>
      <Await resolve={homeData}>
        {(loadedData) => (
          <ContentScreen title={title} description={description}>
            {/* use loadedData here to render what we need  */}
            <div />
          </ContentScreen>
        )}
      </Await>
    </Suspense>
  );
};

const homeData = async () => {
  //* replace the statements below an async/await request, that return the dashboard data
  await delay(2000);
  return []; // --> return dashboard data
};

export const loader = () => {
  return defer({
    homeData: homeData()
  });
};

export default HomePage;
