import React from 'react'; 
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home   </NavLink>
            <NavLink to="/myprofile">My Profile Page   </NavLink>
            <NavLink to="/BMI">BMI Page   </NavLink>
            <NavLink to="/dietplan">Diet Plan Page</NavLink>
        </div>
    );
};

export default Navigation;
