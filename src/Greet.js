import React from 'react';
import image from './image.jpeg';
import imag from './imagess.jpeg';
import down from './downloads.jpeg';
import image1 from './counstes.jpeg';
import image2 from './casino.jpeg';
import image3 from './customstickers.webp';
import image4 from './coffee2.jpeg';
import image5 from './coffee4.jpeg';
import image6 from './coffee6.jpeg';
import Pages from './Pages';
import './Greet.css';
function Greet() {
  return (
    <div>
      <p className="headed">TEST THE BEST</p>
      <h1>
        Discover a drink<br></br> that's made for you
      </h1>
      <button className="Read-more">READ MORE</button>
      <div className="img"></div>
      <h1 className="coffee">Coffee</h1>
      <img src={image} alt="" className="coffee-cup" />
      <img src={imag} alt="" className="coffee-only" />
      <p className="about-us" id="about">
        ABOUT US<hr className="line"></hr>
      </p>
      <p className="tex">
        There are many variations of<br></br>passages of Lorem Ipsum<br></br>
        available,but the majority<br></br>Have suffered.
      </p>
      <p className="title">
        There are many variations of passages of <br></br>
        Lorem Ipsum available, but the majority have<br></br>
        suffered. alteration in some from, by injected<br></br>
        humour, or randomised words which don't<br></br>
        look even slightly believable.
      </p>
      <p className="title">
        If you are going to use a passage of Lorem<br></br>
        Ipsum, you need to be sure there anything<br></br>
        embarrassing hidden in the middle of text.<br></br>
        the Lorem Ipsum generators on the<br></br>
        Internet tend to repeat predefined chunks
      </p>
      <img src={down} alt="" className="coffee-on" />
      <p className="name">Mike Grambon</p>
      <p className="founder">Founder and CEO</p>
      <div className="our-coffee">
        <p className="head">
          OUR COFFEE <hr className="line1"></hr>
        </p>
        <p>
          There are many variations of passages of<br></br>
          Lorem Ipsum available, but the majority<br></br>
          have suffered.alteration in some form, by<br></br>
          injected humour, or randomised words.
        </p>
        <div className="our-coffee-two">
          <img src={image1} alt="" className="coffee-1" />
          <p className="casino">Casino Mocca EI</p>
          <p className="casino-1">Salvador</p>
          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <button className="more">READ MORE</button>
        </div>
        <div className="our-coffee-two">
          <img src={image2} alt="" className="coffee-2" />
          <p className="casino">Casino Mocca EI</p>
          <p className="casino-1">Salvador</p>
          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <button className="more">READ MORE</button>
        </div>
        <div className="our-coffee-two">
          <img src={image3} alt="" className="coffee-3" />
          <p className="casino">Casino Mocca EI</p>
          <p className="casino-1">Salvador</p>
          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <button className="more">READ MORE</button>
        </div>
      </div>
      <div className="our-coffee-one">
        <p className="head">
          PRICING SERVICE<hr className="line1"></hr>
        </p>
        <p>
          There are many variations of passages of<br></br>
          Lorem Ipsum available, but the majority<br></br>
          have suffered.alteration in some form, by<br></br>
          injected humour, or randomised words.
        </p>
        <br></br>
        <div className="our-coffee-three2">
          <img src={image4} alt="" className="coffee-1" />
          <p className="casino">Casino Mocca EI</p>
          <p className="casino-1">Salvador</p>
          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <hr></hr>
          <p className="m20">100 ml</p>
          <p className="m100">250 ml</p>
          <p className="m400">400 ml</p>
          <p className="ml20">$18</p>
          <p className="ml100">$25</p>
          <p className="ml400">$40</p>
        </div>
        <div className="our-coffee-three3">
          <img src={image5} alt="" className="coffee-2" />
          <p className="casino">ESPRESSO</p>

          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <hr></hr>
          <p className="m20">100 ml</p>
          <p className="m100">250 ml</p>
          <p className="m400">400 ml</p>
          <p className="ml20">$18</p>
          <p className="ml100">$25</p>
          <p className="ml400">$40</p>
        </div>
        <div className="our-coffee-three1">
          <img src={image6} alt="" className="coffee-3" />
          <p className="casino">Casino Mocca EI</p>
          <p className="casino-1">Salvador</p>
          <p>
            There are many variations of <br></br>
            passages of Lorem Ipsum available
          </p>
          <hr></hr>
          <p className="m20">100 ml</p>
          <p className="m100">250 ml</p>
          <p className="m400">400 ml</p>
          <p className="me20">$18</p>
          <p className="me100">$25</p>
          <p className="me400">$40</p>
        </div>
        <br></br>
        <Pages />
      </div>
    </div>
  );
}
export default Greet;
