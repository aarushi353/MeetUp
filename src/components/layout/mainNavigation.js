import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites{" "}
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
