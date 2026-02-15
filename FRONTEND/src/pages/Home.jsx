import Hero from '../components/Hero';
import DestinationPreview from '../components/DestinationPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import LanguageClasses from '../components/LanguageClasses';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <WhyChooseUs />
            <DestinationPreview />
            <Stats />
            <LanguageClasses />
            <Team />
            <Testimonials />
            <FAQ />
            <ContactSection />
        </div>
    );
};

export default Home;
