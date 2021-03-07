import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle/>
            <ImageSection />
            <Tittle/>
            <div className="skillsContainer">
                <SkillsSection/>
                <SkillsSection/>
            </div>

            <Tittle />
            <div>
                <ServicesSection/>      
            </div>

        </div>
    )
}

export default AboutPage;
