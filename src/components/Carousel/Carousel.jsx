import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './backgrounds/background1.jpeg'
import pic2 from './backgrounds/background2.jpg'
import pic3 from './backgrounds/background3.jpeg'
import pic4 from './backgrounds/background4.JPG'
import './Carousel.css'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 pic"
              src={pic1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 pic"
              src={pic4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 pic size"
              src={pic2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 pic size"
              src={pic3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default ControlledCarousel