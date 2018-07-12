import React, { Fragment, Component } from "react";

import '../../App.css'
import Paper from '@material-ui/core/Paper';
import Firebase from '../../firebase';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import ABar from '../appbar'
import Searchbar from './search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
const API_KEY = 'AIzaSyCUAz81B-N4iNHprsiyTim474pf4ase9HM';

const diet_types = [
  'Veg', 'NVeg', 'Keto'
]
const meal_types = [
  'Breakfast', 'Lunch', 'Snacks', 'Dinner'
]
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
  },
});

Firebase;

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: 500,
  },

});


class Healthydietplan extends Component{
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

   
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
      });
    }

  constructor(){
    super();
    this.state={
      videos: [], 
      selectedVideo: null,
      ingr:'a',
      name:'a',
      prep: 'a',
      nutrients:'a'
    
    };
    this.videoSearch('fitness excercise and diet plan');
  }
    
  componentDidMount(meal_types) {
    const rootRef = Firebase.database().ref().child('react/Dietplan');
    const vdescRef = rootRef.child('Veg/Desc')
    const vname1Ref = rootRef.child('Veg/Lunch/Recipe1/name');
    const vnutrients1Ref = rootRef.child('Veg/Lunch/Recipe1/nutrients');
    const vingr1Ref = rootRef.child('Veg/Lunch/Recipe1/ingr');
    const vprep1Ref = rootRef.child('Veg/Lunch/Recipe1/prep');

    vdescRef.on('value', snap =>{
      this.setState({
        vdesc:snap.val()
        
       });
      });
    vname1Ref.on('value', snap =>{
     this.setState({
       vname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients1Ref.on('value', snap =>{
      this.setState({
        vnutrients1:snap.val()
      });
    });
      vingr1Ref.on('value', snap =>{
        this.setState({
         vingr1:snap.val()
     });
    });
    
    vprep1Ref.on('value', snap =>{
       this.setState({
         vprep1:snap.val()
      });
    });

    const vname2Ref = rootRef.child('Veg/Dinner/Recipe2/name');
    const vnutrients2Ref = rootRef.child('Veg/Dinner/Recipe2/nutrients');
    const vingr2Ref = rootRef.child('Veg/Dinner/Recipe2/ingr');
    const vprep2Ref = rootRef.child('Veg/Dinner/Recipe2/prep');
    vname2Ref.on('value', snap =>{
     this.setState({
       vname2:snap.val()
       
      });
      
    });
    vnutrients2Ref.on('value', snap =>{
      this.setState({
        vnutrients2:snap.val()
      });
    });
      vingr2Ref.on('value', snap =>{
        this.setState({
        vingr2:snap.val()
     });
    });
    
    vprep2Ref.on('value', snap =>{
       this.setState({
         vprep2:snap.val()
      });
    });

    const vname3Ref = rootRef.child('Veg/Dinner/Recipe3/name');
    const vnutrients3Ref = rootRef.child('Veg/Dinner/Recipe3/nutrients');
    const vingr3Ref = rootRef.child('Veg/Dinner/Recipe3/ingr');
    const vprep3Ref = rootRef.child('Veg/Dinner/Recipe3/prep');
    vname3Ref.on('value', snap =>{
     this.setState({
       vname3:snap.val()
       
      });
     
    });
    vnutrients3Ref.on('value', snap =>{
      this.setState({
        vnutrients3:snap.val()
      });
    });
      vingr3Ref.on('value', snap =>{
        this.setState({
         vingr3:snap.val()
     });
    });
    
    vprep3Ref.on('value', snap =>{
       this.setState({
         vprep3:snap.val()
      });
    });

    
    
    
    const vname4Ref = rootRef.child('Veg/Breakfast/Recipe1/name');
    const vnutrients4Ref = rootRef.child('Veg/Breakfast/Recipe1/nutrients');
    const vingr4Ref = rootRef.child('Veg/Breakfast/Recipe1/ingr');
    const vprep4Ref = rootRef.child('Veg/Breakfast/Recipe1/prep');

    
    vname4Ref.on('value', snap =>{
     this.setState({
       vname4:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients4Ref.on('value', snap =>{
      this.setState({
        vnutrients4:snap.val()
      });
    });
      vingr4Ref.on('value', snap =>{
        this.setState({
         vingr4:snap.val()
     });
    });
    
    vprep4Ref.on('value', snap =>{
       this.setState({
         vprep4:snap.val()
      });
    });

    
 
    const vname5Ref = rootRef.child('Veg/Snacks/Recipe1/name');
    const vnutrients5Ref = rootRef.child('Veg/Snacks/Recipe1/nutrients');
    const vingr5Ref = rootRef.child('Veg/Snacks/Recipe1/ingr');
    const vprep5Ref = rootRef.child('Veg/Snacks/Recipe1/prep');

    vname5Ref.on('value', snap =>{
     this.setState({
       vname5:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients5Ref.on('value', snap =>{
      this.setState({
        vnutrients5:snap.val()
      });
    });
      vingr5Ref.on('value', snap =>{
        this.setState({
         vingr5:snap.val()
     });
    });
    
    vprep5Ref.on('value', snap =>{
       this.setState({
         vprep5:snap.val()
      });
    });












    
    const nvdescRef = rootRef.child('NVeg/Desc')
    const nvname1Ref = rootRef.child('NVeg/Lunch/Recipe1/name');
    const nvnutrients1Ref = rootRef.child('NVeg/Lunch/Recipe1/nutrients');
    const nvingr1Ref = rootRef.child('NVeg/Lunch/Recipe1/ingr');
    const nvprep1Ref = rootRef.child('NVeg/Lunch/Recipe1/prep');

    nvdescRef.on('value', snap =>{
      this.setState({
        nvdesc:snap.val()
        
       });
      });
    nvname1Ref.on('value', snap =>{
     this.setState({
       nvname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients1Ref.on('value', snap =>{
      this.setState({
        nvnutrients1:snap.val()
      });
    });
      nvingr1Ref.on('value', snap =>{
        this.setState({
         nvingr1:snap.val()
     });
    });
    
    nvprep1Ref.on('value', snap =>{
       this.setState({
         nvprep1:snap.val()
      });
    });

    const nvname2Ref = rootRef.child('NVeg/Dinner/Recipe2/name');
    const nvnutrients2Ref = rootRef.child('NVeg/Dinner/Recipe2/nutrients');
    const nvingr2Ref = rootRef.child('NVeg/Dinner/Recipe2/ingr');
    const nvprep2Ref = rootRef.child('NVeg/Dinner/Recipe2/prep');
    nvname2Ref.on('value', snap =>{
     this.setState({
       nvname2:snap.val()
       
      });
      
    });
    nvnutrients2Ref.on('value', snap =>{
      this.setState({
        nvnutrients2:snap.val()
      });
    });
      nvingr2Ref.on('value', snap =>{
        this.setState({
        nvingr2:snap.val()
     });
    });
    
    nvprep2Ref.on('value', snap =>{
       this.setState({
         nvprep2:snap.val()
      });
    });

    const nvname3Ref = rootRef.child('NVeg/Dinner/Recipe3/name');
    const nvnutrients3Ref = rootRef.child('NVeg/Dinner/Recipe3/nutrients');
    const nvingr3Ref = rootRef.child('NVeg/Dinner/Recipe3/ingr');
    const nvprep3Ref = rootRef.child('NVeg/Dinner/Recipe3/prep');
    nvname3Ref.on('value', snap =>{
     this.setState({
       nvname3:snap.val()
       
      });
     
    });
    nvnutrients3Ref.on('value', snap =>{
      this.setState({
        nvnutrients3:snap.val()
      });
    });
      nvingr3Ref.on('value', snap =>{
        this.setState({
         nvingr3:snap.val()
     });
    });
    
    nvprep3Ref.on('value', snap =>{
       this.setState({
         nvprep3:snap.val()
      });
    });

    
    
    
    const nvname4Ref = rootRef.child('NVeg/Breakfast/Recipe1/name');
    const nvnutrients4Ref = rootRef.child('NVeg/Breakfast/Recipe1/nutrients');
    const nvingr4Ref = rootRef.child('NVeg/Breakfast/Recipe1/ingr');
    const nvprep4Ref = rootRef.child('NVeg/Breakfast/Recipe1/prep');

    
    nvname4Ref.on('value', snap =>{
     this.setState({
       nvname4:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients4Ref.on('value', snap =>{
      this.setState({
        nvnutrients4:snap.val()
      });
    });
      nvingr4Ref.on('value', snap =>{
        this.setState({
         nvingr4:snap.val()
     });
    });
    
    nvprep4Ref.on('value', snap =>{
       this.setState({
         nvprep4:snap.val()
      });
    });

   
   
    const nvname5Ref = rootRef.child('NVeg/Snacks/Recipe1/name');
    const nvnutrients5Ref = rootRef.child('NVeg/Snacks/Recipe1/nutrients');
    const nvingr5Ref = rootRef.child('NVeg/Snacks/Recipe1/ingr');
    const nvprep5Ref = rootRef.child('NVeg/Snacks/Recipe1/prep');

    nvname5Ref.on('value', snap =>{
     this.setState({
       nvname5:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients5Ref.on('value', snap =>{
      this.setState({
        nvnutrients5:snap.val()
      });
    });
      nvingr5Ref.on('value', snap =>{
        this.setState({
         nvingr5:snap.val()
     });
    });
    
    nvprep5Ref.on('value', snap =>{
       this.setState({
         nvprep5:snap.val()
      });
    });














    
    
  
    const kdescRef = rootRef.child('Keto/Desc')
    const kname1Ref = rootRef.child('Keto/Lunch/Recipe1/name');
    const knutrients1Ref = rootRef.child('Keto/Lunch/Recipe1/nutrients');
    const kingr1Ref = rootRef.child('Keto/Lunch/Recipe1/ingr');
    const kprep1Ref = rootRef.child('Keto/Lunch/Recipe1/prep');

    kdescRef.on('value', snap =>{
      this.setState({
        kdesc:snap.val()
        
       });
      });
    kname1Ref.on('value', snap =>{
     this.setState({
       kname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients1Ref.on('value', snap =>{
      this.setState({
        knutrients1:snap.val()
      });
    });
      kingr1Ref.on('value', snap =>{
        this.setState({
         kingr1:snap.val()
     });
    });
    
    kprep1Ref.on('value', snap =>{
       this.setState({
         kprep1:snap.val()
      });
    });

    const kname2Ref = rootRef.child('Keto/Dinner/Recipe2/name');
    const knutrients2Ref = rootRef.child('Keto/Dinner/Recipe2/nutrients');
    const kingr2Ref = rootRef.child('Keto/Dinner/Recipe2/ingr');
    const kprep2Ref = rootRef.child('Keto/Dinner/Recipe2/prep');
    kname2Ref.on('value', snap =>{
     this.setState({
       kname2:snap.val()
       
      });
      
    });
    knutrients2Ref.on('value', snap =>{
      this.setState({
        knutrients2:snap.val()
      });
    });
      kingr2Ref.on('value', snap =>{
        this.setState({
        kingr2:snap.val()
     });
    });
    
    kprep2Ref.on('value', snap =>{
       this.setState({
         kprep2:snap.val()
      });
    });

    const kname3Ref = rootRef.child('Keto/Dinner/Recipe3/name');
    const knutrients3Ref = rootRef.child('Keto/Dinner/Recipe3/nutrients');
    const kingr3Ref = rootRef.child('Keto/Dinner/Recipe3/ingr');
    const kprep3Ref = rootRef.child('Keto/Dinner/Recipe3/prep');
    kname3Ref.on('value', snap =>{
     this.setState({
       kname3:snap.val()
       
      });
     
    });
    knutrients3Ref.on('value', snap =>{
      this.setState({
        knutrients3:snap.val()
      });
    });
      kingr3Ref.on('value', snap =>{
        this.setState({
         kingr3:snap.val()
     });
    });
    
    kprep3Ref.on('value', snap =>{
       this.setState({
         kprep3:snap.val()
      });
    });

    
   
    
    const kname4Ref = rootRef.child('Keto/Breakfast/Recipe1/name');
    const knutrients4Ref = rootRef.child('Keto/Breakfast/Recipe1/nutrients');
    const kingr4Ref = rootRef.child('Keto/Breakfast/Recipe1/ingr');
    const kprep4Ref = rootRef.child('Keto/Breakfast/Recipe1/prep');

    
    kname4Ref.on('value', snap =>{
     this.setState({
       kname4:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients4Ref.on('value', snap =>{
      this.setState({
        knutrients4:snap.val()
      });
    });
      kingr4Ref.on('value', snap =>{
        this.setState({
         kingr4:snap.val()
     });
    });
    
    kprep4Ref.on('value', snap =>{
       this.setState({
         kprep4:snap.val()
      });
    });

    
    
    const kname5Ref = rootRef.child('Keto/Snacks/Recipe1/name');
    const knutrients5Ref = rootRef.child('Keto/Snacks/Recipe1/nutrients');
    const kingr5Ref = rootRef.child('Keto/Snacks/Recipe1/ingr');
    const kprep5Ref = rootRef.child('Keto/Snacks/Recipe1/prep');

    kname5Ref.on('value', snap =>{
     this.setState({
       kname5:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients5Ref.on('value', snap =>{
      this.setState({
        knutrients5:snap.val()
      });
    });
      kingr5Ref.on('value', snap =>{
        this.setState({
         kingr5:snap.val()
     });
    });
    
    kprep5Ref.on('value', snap =>{
       this.setState({
         kprep5:snap.val()
      });
    });
  }

/*
*/















  render() {

    const { classes, theme } = this.props;

    return (

      <Fragment>

      <ABar />
      <div flex="1" >
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            backgroundColor="secondary"
            fullWidth
            centered
          >
            <Tab label="Vegetarian" />
            <Tab label="Non-Vegetarian" />
            <Tab label="Keto Diet" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          
        >
          
          
          
          
          
          
          
          
          
          
          
          
          
          <TabContainer centered dir={theme.direction}>
          
          <Paper>
          <div className="App">

          <Typography variant="headline" align="center" gutterBottom>{this.state.vdesc}</Typography>
          <Typography align="center" gutterBottom>
          <h3 > MEALS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.vname1}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.vnutrients1}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vingr1}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vprep1}</Typography>
          </div>


          <div className="App">
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>{this.state.vname2}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.vnutrients2}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vingr2}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vprep2}</Typography>
          </div>
          

          <div className="App">
          <Typography align="center" gutterBottom >
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>{this.state.vname3}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.vnutrients3}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vingr3}</Typography>
          
          <Typography variant="title" gutterBottom >{this.state.vprep3}</Typography>
          </div>
          
          
          
          
          <div>
          <Typography align="center" gutterBottom>
          -----
          <h3 > SNACKS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.vname4}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.vnutrients4}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vingr4}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vprep4}</Typography>
          </div>

          <div>
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.vname5}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.vnutrients5}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.vingr5}</Typography>
          
          
          <Typography variant="title" gutterBottom >{this.state.vprep5}</Typography>
          </div>

          </Paper>
          
          </TabContainer>


        







          
          <TabContainer centered dir={theme.direction}>
          
          <Paper>
          <div className="App">

          <Typography variant="headline" align="center" gutterBottom>{this.state.nvdesc}</Typography>
          <Typography align="center" gutterBottom>
          <h3 > MEALS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.nvname1}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.nvnutrients1}</Typography>
          
          
          <Typography variant="title" gutterBottom >{this.state.nvingr1}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvprep1}</Typography>
          </div>


          <div className="App">
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>{this.state.nvname2}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.nvnutrients2}</Typography>
          
          
          <Typography variant="title" gutterBottom >{this.state.nvingr2}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvprep2}</Typography>
          </div>
          

          <div className="App">
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>{this.state.nvname3}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.nvnutrients3}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvingr3}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvprep3}</Typography>
          </div>
          
          
          
          
          <div>
          <Typography align="center" gutterBottom>
          -----
          <h3 > SNACKS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.nvname4}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.nvnutrients4}</Typography>
          
         
          <Typography variant="title" gutterBottom >{this.state.nvingr4}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvprep4}</Typography>
          </div>

          <div>
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.nvname5}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.nvnutrients5}</Typography>
          
          
          <Typography variant="title" gutterBottom >{this.state.nvingr5}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.nvprep5}</Typography>
          </div>

          </Paper>
          
          </TabContainer>

          













          <TabContainer centered dir={theme.direction}>
          <Paper>
          <div className="App">

          <Typography variant="headline" align="center" gutterBottom>{this.state.kdesc}</Typography>
          <Typography align="center" gutterBottom>
          <h3 > MEALS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.kname1}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.knutrients1}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kingr1}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kprep1}</Typography>
          </div>


          <div className="App">
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>Cauliflower Tabouli (Tabbouleh) Salad</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.knutrients2}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kingr2}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kprep2}</Typography>
          </div>
          

          <div className="App">
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          <Typography align="center" variant="display2" gutterBottom>{this.state.kname3}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.knutrients3}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kingr3}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kprep3}</Typography>
          </div>
          <div>
          <Typography align="center" gutterBottom>
          -----
          <h3 > SNACKS  </h3>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.kname4}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.knutrients4}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kingr4}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kprep4}</Typography>
          </div>

          <div>
          <Typography align="center" gutterBottom>
          -----
          </Typography>
          
          <Typography align="center" variant="display2" gutterBottom>{this.state.kname5}</Typography>
          
          
          <Typography variant="display1" align="center" gutterBottom >{this.state.knutrients5}</Typography>
          
          <Typography variant="headline" gutterBottom> INGREDIENTS : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kingr5}</Typography>
          
          <Typography variant="headline" gutterBottom> PREPARATION : </Typography>
          <Typography variant="title" gutterBottom >{this.state.kprep5}</Typography>
          </div>
          </Paper>
          </TabContainer>
        </SwipeableViews>
      </div>
      <div>
      <Paper align="center" className={classes.paper} >
      <div>
        <Typography align="center" variant="title">
        Search Here To Know More About Your Diet Plan! 
        OR Choose from One Of The Videos Below!
        </Typography>
          <Searchbar onSearchTermChange={term =>this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
          </div>
        </Paper>
      </div>

    </Fragment>
      
     ) }
} 

Healthydietplan.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Healthydietplan);