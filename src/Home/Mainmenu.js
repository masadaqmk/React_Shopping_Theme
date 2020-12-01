import React from 'react'

import './mainmenu.css';

export default function Mainmenu() {



    return (
        <div className="card card_list">
            <div>
                <div>

                </div>
                <div>
                    {/* <ul class="list-group">
                        <li class="list-group-item">First item
                            <div className="list_data">
                                <h1>List</h1>
                            </div>
                        </li>
                        <li class="list-group-item">Second item</li>
                        <li class="list-group-item">Third item</li>
                    </ul> */}
                    
                    <ul className="menu" id="menuDIV">
                    
                    <li className="sub-menu-category">
                        <h2>Categories</h2>
                    </li>
                        <li><a href="#">
                            <img src="https://www.telemart.pk/uploads/header_menu/meimgicon1558525293.png" className="menu-icon" />
                            Women Clothing & Fashion</a>
                            <div className="megadrop">
                                <div className="row sub-menu-row">
                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>



                        
                        <li><a href="#">
                        <img src="https://www.telemart.pk/uploads/header_menu/meimgicon1558522467.png" className="menu-icon" />
                        Men Clothing & Fashion</a>
                            <div className="megadrop">
                                <div className="row sub-menu-row">
                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4 sub-col">
                                        <h3 className="sub-menu-title">Title</h3>
                                        <ul className="sub-menu-list">
                                            <li><a href="#">Sub-menu 1</a></li>
                                            <li><a href="#">Sub-menu 2</a></li>
                                            <li><a href="#">Sub-menu 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>


                        

                    </ul>
                </div>
            </div>
        </div>
    )
}
