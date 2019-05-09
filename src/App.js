import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Layout from './components/Layout/Layout';
import Home from './screens/Home/Home';
import Map from './screens/Map/Map';
import AddLocation from './screens/AddLocation/AddLocation';
import Donate from './screens/Donate/Donate';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import NotFound from './screens/NotFound/NotFound';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/map/locations/add" component={AddLocation} />
            <Route path="/map" component={Map} />
            <Route path="/about" component={About} />
            <Route path="/donate" component={Donate} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
