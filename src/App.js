import './App.css';
import React, {lazy, Suspense} from 'react';
import Loading from './Component/Loading';
const Home = lazy(() => import('./Page/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />} >
      <Home />
    </Suspense>
  );
}

export default App;