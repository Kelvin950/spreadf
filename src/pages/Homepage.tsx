import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import WhyCreatorsLoveIt from '../components/WhyCreatorsLoveIt';
import FeatureBar from '../components/FeatureBar';
import FAQSection from '../components/FAQSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HeroSlider />
      <HowItWorks />
      <WhyCreatorsLoveIt />
      <FeatureBar />
      <FAQSection/>
      <CallToAction />
    
      <Footer />
    </div>
  );
};

export default Homepage; 