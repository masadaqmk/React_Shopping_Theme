import React from 'react';
import Carousel from 'nuka-carousel';

export default class  Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="https://demo.activeitzone.com/ecommerce/public/uploads/sliders/sUVGUNP41IIpceh9s00QjuS3SGoCBiUBrWewuXuj.png" />
        <img src="https://demo.activeitzone.com/ecommerce/public/uploads/sliders/09xyACoAGcEzim7JFGFUhD6oBxKtXQJa5ZeiTVhl.png" />
        <img src="https://demo.activeitzone.com/ecommerce/public/uploads/sliders/0FGXuBhrGNDamIIh2f3QqLb4DmhJByZT5JNQISOA.png" />
      </Carousel>
    );
  }
}