import React from 'react';
import { Typography } from '@mui/material';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Services from '../Services/Services.js';
import OurWorks from './OurWorks/OurWorks';
import Faq from './Faq/Faq';

const Home = () => {
   return (
      <div>
         <Branding />
         <Brands />
         <Services />
         <OurWorks />
         <Faq />
      </div>
   );
};

export default Home;
