import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loader from '../src/components/loader'
import store from '../src/redux/store'
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Home = React.lazy(() => import('../src/views/Home')); 


function App() {
  return (
    <Provider store={store}>
    <HashRouter>
    <React.Suspense fallback={<Loader/>}>
      <Switch>
        <Route
        exact
        path="/"
        name="Home Page"
        render={props => <Home {...props} />}
        />
      </Switch>
    </React.Suspense>
    </HashRouter>
    </Provider>
  );
}

export default App;
