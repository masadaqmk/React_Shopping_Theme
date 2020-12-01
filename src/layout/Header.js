import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../Home/Banner';
import Mainmenu from '../Home/Mainmenu';
import Slider from '../Home/Slider';
import Productlist from '../Product/Productlist';
import './header.css';
import Nav from './Navbar'
import { usePopper } from 'react-popper'

class Header extends Component{
        render(){
            return(
                <>
                <div className="bg-white shadow-sm" >
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6">
                               
                            </div>
                            <div className="col-md-6 text-right">
                                    <div>
                                        <ul className="top-header-link">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Registration</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Dropdown button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Nav/>
                </>
            )
        }
}

export default Header;
