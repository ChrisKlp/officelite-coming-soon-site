import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import SignUp from 'views/SignUp';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route component={Home} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
