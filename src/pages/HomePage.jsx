import FirstSection from "../features/first-section/FirstSection";
import Header from "../components/Header";
import SecondSection from "../features/second-section/SecondSection";
import ThirdSection from "../features/third-section/ThirdSection";
import ForthSection from "../features/forth-section/ForthSection";
import Footer from "../features/footer/Footer";

function HomePage() {
  return (
    <>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
      <Footer/>
    </>
  );
}

export default HomePage;
