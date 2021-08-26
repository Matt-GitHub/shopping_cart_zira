import { Route, RouteComponentProps, Switch } from "react-router-dom";
import routes from "./routes";
const RouterRoutes = () => {
  return (
    <div>
      <div className="navigation">
        {routes.map((route, index) => {
          return (
            <div key={index}>
              <Switch>
                <Route
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              </Switch>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RouterRoutes;
