import './Slider.css'
import Slide from './Slide'


const Slider = ({ source, current, setCurrent }) => {


    const switchImgLeft = () => {
        if (current === 0) {
            setCurrent(source.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }
    console.log(current);

    const switchImgRight = () => {

        if (current === source.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)

        }
    }

    const circleHandler = (num) => {
        setCurrent(num)
    }


    return (
        <div className="slider">
            <div className="slider-box">
                <div className="navigation-left" onClick={switchImgLeft}>
                    &#x2039;
                </div>
                {
                    source.map((image, i) => {
                        return (
                            <Slide key={i} image={image} visible={i === current} />
                        )
                    })
                }
                <div className="navigation-right" onClick={switchImgRight}>
                    &#x203A;
                </div>
            </div>
            <div className="button-navigation">
                {source.map((img, i) => {
                    return (<button className={current === i ? "active" : ""} key={i} onClick={() => circleHandler(i)}></button>)
                })}
            </div>
        </div>
    )
}

export default Slider

