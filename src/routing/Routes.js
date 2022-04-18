
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmpData from "../components/EmpData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../components/Home';
import Parent from "../components/Parent";
import Child from "../components/Child";
import Login from "../components/Login";
import Page404 from '../components/Page404';
import Register from "../components/Register";


const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"  > <Home /> </Route>
                            <Route path="/home" > <Home /> </Route>
                            <Route path="/parent"> <Parent /> </Route>
                            <Route path="/child"> <Child /> </Route>
                            <Route path="/emp"> <EmpData /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/*"> <Page404 /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}


export default Routes;