import React, { useState } from 'react'
import Slider from './components/Slider'
import Autoplay from './components/Autoplay'

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpg';

import './App.css'

function App() {

  const images = [img1, img2, img3, img4, img5]
  const [current, setCurrent] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <h1>Street Art</h1>
        <Autoplay source={images} current={current} setCurrent={setCurrent} />
      </div>
      <Slider source={images} current={current} setCurrent={setCurrent} />
    </div>
  );
}

export default App;


