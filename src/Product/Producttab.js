import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import './producttab.css';

export default function Producttab() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="container" style={{ padding: '20px' }}>
                <div className="row ">
                  <div className="col-md-12 bg-white" style={{ padding: '0px' }}>
                    <div className="row">
                    <div className="col-md-12 ">
                      <div>
                        <h3 className="text-left category-heading-home">Computer</h3>
                        <a href="#" className="btn btn-danger semorebtn">View All</a>
                      </div>
                    </div>


                    <div className="col-md-2">
                      <div className="sidebr-category-banner" style={{backgroundImage:'url(https://www.telemart.pk/uploads/banner_image/home_3.png)'}}>

                      </div>
                     </div>

                   

                     


                     <div className="col-md-10">
                    <Carousel responsive={responsive}>
          
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/vbS9cS4BHgoeaARhHibkNbrXSUGpzYa3PNSyIvOT.jpeg"/>
                    

                        
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/clN9D5oO2BIUFOnsUlidLskEvriAGSDtkiOvL5dZ.jpeg"/>
                        

                        
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/SE0eQih9HvAYUXiRbVbcl3ktC07U98Fc51OpvkFE.jpeg"/>
                        

                        
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/IS5KY5GN8l9VhTCUb64y5CrrJln7WLRmZDHorOLs.jpeg"/>
                        

                        
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/hoZvLYuUJ0zmfqLcaVXLvBNhviTEUNUqIbYssHik.jpeg"/>
                        

                        
                            <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/customer_products/thumbnail/goMlgniiBjsqhXSwtliZaQa5ufZEkPj34ChEk8PZ.jpeg"/>
                        
                    
                    </Carousel>
                    </div>
                    </div>
                  </div>
                    
                   
                    
                </div>
            
        </div>
    )
}





