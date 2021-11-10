import { Navigation } from "./components/navigation/Navigation";
import { Switch, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./views/HomePageView' /* webpackChunkName: "home-view" */));
const MoviesPage = lazy(() => import('./components/moviesPage/MoviesPage') /*webpackChunkName : "movies-page" */);
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage')/*webpackChunkName : "movies-details-page"*/);



export const App = () => {
    return ( <>
        <Navigation />
        <Suspense fallback = {<div>Loading...</div>}>
        <Switch>
        <Route path="/" exact><HomePage /></Route>
        <Route path="/movies" exact><MoviesPage /></Route>
            <Route path="/movies/:movieId"><MovieDetailsPage /></Route>
            <Route><HomePage/></Route>
            </Switch>
            </Suspense>
   </>)
}


