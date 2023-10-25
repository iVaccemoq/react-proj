
import MainthemeTwoPage from "../main-theme/mainThemeTwoPage";
import AboutUsTwoPage from "../aboutUsTwoPage/aboutUsTwoPage";
import CoffeeCards from "../coffeCards/coffeeCards";
import Footer from "../../coffeHouse/footer/footer";


function AppTwoPage() {
  return (
    <>
    <div className="twoPage">
      <MainthemeTwoPage/>
      <AboutUsTwoPage/>
      <CoffeeCards/>
      <Footer/>
    </div> 
    
    </>  
  );
}

export default AppTwoPage;