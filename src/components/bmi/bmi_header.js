import React, {Fragment} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import chart from '../../images/bmi_chart_table.jpg'
//import logo from '../../../src/SoleFIT_logo.jpg'

import ABar from '../appbar'

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
    // Name of the component ⚛️ / style sheet    
    MuiAppBar: {
      // Name of the rule
      root: {
        // Some CSS
       /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        colorBackground: 'Yellow',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',*/
      },
    },
},
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    fontSize: 35,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 25,
  },
}))(TableCell);

let id = 0;
function createData( name, bmi_lvalue, char, bmi_hvalue) {
  id += 1;
  return { id, name, bmi_lvalue, char, bmi_hvalue  };
}

const data = [
  createData('Underweight', 0, 'to', 18.5),
  createData('Healthy weight', 18.5, 'to', 25),
  createData('Overweight', 25, 'to' ,30),
  createData('Obese', 30, 'to', 35),
 
];



  
     



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 0,
    //elevation: 1,
    

  },
  flex: {
    flex: 1,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}
);


export function Header (props) {
  const { classes } = props;

return (
    <Fragment>
    
    < ABar />

<Grid container >
    <Grid item sm>
        <Paper style= {styles.Paper}>
      
           <Typography variant="display2" color="secondary" align="center" style={{marginTop: 1}} backgroundcolor="accent2" >
          BODY MASS INDEX (BMI)
            </Typography>
            <Typography variant="display1" style={{marginTop: 15}}  color="primary" >
            What is BMI?
          </Typography>
            <Typography variant="title" style={{marginTop: 15}}>     
           
BMI is used as a screening tool to indicate whether a person is underweight, overweight, obese or a healthy weight for their height.

If a person's BMI is out of the healthy BMI range, their health risks may increase significantly.
BMI values are age-independent and the same for both sexes.
             </Typography>
              </Paper>
    
    </Grid>
</Grid>
<Grid  >
<Paper style= {styles.Paper} className={classes.root } backgroundColor="#3bc1f4">
<div className={classes.tableWrapper} align="center">

      <Table className={classes.table} >
      <TableHead>
        <TableRow>
         
          <CustomTableCell   >Category</CustomTableCell>
          <CustomTableCell  numeric>BMI</CustomTableCell>
          <CustomTableCell   >Value</CustomTableCell>
          <CustomTableCell  numeric>Range</CustomTableCell>
        
          </TableRow>
      </TableHead>
      <TableBody>
      {data.map(n => {
          return (
            <TableRow className={classes.row} key={n.id}>
       
              <CustomTableCell component="th" scope="row">
                {n.name}
              </CustomTableCell>
              <CustomTableCell  numeric >{n.bmi_lvalue}</CustomTableCell>
              <CustomTableCell  >{n.char}</CustomTableCell>
              <CustomTableCell  numeric >{n.bmi_hvalue}</CustomTableCell>
             
              </TableRow>
          );
        })}
      </TableBody>
    </Table>
    <Typography align="centre">
  <img src={chart} />  
  </Typography>
  </div> 
  
  </Paper>
  
  </Grid>
  
  </Fragment>
  );
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
//<img src={bmichart} alt="BMI CHART" align="right" />