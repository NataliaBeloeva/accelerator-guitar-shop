import { Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(): JSX.Element {

  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <MainScreen />
      </Route>
      {/* <Route exact path={`${AppRoute.Guitars}/:id`}>
        <ProductScreen />
      </Route> */}
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
