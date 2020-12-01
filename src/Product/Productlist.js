import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

function Productlist() {
    return (
        <div>
            <div className="row">

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/vbS9cS4BHgoeaARhHibkNbrXSUGpzYa3PNSyIvOT.jpeg"/>
                </div>

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/clN9D5oO2BIUFOnsUlidLskEvriAGSDtkiOvL5dZ.jpeg"/>
                </div>

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/SE0eQih9HvAYUXiRbVbcl3ktC07U98Fc51OpvkFE.jpeg"/>
                </div>

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/IS5KY5GN8l9VhTCUb64y5CrrJln7WLRmZDHorOLs.jpeg"/>
                </div>

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/products/thumbnail/hoZvLYuUJ0zmfqLcaVXLvBNhviTEUNUqIbYssHik.jpeg"/>
                </div>

                <div className="col-md-2 p-1">
                    <Product image="https://demo.activeitzone.com/ecommerce/public/uploads/customer_products/thumbnail/goMlgniiBjsqhXSwtliZaQa5ufZEkPj34ChEk8PZ.jpeg"/>
                </div>

            </div>
        </div>
    )
}

export default Productlist;
