import React from 'react';
import './Home.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useAuth from '../Context/useAuth';
import ApartmentCard from '../Products/ApartmentCard';
import { Grid } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useHistory } from 'react-router';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      imgPath:'https://www.bdhousing.com/api/banner/listings/image/230919/6b1d39570889ddd6af6bd7001e2e7f0b.jpg'
    },
    {
      imgPath: 'https://www.bdhousing.com/api/banner/listings/image/238381/9dd875e104aa818777cc164acf19f98c.jpg'
    },
    {
      imgPath:'https://www.bdhousing.com/api/banner/listings/image/239742/b6fd05107c108227bebdec4092234a7d.jpg'
    }
  ];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const {apartments, reviews} = useAuth();
  const maxSteps = images.length;
  const history = useHistory();
  
  const exploreProducts = () =>{
    history.push('/products');
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  if(apartments.length >=6)
  {
    apartments.length = 6;
  }

    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <Box sx={{ maxWidth: '100%', position: 'absolute', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          // pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100%',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
     <Button onClick={exploreProducts} style={{marginTop: '220px', border: '1px solid black', backgroundColor: 'blue', color: 'white'}}>Explore More Products</Button>
     <div style={{marginTop: '200px'}}>
     <Box sx={{ flexGrow: 1, ml:4 }}>
     <h1>Our Apartments</h1>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {
          apartments.map(apartment => <ApartmentCard
          key={apartment._id}
          apartment={apartment}
          ></ApartmentCard>)
        }
       </Grid>
       </Box>
     </div>
     <div>
     <Box sx={{ flexGrow: 1, ml:4 }}>
     <h1>Many People's Feedback and Reviews</h1>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
           reviews.map(review => <ReviewCard
           key={review._id}
           review={review}
           ></ReviewCard>)
         }
       </Grid>
       </Box>
     </div>
     <div>
       <h1>Get Local Information</h1>
      <div style={{display: 'flex'}}>
      <div style={{marginTop: '90px'}}>
         <h1>Get local Info</h1>
         <p style={{margin: '0px 30px'}}>Does it have pet-friendly rentals? What are the crime rates? 
           How are the schools? Get important local information on the
            area you're most interested in.</p>
            <input placeholder="Address, City, Zip or Neighborhood" style={{borderRadius: '5px', border: '1px solid black', width: '350px', padding: '10px'}} type="text" />
            <Button style={{right: '5px',color: 'white', backgroundColor: 'red', border: '1px solid black'}}>Search</Button>
         </div>
         <div>
           <img style={{width: '100%'}} src="https://static.rdc.moveaws.com/images/hero/hp-local-desktop.jpg" alt="" />
         </div>
      </div>
     </div>
     <div>
       <Footer></Footer>
     </div>
    
      </div>
    );
}

export default Home;