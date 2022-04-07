import { Route } from "react-router";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { UserSession } from "./components/UserSession";

function App()  {

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/user-session" component={UserSession} />
    </Layout>
  );
}

export default App;
