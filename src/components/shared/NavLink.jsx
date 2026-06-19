import { NavLink } from "react-router";



const MyNavLink = ({to, children}) => {
    return (
        <div>
              <NavLink to={to} 
                        className={({isActive}) => `font-semibold pb-2 ${isActive? "text-purple-500 border-b border-purple-500" : ""}`}>{children}</NavLink>
        </div>
    );
};

export default MyNavLink;