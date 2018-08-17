import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import Services from './Services';
import FunPage from './FunPage';
import Contact from './Contact';
import NotFound from './NotFound';
import MovieDetail from './ApiResults/MovieDetail';
import Layout from './Layout';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/resume" component={Resume} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/services" component={Services} exact={true} />
            <Route path="/fun-page" component={FunPage} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />
            <Route path="/movie/:id" component={MovieDetail} exact={true} />
            <Route path="/" component={Home} exact={true} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;