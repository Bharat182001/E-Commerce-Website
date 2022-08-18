import React from 'react';
import Product from '../Product/Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                   
                    <Product
                        id="55538094"
                        title="Amazon Brand - Solimo Delphi 3 Seater Leatherette Fabric Recliner (Brown)"
                        price={495.93}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71QB8+U+hXL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer, Dough Hook and Whisk"
                        price={239.0}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home_row">

                    <Product
                        id="4903850"
                        title="Samsung LC49RSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />

                </div>

                <div className="home_row">
                    
                    <Product
                        id="90899332"
                        title="The Souled Store Harry Potter: Gryffindor Sigil Cotton Knitted Sweater Multicolor"
                        price={22.57}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61RjwhGnf3L._UL1440_.jpg"
                    />
                    <Product
                        id="77879332"
                        title="Samsung Galaxy M52 5G Latest Snapdragon 778G 5G | sAMOLED Display"
                        price={403.27}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71b5BwTCcZL._SL1500_.jpg"
                    />
                    <Product
                        id="24578900"
                        title="OBAGE DT-2605 100W Home Theatre Tower Speaker System with Optical in, FM (Brown)"
                        price={111.57}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/713clW+Go2L._SL1500_.jpg"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
