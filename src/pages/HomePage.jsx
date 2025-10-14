import HomePageImageSection from "../sections/HomePageImageSection";
import AboutToursSection from "../sections/AboutToursSection";
import ScrollToTopButton from "../components/ScrollToTop";

const HomePage = () => {
  return (
    <div>
      <HomePageImageSection />
      <AboutToursSection />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
