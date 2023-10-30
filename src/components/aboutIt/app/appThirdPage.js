import MainThemeThridPage from "../main-theme/mainThemeThridPage";
import Navigation from "../../coffeHouse/navigation/navigation";

import './appThirdPage.scss'

function AppThirdPage(props) {
    const {data} = props;
    return (
      <>
      <div className="ThirdPage">
        <MainThemeThridPage data={data}/>
        <footer className="ThirdPage__footer">
          <Navigation color='black'/>
        </footer>
      </div> 
      </>
    );
  }
  
  export default AppThirdPage;