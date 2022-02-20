import './Slide.css'

const Slide = ({ image, visible }) => {
  return (
    <div className={`Slide ${visible ? 'visible' : 'hidden'}`}>
      <img src={image} alt="street-art" />
    </div>
  )
}

export default Slide