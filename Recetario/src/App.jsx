import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import { Navbar } from './Components/Navbar'; 
import { Comidas } from './Components/Pages/Comidas';
import { Chefs } from './Components/Pages/Chefs';
import { Bebidas } from './Components/Pages/Bebidas';
import { Postres } from './Components/Pages/Postres';
import { Home } from './Components/Pages/Home';
import Card from './Components/Card';



function App() {
  const cardData = [
    {
      imgSrc: "https://picsum.photos/300/200?random=1",
      title: "Comida 1",
      description: "Descripción de la receta 1",
      buttonText: "Ver receta 1",
      link: "/comidas/1"
    },
    {
      imgSrc: "https://picsum.photos/300/200?random=2",
      title: "Comida 2",
      description: "Descripción de la receta 2",
      buttonText: "Ver receta 2",
      link: "/comidas/2"
    },
    {
      imgSrc: "https://picsum.photos/300/200?random=3",
      title: "Comida 3",
      description: "Descripción de la receta 3",
      buttonText: "Ver receta 3",
      link: "/comidas/3"
    },
    // Add more card data as needed
  ];
  return (
    <div className='App'> 
    <Navbar />
    <div className='card-container-2'>
    {cardData.map((card, index) => (
      <Card 
        key={index}
        imgSrc={card.imgSrc}
        title={card.title}
        description={card.description}
        buttonText={card.buttonText}
        link={card.link}
        className='card-item'
      />
    ))}
    </div> 
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/comidas" element= {<Comidas/>}/>
      <Route path="/bebidas" element= {<Bebidas/>}/>
      <Route path="/postres" element= {<Postres/>}/>
      <Route path="/chefs" element= {<Chefs/>}/>s
    </Routes>
  </div>
  ); 
}

export default App
 