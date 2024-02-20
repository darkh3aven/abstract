import React from 'react';
import Slider from 'react-slick';

export const Product = ({name, variants}) => {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: false,
  };

  return (
    <div className='product'>
      <img src='https://placehold.co/600x600' 
          srcset='https://placehold.co/600x600 1x, https://placehold.co/1200x1200 2x' 
          loading="lazy" 
          alt={name}
          className='product__image' />

      <h3 className='product__title'>
        {name}
      </h3>

      {variants.length > 0 &&
        <Slider className='product__slider' {...sliderSettings}>
          {variants.map((variant, index) => {
            return (
              <div className='product__variant' key={variant.name}>
                <figure className='product__variant__figure'>
                  <img src='https://placehold.co/200x100' 
                    srcset='https://placehold.co/200x100 1x, https://placehold.co/400x200 2x' 
                    loading="lazy" 
                    alt={variant.name}
                    className='product__variant__image' />

                    <figcaption className='product__variant__caption'>
                    {index + 1}
                    </figcaption>
                </figure>
              </div>
            )
          })}
        </Slider>
      }
    </div>
  );
};

export default Product;