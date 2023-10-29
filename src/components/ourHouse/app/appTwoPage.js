
import MainthemeTwoPage from "../main-theme/mainThemeTwoPage";
import AboutUsTwoPage from "../aboutUsTwoPage/aboutUsTwoPage";
import CoffeeCards from "../coffeCards/coffeeCards";
import Footer from "../../coffeHouse/footer/footer";
import AppThirdPage from "../../aboutIt/app/appThirdPage";


import { Component } from "react";

class AppTwoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataTwoPage: [
        {img: "../icons/arabica.jpg", from: 'Brazil', price: '6.99$', title:'Brazil Coffee 1 kg', link:'/promo1', id:1, descr:'составляет львиную долю всего производимого в мире кофе — 70 %, несмотря на то, что этот вид сложен в выращивании, и, следовательно, дороже, чем другие виды. Он завоевал такую популярность благодаря нежному и тонкому вкусу. Вид арабика имеет немало разновидностей, названия которых хорошо знакомы ценителям. Наиболее известные разновидности арабики: бурбон, мокко, типика, абиссиника, марагоджал.'},
        {img: "../icons/extra.jpg", from: 'Kenya', price: '3.95$', title:'Kenya Coffee 1 kg', link:'/promo2', id:2, descr:'более крепкий и менее элегантный. Несмотря на простоту выращивания и более высокую урожайность, этот кофе относится к более низкому классу, чем арабика. Робуста, как правило, добавляют в кофейные смеси для придания им крепости. Разновидности робусты: конильон (Бразилия), куилу (Конго), ява-инеак (Индонезия), конженсис.'},
        {img: "../icons/gvatemala.jpg", from: 'Columbia', price: '17.99$', title:'Columbia Coffee 1 kg', link:'/promo3', id:3, descr:'не пользуется популярностью. Кофейное дерево либерика устойчиво к болезням, но, в отличие от робусты, низкоурожайно, а вкус зерен оставляет желать лучшего, поэтому либерику используют только в смесях.'},
        {img: "../icons/kosta-rika.jpg", from: 'China', price: '15$', title:'China Coffee 1 kg', link:'/promo4', id:4, descr:' наилучший сорт, для обработки которого применяются новейшие технологии, крупные и ровные зёрна. Обладает довольно богатым вкусом, бархатистым ароматом. Но в продаже, к сожалению, найти его очень нелегко.'},
        {img: "../icons/picture3.png", from: 'Italy', price: '12.99$', title:'Italy Coffee 1 kg', link:'/promo5', id:5, descr:'немного уступает в отношении качества, но, тем не менее, тоже имеет высокий класс. Размеры кофейных зёрен немного меньше, чем у сьюпремо, а этот показатель является одним из определяющих при сортировке кофейных зёрен. Вкус кофе очень сильный, наполненный.'},
        {img: "../icons/yamaika.jpg", from: 'Russia', price: '39.99$', title:'Russia Coffee 1 kg', link:'/promo6', id:6, descr:'это смесь сьюпремо и экстра, что придает кофе этого класса достаточно сильную кислинку и винное послевкусие.'},
      ],
      currentValue: '',
    }
  }

  fdsfs = () => {
    const reg = new RegExp(this.state.currentValue);
    let arr = [];
    this.state.dataTwoPage.forEach((item,i) => {
      if (item.title.match(reg)) {
        arr[i] = item;
      }
    })
    return arr;
  }


  onSearch = (e) => {
    this.setState(({dataTwoPage,currentValue}) => {
      return {
        currentValue: [e.target.value]
      }
    })

  }

  render() {
    return (
      <>
      <div className="twoPage">
        <MainthemeTwoPage/>
        <AboutUsTwoPage/>
        <CoffeeCards data = {this.fdsfs()} onSearch={this.onSearch}/>
        <Footer/>
      </div> 
      
      </>  
    );
  }
}

export default AppTwoPage;