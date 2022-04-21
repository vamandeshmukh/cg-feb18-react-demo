import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Page404 = () => {

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShouldRedirect(true);
        }, 3000); 
    }, 
    []);

    if (shouldRedirect) {
        return (
            <Redirect to="/" />
        );
    }
    else {
        return (
            <div className="container">
                <h1>Oops!</h1>
                <p>The page you are looking for is not found.</p>
                <p>redirecting to home...</p>
                <Link className="btn btn-primary" to="/home" >Let's go home now.</Link>
            </div>
        );
    }

}

export default Page404;