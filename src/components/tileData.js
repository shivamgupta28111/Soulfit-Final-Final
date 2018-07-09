// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import {NavLink} from 'react-router-dom'



export const mailFolderListItems = (
  <div><NavLink to="/">  
  <ListItem button>
    <ListItemIcon>
    <StarIcon />
    </ListItemIcon>
    <ListItemText primary="HomePage" />
  </ListItem>
  </NavLink>
    <NavLink to="/myprofile">  
    <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
    </NavLink>
    <NavLink to="/BMI"> 
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Calculate BMI" />
    </ListItem>
    </NavLink>
    <NavLink to="/dietplan">
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItem>
    </NavLink>
  </div>
);
