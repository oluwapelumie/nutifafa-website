import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import CtaBanner1 from '@/app/Components/CtaBanner/CtaBanner1';
import CtaBanner3 from '@/app/Components/CtaBanner/CtaBanner3';
import Gallery1 from '@/app/Components/Gallery/Gallery1';
import Offer3 from '@/app/Components/Offer/Offer3';
import Team3 from '@/app/Components/Team/Team3';
import Testimonial3 from '@/app/Components/Testimonial/Testimonial3';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>  
            <Offer3></Offer3>    
            <About4></About4>
              {/* <CtaBanner1></CtaBanner1>
              <Team3></Team3>
              <CtaBanner3></CtaBanner3> */}
            <Testimonial3></Testimonial3>
            <Gallery1></Gallery1>            
    </div>
  );
};

export default page;