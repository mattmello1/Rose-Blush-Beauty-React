import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Rose & Blush Beauty</title>
        <meta property="og:title" content="Contact - Rose &amp; Blush Beauty" />
      </Helmet>
      <div className="contact-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer contact-navbar-interactive"
        >
          <span className="logo">rose &amp; blush beauty</span>
          <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
            <nav className="contact-links">
              <span className="bodySmall">Home</span>
              <span className="contact-nav22 bodySmall">Services</span>
              <span className="contact-nav32 bodySmall">Portfolio</span>
              <span className="contact-nav42 bodySmall">Book Now</span>
              <span className="contact-nav52 bodySmall">Contact</span>
            </nav>
            <div className="contact-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="contact-mobile-menu1 mobileMenu"
          >
            <div className="contact-nav">
              <div className="contact-top">
                <span className="logo">GLAMOUR</span>
                <div data-thq="thq-close-menu" className="contact-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="contact-links1">
                <span className="contact-nav121 bodySmall">Home</span>
                <span className="contact-nav221 bodySmall">Services</span>
                <span className="contact-nav321 bodySmall">Portfolio</span>
                <span className="contact-nav421 bodySmall">Book Now</span>
                <span className="contact-nav521 bodySmall">Contact</span>
              </nav>
              <div className="contact-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="contact-hero">
        <div className="heroContainer contact-hero1">
          <div className="contact-container01">
            <h1 className="contact-hero-heading heading1">
              Discover Your Beauty
            </h1>
            <span className="contact-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Elevate Your Look with Expert Makeup Artistry</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
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
              <span>
                <span>
                  <span>
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
                <span>
                  <span>
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
            </span>
            <div className="contact-btn-group">
              <button className="buttonFilled">Book Now</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-features">
        <div className="featuresContainer">
          <div className="contact-features1">
            <div className="contact-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="contact-features-heading heading2">
                Discover Our Services
              </h2>
              <span className="contact-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Elevate your beauty experience with our exclusive
                      offerings
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
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
                <span>
                  <span>
                    <span>
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
                  <span>
                    <span>
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
              </span>
            </div>
            <div className="contact-container03">
              <FeatureCard
                heading="Private Makeup Appointments"
                subHeading="Personalized makeup services tailored to your preferences and needs"
              ></FeatureCard>
              <FeatureCard
                heading="Makeup Classes"
                subHeading="Interactive and informative makeup classes for all skill levels"
              ></FeatureCard>
              <FeatureCard
                heading="Professional Guidance"
                subHeading="Expert advice on makeup techniques, products, and trends"
              ></FeatureCard>
              <FeatureCard
                heading="Customized Looks"
                subHeading="Unique and creative makeup looks designed just for you"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-pricing">
        <div className="pricingContainer">
          <div className="contact-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Perfect Plan</h2>
            <span className="contact-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the beauty within with our tailored makeup services
                </span>
              </span>
            </span>
          </div>
          <div className="contact-container05">
            <div className="freePricingCard contact-pricing-card">
              <div className="contact-container06">
                <span className="contact-text36 heading3">Free</span>
                <span className="bodySmall">
                  Perfect for those looking to enhance their makeup skills
                </span>
              </div>
              <div className="contact-container07">
                <span className="contact-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-free-plan-price">0</span>
              </div>
              <div className="contact-container08">
                <div className="contact-container09">
                  <span className="contact-text40">✔</span>
                  <span className="bodySmall">
                    Access to basic makeup tutorials
                  </span>
                </div>
                <div className="contact-container10">
                  <span className="contact-text41">✔</span>
                  <span className="bodySmall">
                    Limited availability for appointments
                  </span>
                </div>
                <div className="contact-container11">
                  <span className="contact-text42">✔</span>
                  <span className="bodySmall">
                    Option to purchase additional classes
                  </span>
                </div>
                <div className="contact-container12">
                  <span className="contact-text43">✔</span>
                  <span className="bodySmall">
                    Limited access to exclusive events
                  </span>
                </div>
              </div>
              <button className="contact-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard contact-pricing-card1">
              <div className="contact-container13">
                <span className="contact-text44 heading3">BASIC</span>
                <span className="bodySmall">
                  Ideal for individuals seeking personalized makeup sessions
                </span>
              </div>
              <div className="contact-container14">
                <span className="contact-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-basic-plan-pricing">50</span>
                <span className="contact-text48">/ month</span>
              </div>
              <div className="contact-container15">
                <div className="contact-container16">
                  <span className="contact-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="contact-container17">
                  <span className="contact-text51">✔</span>
                  <span className="bodySmall">
                    One-on-one makeup appointment
                  </span>
                </div>
                <div className="contact-container18">
                  <span className="contact-text52">✔</span>
                  <span className="bodySmall">
                    Customized makeup look tailored to your preferences
                  </span>
                </div>
                <div className="contact-container19">
                  <span className="contact-text53">✔</span>
                  <span className="bodySmall">
                    Access to premium makeup products during session
                  </span>
                </div>
                <div className="contact-container20">
                  <span className="contact-text54">✔</span>
                  <span className="bodySmall">
                    10% discount on future bookings
                  </span>
                </div>
              </div>
              <button className="contact-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard contact-pricing-card2">
              <div className="contact-container21">
                <span className="contact-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Designed for makeup enthusiasts looking to elevate their
                  skills
                </span>
              </div>
              <div className="contact-container22">
                <span className="contact-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="contact-pro-plan-pricing">100</span>
                <span className="contact-text61">/ month</span>
              </div>
              <div className="contact-container23">
                <div className="contact-container24">
                  <span className="contact-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="contact-container25">
                  <span className="contact-text64">✔</span>
                  <span className="bodySmall">
                    Advanced makeup techniques workshop
                  </span>
                </div>
                <div className="contact-container26">
                  <span className="contact-text65">✔</span>
                  <span className="bodySmall">
                    Exclusive access to new product launches
                  </span>
                </div>
                <div className="contact-container27">
                  <span className="contact-text66">✔</span>
                  <span className="bodySmall">
                    Priority booking for appointments and classes
                  </span>
                </div>
                <div className="contact-container28">
                  <span className="contact-text67">✔</span>
                  <span className="bodySmall">
                    20% discount on all services
                  </span>
                </div>
              </div>
              <button className="contact-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <div className="bannerContainer contact-banner1">
          <h1 className="contact-banner-heading heading2">
            Welcome to the World of Makeup Magic
          </h1>
          <span className="contact-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Indulge in a transformative experience with our professional
                  makeup services. Whether you&apos;re seeking a glamorous
                  makeover for a special occasion or looking to enhance your
                  skills through personalized classes, we are here to make your
                  beauty dreams a reality.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
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
            <span>
              <span>
                <span>
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
              <span>
                <span>
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
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="contact-faq">
        <div className="faqContainer">
          <div className="contact-faq1">
            <div className="contact-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="contact-text85 heading2">Common questions</h2>
              <span className="contact-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="contact-container30">
              <Question1
                answer="You can easily book a private appointment by visiting the 'Book Appointment' section on the website and selecting your preferred date and time."
                question="How can I book a private appointment with the makeup artist?"
              ></Question1>
              <Question1
                answer="Private appointments include personalized makeup sessions for special events, bridal makeup, editorial looks, and more. The makeup artist will work with you to create the perfect look based on your preferences."
                question="What makeup services are offered for private appointments?"
              ></Question1>
              <Question1
                answer="Yes, makeup classes cater to all skill levels, including beginners. The makeup artist will provide step-by-step guidance and tips to help you enhance your makeup skills."
                question="Are makeup classes available for beginners?"
              ></Question1>
              <Question1
                answer="Payment for appointments and classes can be made securely through the website using major credit cards or other accepted payment methods. Payment details will be provided during the booking process."
                question="How do I pay for my appointment or class?"
              ></Question1>
              <Question1
                answer="Yes, you can reschedule or cancel your appointment by contacting the makeup artist directly at least 24 hours in advance. Please refer to the booking confirmation email for more details on rescheduling or cancelation policies."
                question="Can I reschedule or cancel my appointment?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <footer className="footerContainer contact-footer1">
          <div className="contact-container31">
            <span className="logo">GLAMOUR</span>
            <nav className="contact-nav1">
              <span className="bodySmall">Home</span>
              <span className="contact-nav222 bodySmall">Services</span>
              <span className="contact-nav322 bodySmall">Portfolio</span>
              <span className="contact-nav422 bodySmall">Book Now</span>
              <span className="contact-nav522 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="contact-separator"></div>
          <div className="contact-container32">
            <span className="bodySmall contact-text89">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="contact-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon14 socialIcons"
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

export default Contact
