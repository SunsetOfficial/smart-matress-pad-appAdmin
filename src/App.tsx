import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import TextValues from './pages/TextValues';
import VideoValues from './pages/VideoValues';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          path="/smart-matress-pad-appAdmin/textValues"
          element={
            <>
              <PageTitle title="TextValues" />
              <TextValues />
            </>
          }
        />
        <Route
          path="/smart-matress-pad-appAdmin/videoValues"
          element={
            <>
              <PageTitle title="VideoValues" />
              <VideoValues />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
