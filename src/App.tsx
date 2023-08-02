import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

import RootLayout from '@/pages/Root/Root';
import ErrorPage from '@/pages/Error/Error';
import LoaderScreen from '@/components/Screen/Loader/LoaderScreen';
import HomePage, { loader as homeLoader } from '@/pages/Home/Home';
import AnalyticsPage, {
  loader as analyticsLoader
} from '@/pages/Analytics/Analytics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: (
          <HomePage
            title="Welcome, Tony Tannous"
            description="You have 2 new messages and 15 new tasks"
          />
        ),
        handle: {
          crumb: (pathName: string, isActive: boolean, data?: any) => {
            return isActive ? 'Home' : <Link to={pathName}>Home</Link>;
          }
        }
      },
      {
        path: 'analytics',
        loader: analyticsLoader,
        element: (
          <AnalyticsPage
            title="Analytics dashbord"
            description="Monitor metrics, check reports and review performance"
          />
        ),
        handle: {
          crumb: (pathName: string, isActive: boolean, data?: any) => {
            return isActive ? (
              'Analytics'
            ) : (
              <Link to={pathName}>Analytics</Link>
            );
          }
        }
      }
    ]
  }
]);

// const init = () => {};

const App: React.FC = () => {
  const [init, setInit] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual loading tasks
    // (an async/await requests that initialize data) e.g: init function)
    const timer = setTimeout(() => {
      setInit(false);
    }, 3000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  if (init) {
    return <LoaderScreen />;
  }

  return <RouterProvider router={router} />;
};

export default App;
