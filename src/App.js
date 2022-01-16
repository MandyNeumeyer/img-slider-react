import Slider from './components/Slider'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';


import './App.css'

function App() {

  const images=[img1,img2,img3, img4, img5]

  return (
    <div className="App">
      <h1>Street Art</h1>
        <Slider source={images} />            
    </div>
  );
}

export default App;


