import Navigation from "../components/Navigation/Navigation";
import React from "react";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navigation />
            {children}
        </div>
     );
}
export default Layout;