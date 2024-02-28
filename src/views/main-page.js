import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import './main-page.css'

const MainPage = (props) => {
  return (
    <div className="main-page-container">
      <Helmet>
        <title>Rose & Blush Beauty</title>
        <meta property="og:title" content="Rose &amp; Blush Beauty" />
      </Helmet>
      <div className="main-page-header">
        <header
          data-thq="thq-navbar"
          className="main-page-navbar-interactive navbarContainer"
        >
          <Link to="/" className="main-page-logo logo">
            rose &amp; blush beauty
          </Link>
          <div className="main-page-container01">
            <div data-thq="thq-navbar-nav" className="main-page-desktop-menu">
              <nav className="main-page-links">
                <a href="#Top" id="Home" className="main-page-nav12 bodySmall">
                  Home
                </a>
                <a href="#AboutMe" className="main-page-nav52">
                  About Me
                </a>
                <a href="#Pricing" className="main-page-nav22">
                  <span className="bodySmall">Services &amp; Pricing</span>
                  <br></br>
                </a>
                <a href="#Portfolio" className="main-page-nav32 bodySmall">
                  Portfolio
                </a>
                <a href="#Portfolio" className="main-page-nav321">
                  <span>Contact Me</span>
                  <br></br>
                </a>
              </nav>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="main-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="main-page-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="main-page-mobile-menu1 mobileMenu"
          >
            <div className="main-page-nav">
              <div className="main-page-top">
                <span className="logo">GLAMOUR</span>
                <div data-thq="thq-close-menu" className="main-page-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="main-page-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="main-page-links1">
                <span className="main-page-nav121 bodySmall">Home</span>
                <span className="main-page-nav221 bodySmall">Services</span>
                <span className="main-page-nav322 bodySmall">Portfolio</span>
                <span className="main-page-nav42 bodySmall">Book Now</span>
                <span className="main-page-nav521 bodySmall">Contact</span>
              </nav>
              <div className="main-page-buttons">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="main-page-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="main-page-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="main-page-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div id="Services" className="main-page-features"></div>
      <div id="Top" className="bannerContainer main-page-home">
        <h1 className="main-page-banner-heading heading2">
          Welcome to Rose and Blush Beauty
        </h1>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-pause-autoplay-on-mouse-enter="true"
          data-disable-autoplay-on-interaction="true"
          className="main-page-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="main-page-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="main-page-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="main-page-slider-slide2 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="main-page-slider-slide3 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="main-page-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <div className="main-page-features1">
        <div className="featuresContainer">
          <div id="AboutMe" className="main-page-features2">
            <span className="main-page-text04">
              <span className="main-page-text05">About</span>
              <br className="bodySmall"></br>
            </span>
            <span id="aboutme" className="main-page-text07">
              The Artist Behind the Brush
            </span>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="main-page-image"
            />
            <span className="main-page-text08 bodyLarge">
              greetings! I&apos;m an enthusiastic makeup artist who is truly
              passionate about the transformative power of cosmetics. My journey
              in the beauty industry has been a colorful canvas of creativity
              and skill refinement. With a commitment to enhancing natural
              beauty and bringing out the unique features of each face,
              I&apos;ve honed my craft to make every client feel confident and
              radiant. From subtle everyday looks to bold and glamorous
              transformations, I find joy in creating artistry that resonates
              with individual styles. Beyond makeup brushes and palettes, I
              believe in building genuine connections with my clients,
              understanding their preferences, and ensuring a personalized
              experience. Let&apos;s embark on a beauty journey together, where
              every face becomes a canvas for self-expression and confidence.
            </span>
          </div>
        </div>
      </div>
      <div id="Pricing" className="main-page-pricing pricingContainer">
        <h2 className="heading2">Choose Your Service</h2>
        <div className="main-page-container02">
          <div className="freePricingCard main-page-pricing-card">
            <div className="main-page-container03">
              <span className="main-page-text09">Consultation</span>
              <span>
                Still testing the waters? A consultation is perfect for you!
                Virtual meetings are available to you, as well as in person
                consultations.
              </span>
            </div>
            <div className="main-page-container04">
              <div className="main-page-container05">
                <span className="main-page-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="main-page-free-plan-price">0</span>
              </div>
              <span className="main-page-text13">/ first 30 mi. </span>
            </div>
            <div className="main-page-container06">
              <div className="main-page-container07">
                <span className="main-page-text14">✔</span>
                <span>Virtual Meeting</span>
              </div>
              <div className="main-page-container08">
                <span className="main-page-text15">✔</span>
                <div className="main-page-container09">
                  <span className="main-page-text16">Visual References </span>
                </div>
              </div>
              <div className="main-page-container10">
                <span className="main-page-text17">✔</span>
                <span className="bodySmall">Discussion of availability</span>
              </div>
              <div className="main-page-container11">
                <span className="main-page-text18">✔</span>
                <span className="bodySmall">
                  Discussion of wants and needs for event
                </span>
              </div>
            </div>
            <button className="main-page-button buttonOutline">
              Book Consultation
            </button>
          </div>
          <div className="basicPricingCard main-page-pricing-card1">
            <div className="main-page-container12">
              <span className="main-page-text19">Wedding </span>
              <span>
                You&apos;ve chosen my services for your special day! Book now to
                secure your time and date!
              </span>
            </div>
            <div className="main-page-container13">
              <span className="main-page-text20">Starting at $</span>
              <span className="main-page-basic-plan-pricing">75</span>
            </div>
            <div className="main-page-container14">
              <div className="main-page-container15">
                <span className="main-page-text21">✔</span>
                <span className="bodySmall">
                  Full Party Application Available
                </span>
              </div>
              <div className="main-page-container16">
                <span className="main-page-text22">✔</span>
                <span className="bodySmall">
                  Customized Makeup Look Tailored to Your Preferences
                </span>
              </div>
              <div className="main-page-container17">
                <span className="main-page-text23">✔</span>
                <span className="bodySmall">
                  Access to Premium Makeup Products During Session
                </span>
              </div>
              <div className="main-page-container18">
                <span className="main-page-text24">✔</span>
                <span className="main-page-text25">
                  Virtual Booking and Contract Available
                </span>
              </div>
            </div>
            <button className="main-page-button1 buttonFilledSecondary">
              Book Wedding Date
            </button>
          </div>
          <div className="proPricingCard main-page-pricing-card2">
            <div className="main-page-container19">
              <span className="main-page-pro-plan-description">
                Special Events/Other
              </span>
            </div>
            <span>
              I offer a variety of services for a variety of events! If there is
              an event coming up for you or you want a hands-on tutorial
              experience not listed, let&apos;s set up a consultation for a
              customized event!
            </span>
            <div className="main-page-container20">
              <span className="main-page-text26">Pricing Varies </span>
              <span className="main-page-text27"></span>
            </div>
            <div className="main-page-container21">
              <div className="main-page-container22">
                <span className="main-page-text28">✔</span>
                <span> Makeup Classes Available </span>
              </div>
              <div className="main-page-container23">
                <span className="main-page-text30">✔</span>
                <span>Photoshoot Makeup Available </span>
              </div>
              <div className="main-page-container24">
                <span className="main-page-text31">✔</span>
                <span className="bodySmall">
                  Birthday Event Makeup Available 
                </span>
              </div>
              <div className="main-page-container25">
                <span className="main-page-text32">✔</span>
                <span>Consultations available for events not listed</span>
              </div>
            </div>
            <button className="main-page-button2 buttonFilledSecondary">
              Book Special Event
            </button>
          </div>
        </div>
      </div>
      <div id="Portfolio" className="main-page-gallery">
        <h1 className="main-page-text33 heading1">Portfolio</h1>
        <span className="main-page-text34">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="main-page-container26">
          <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            imageSrc="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
      <div className="main-page-footer">
        <footer className="main-page-footer1 footerContainer">
          <div className="main-page-container27">
            <span className="logo">rose &amp; blush beauty</span>
            <nav className="main-page-nav1">
              <a href="#Top" className="main-page-nav122 bodySmall">
                Home
              </a>
              <a href="#AboutMe" className="main-page-nav522 bodySmall">
                About
              </a>
              <a href="#Pricing" className="main-page-nav222 bodySmall">
                Services &amp; Pricing
              </a>
              <span className="main-page-nav323 bodySmall">Portfolio</span>
            </nav>
          </div>
          <div className="main-page-separator"></div>
          <div className="main-page-container28">
            <span className="bodySmall main-page-text41">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="main-page-icon-group1">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="main-page-icon10 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="main-page-icon12 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainPage
