import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import CountUp from './Components/CountUp/CountUp';
import Experiences from './Components/Experiences/Experiences';
import WorkFlow from './Components/WorkFlow/WorkFlow';
import Projects from './Components/Projects/Projects';
import TestiMonial from './Components/TestiMonial/TestiMonial';
import ContactUs from './Components/ContactUs/ContactUs';
import Blog from './Components/Blog/Blog';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id='home'>
        <Hero/>
      </section>
      <section id='about'>
        <AboutUs/>
      </section>
      <section id='services'>
        <Services/>
      </section>
      <section id='countup'>
        <CountUp/>
      </section>
      <section id='experience'>
        <Experiences/>
      </section>
      <section id='workflow'>
        <WorkFlow/>
      </section>
      <section id='project'>
        <Projects/>
      </section>
      <section id='testiMonial'>
        <TestiMonial/>
      </section>
      <section id='contact'>
        <ContactUs/>
      </section>
      <section id='blog'>
        <Blog/>
      </section>
      <section id='faq'>
        <Faq/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </div>
  );
};

export default App;
