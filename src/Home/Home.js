import React from 'react'
import Productlist from '../Product/Productlist';
import Producttab from '../Product/Producttab';
import Banner from './Banner';
import Mainmenu from './Mainmenu'
import Slider from './Slider';

function Home() {
    return (
        <div>
             <div className="container p-3">
                    <div className="row">
                        <div className="col-md-3">
                            <Mainmenu/>
                        </div>
                        <div className="col-md-9">
                            <Slider/> 
                        </div>
                    </div>
            </div>

            <Banner/>

            <div className="container p-3">
                <Productlist/>
            </div>

            <Banner/>

            <div className="container p-3">
                <Productlist/>
            </div>

            <Producttab/>

            <Producttab/>
            <Banner/>
        </div>
    )
}


export default Home;
