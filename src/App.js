import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
function App() {
  //path
  //localhost:3000
  //my-page.com/

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
//https://codewithstupid.com/react-router-with-switch-and-link
//image upload-->https://academind.com/tutorials/reactjs-image-upload/