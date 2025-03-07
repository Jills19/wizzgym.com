"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import { Pricing } from "../components/membershipDetais";
import { FooterSection } from "../components/footer";

const Pricingpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <meta
          name='description'
          content='Join Wizz Gym in Kampala, Uganda, with flexible membership plans designed to suit your fitness goals and lifestyle. Choose from a variety of plans offering access to top-tier equipment, group classes, personal training, and more.'
        />

        <meta
          name='keywords'
          content='Wizz Gym membership plans, gym memberships Kampala, fitness memberships Uganda, flexible gym plans, personal training membership, group fitness classes, Wizz Gym pricing, join Wizz Gym, fitness packages, Kampala gym'
        />

        <title>
          Membership Plans | Flexible Gym Packages at Wizz Gym Kampala, Uganda
        </title>
      </header>
      <Header />
      <div className='w-[100%] overflow-hidden'>
          <div className='bg-primary text-accent text-center font-body w-[100%] font-semibold  text-lg left-0'>
            Offer: up to 50% off
          </div>
        <Pricing />
        <div className='bg-[#1b1b1b] font-body text-accent md:px-3 md:flex md:items-center md:justify-center md:flex-col'>
          <p className='  p-3  text-accent  text-center  md:w-[50%]'>
            You might be taking the first step on your fitness journey or
            getting back into the groove, whatever your motivation, we’re here
            to help you kickstart your fitness journey.
          </p>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default Pricingpage;
