
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmpData from "../components/EmpData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../components/Home';
import Parent from "../components/Parent";
import Child from "../components/Child";
import Page404 from '../components/Page404';
import Logout from '../components/Logout';
import { Redirect } from 'react-router-dom';

const AdminRoutes = () => {

    return (
        <div >
            <Router>
                <div>
                    <Header />
                    <div style={{ minHeight: "79vh" }}>
                        <Switch>
                            <Route exact path="/" > <Home /> </Route>
                            <Route path="/home" > <Home /> </Route>
                            <Route path="/parent"> <Parent /> </Route>
                            <Route path="/child"> <Child /> </Route>
                            <Route path="/emp"> <EmpData /> </Route>
                            <Route path="/register"> <Redirect to="/" /> </Route>
                            <Route path="/login"> <Redirect to="/" /> </Route>
                            <Route path="/logout"> <Logout /> </Route>
                            <Route path="/*"> <Page404 /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div >
    );
}


export default AdminRoutes;