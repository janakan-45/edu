import React from 'react';
import WhyUs from './WhyUs';
import Process from './Process';

const About = () => {
    return (
        <>
            <div className="section-padding">
                <WhyUs />
            </div>
            <div className="section-padding">
                <Process />
            </div>
        </>
    );
};

export default About;
