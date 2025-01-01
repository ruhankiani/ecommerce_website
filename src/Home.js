import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  useEffect(() => {
    let slideIndex = 0;
    let timeout;

    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      if (slides.length === 0) return; // Guard against missing slides

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      timeout = setTimeout(showSlides, 4000); // Change image every 4 seconds
    };

    showSlides();

    // Cleanup function
    return () => {
      clearTimeout(timeout); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        {/* Slideshow section */}
        <div className="slideshow-container">
          <div className="mySlides fade">
            <a href="">
              <img
                src={require("./Media/game1.jpg")}
                alt="Slide 1"
                style={{ width: "100%", height: "750px" }}
              />
            </a>
          </div>

          <div className="mySlides fade">
            <a href="">
              <img
                src={require("./Media/game2.jpeg")}
                alt="Slide 2"
                style={{ width: "100%", height: "750px" }}
              />
            </a>
          </div>

          <div className="mySlides fade">
            <a href="">
              <img
                src={require("./Media/game3.jpeg")}
                alt="Slide 3"
                style={{ width: "100%", height: "750px" }}
              />
            </a>
          </div>
        </div>

        {/* Product section */}
        <div className="home_row">
          <Product
            title="PS5"
            id="0001"
            price="500.00"
            rating={5}
            image="https://gamingbolt.com/wp-content/uploads/2021/08/ps5.jpg"
          />
          <Product
            title="MW2"
            id="0002"
            price="89.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHqICieQAtU9GurhdT2Z4aeH7szzLCJfmnjJNZ62MWzHpyNy3_RmPXsOOyYPxYCAMQhg&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="MW2"
            id="0003"
            price="89.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHqICieQAtU9GurhdT2Z4aeH7szzLCJfmnjJNZ62MWzHpyNy3_RmPXsOOyYPxYCAMQhg&usqp=CAU"
            rating={5}
          />
          <Product
            title="NBA 2K22"
            id="0004"
            price="79.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTXgZQV-fXOP-KNXELMyWBHQRAT8n90R3Mw&usqp=CAU"
            rating={5}
          />
          <Product
            title="MW2"
            id="0005"
            price="89.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHqICieQAtU9GurhdT2Z4aeH7szzLCJfmnjJNZ62MWzHpyNy3_RmPXsOOyYPxYCAMQhg&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="PS5"
            id="0006"
            price="500.00"
            rating={5}
            image="https://gamingbolt.com/wp-content/uploads/2021/08/ps5.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
