import React, { useState } from 'react';
import './App.css';  // Make sure your CSS is linked correctly
import StatsCard from './components/StatsCard';

const App = () => {
  // State for color customization (if needed)
  const [accentColor, setAccentColor] = useState('#FF9888');
  const [textColor, setTextColor] = useState('#571010');
  const [bgColor, setBgColor] = useState('#FFEEAA');

  const applyColors = () => {
    // You can use this function to apply the chosen colors dynamically
    console.log('Accent Color:', accentColor);
    console.log('Text Color:', textColor);
    console.log('Background Color:', bgColor);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <nav>
          <ul className="navbar">
            <li className="nav-li"><a href="#">Home</a></li>
            <li className="nav-li"><a href="#">Orders</a></li>
            <li className="nav-li"><a href="#">Integrations</a></li>
            <li className="nav-li"><a href="#">Tracking Page</a></li>
            <li className="nav-li"><a href="#">Partner with Us</a></li>
            <li className="nav-li"><input type="text" placeholder="search" className="search"></input></li>
            <li className="nav-li"><a href="#">Account</a></li>
            <li className="nav-li"><a href="#">Setting</a></li>
          </ul>
          {/* <div className="account-settings">
            <a href="#">Account</a>
            <a href="#">Settings</a>
          </div> */}
        </nav>
      </header>

      {/* Welcome Section */}
      <main>
        <section className="welcome-section">
          <h1>Welcome, John Mathew!!</h1>
          <div className="notification-boxes">
            <div className="notification">
              <h3>Order Sync Successful!</h3>
              <p>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
              <button>Explore Your Orders</button>
            </div>
            <div className="notification2">
              <h3>Customize Customer Notification</h3>
              <p>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
              <button>Configure Notifications</button>
            </div>
            <div className="notification3">
              <h3>Your Tracking Link has been generated</h3>
              <p>Include the Link to Your Store's Navigation Menu.</p>
              <button className= "button1">Copy Link</button>
              <button>Go To Navigation Menu</button>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="performance-metrics">
          <h2>Instant Dive into Your Performance Metrics</h2>
          <div className="metrics-timeline">
            <button>Lifetime</button>
            <button>Last Week</button>
            <button>Last Month</button>
            <button>Last Year</button>
            <button>Customize Timeline</button>
          </div>

          <div className="stats-section">
            <div className="shipment-updates">
              <h3>Shipment Updates</h3>
              <div className="chart">
                <span>Delivered</span>
                <span>Out for Delivery</span>
                <span>Intransit</span>
                <span>Pending</span>
                <span>Exception</span>
              </div>
            </div>

            <div className="star-facts">
              <h5 className="star-facts-text">Star facts about your orders!!!</h5>      
              <p className="star-facts-para">There are 8 shipments<br/>
                that have been in out for<br/>
                delivery for more than 3<br/>
                days.<br/>

                There are 5 shipments in<br/>
                exception right now<br/>

                The maximum<br/>
                chargebacks are from<br/>
                Miami.<br/>
                </p>
                <button className= "button2">Check Orders Page</button>
            </div>

            <div className="tracking-orders">
              <h3>Tracking Page Views vs Orders</h3>
              <div className="order-stats">
                <div className="orders">Orders: <span>80</span></div>
                <div className="views">Tracking Page Views: <span>44</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Customization Section */}
        <section className="brand-customization">
          <h2>Discover the Heart of Our Functionality</h2>
          <div className="customization-boxes">
            <div className="box">
              <h3>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
              <p>
                Immerse your customers in a branded<br/>
                experienceby personalization the color on your<br/>
                tracking page.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="accent-color">Accent Color</label>
                <li ><input type="text" placeholder="FF9898" className="accent-color"></input>
                <input
                  type="color"
                  id="accent-color"
                  name="accent-color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                /></li>

                <label htmlFor="text-color">Text Color</label>
                <li ><input type="text" placeholder="571010" className="accent-color"></input>
                <input
                  type="color"
                  id="text-color"
                  name="text-color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                /></li>

                <label htmlFor="bg-color">Background Color</label>
                <li ><input type="text" placeholder="FF9898" className="accent-color"></input>
                <input
                  type="color"
                  id="bg-color"
                  name="bg-color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                /></li>
                <button className= "preview">Preview</button>
                <button type="button" onClick={applyColors}>Apply Colors</button>
              </form>
            </div>

            <div className="box">
              <h3>Exclusive Onboarding Support for High-Volume Brands</h3>
              <p>
                Unlock personalized guidance! Book a one-on-one<br/>
                onboarding call to streamline tour experience.
              </p>
              <button>Schedule A Call</button>
            </div>

            <div className="box">
              <h3>Seamlessly Integrate Custom HTML Elements</h3>
              <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
             <h4>HTML LINK</h4>
              <textarea placeholder="Value"></textarea>
              <button className="preview">Preview</button>
              <button>Apply Changes</button>
            </div>
          </div>
        </section>
        <StatsCard/>
      </main>
    </div>
  );
};

export default App;
