import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
      <Carousel style={{marginBottom: '-150px'}}>
      <Carousel.Item>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
        {/* <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <div className="home-row">
          <Product
            id="12321341"
            title="Kids Children STEM Toys"
            price={24.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61kZY+xAF5L._AC_SY300_SX300_.jpg"
          />
          <Product
            id="49538094"
            title="Hot Toys Star Wars Action Figure"
            price={317}
            rating={4}
            image="https://m.media-amazon.com/images/I/41uEYwuLA7L._AC_.jpg"
          />
          <Product
            id="78538094"
            title="Fire Rescue Team Garage Toy Set with Helicopter and Fire Car Set"
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81qb23rwo8L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49789094"
            title="plplaaoo Siberian Husky Stuffed Animal"
            price={12.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/716-Ie65-sL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="Home Training and Gym Fitness Kettlebells"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61GqFfJdFVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="4803864"
            title="Signature Fitness Multifunctional Home Gym System Workout Station"
            price={5299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Lu98MlisL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="LightingWill LED Strip Lights CRI90 SMD5050 16.4Ft(5M) 150LEDs"
            price={32}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+UrKp1kjL._AC_SX342_SY445_.jpg"
          />
          <Product
            id="3254354345"
            title="Garmin Vivoactive 4S GPS Smartwatch with Music & Fitness Activity Tracker & Health Monitor Apps"
            price={32}
            rating={4}
            image="https://m.media-amazon.com/images/I/51f-Cfkk1hL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4907560"
            title="MAZAGE Women's Casual Long and Short Sleeve Pullover Shirt Crewneck Artistic Suit"
            price={23.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51aJcY3ZB4L._AC_UX522_.jpg"
          />
          <Product
            id="4783864"
            title="Flygo Womens Fleece 2 Piece Outfits Casual Half Zip Pullover Sweatshirt"
            price={49.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51a+N2MZPUL._AC_UY500_.jpg"
          />
          <Product
            id="25945930"
            title="TWGONE Christmas Dress for Women "
            price={23.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/71imWkREGLL._AC_UX522_.jpg"
          />
          <Product
            id="3254354345"
            title="FP Movement Women's Adella Slip Dress"
            price={50}
            rating={5}
            image="https://m.media-amazon.com/images/I/918b5nUQIiL._AC_UY500_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
