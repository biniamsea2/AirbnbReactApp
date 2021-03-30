import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import card2 from "./Images/card2.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <h1>Live anywhere</h1>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
          title="Entire homes"
          description=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
          title="Unique stays"
          description=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720"
          title="Cabins and cottages"
          description=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
          title="Pets allowed"
          description=""
        />
      </div>

      <div className="your_world">
        <h1>
          Your world is <br></br>worth sharing
        </h1>
        <h5 Style="margin-top:5px;font-weight:lighter;">
          Turn your extra space into your next <br></br>opportunity.
        </h5>

        <form>
          <button
            onClick={() => {
              window.open("https://www.airbnb.com/host/homes?locale=en");
            }}
          >
            Become a Host
          </button>
        </form>
      </div>
      <div className="home_section">
        <Card
          Style="position:relative; z-index:-1;"
          src={card2}
          title=""
          description=""
        />
      </div>
      <h2 className="discover">Discover Experiences</h2>
      <h3 className="unique">Unique activities with local experts—in person or online.</h3>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=1200"
          title="Experiences"
          description="Local things to do, wherever you are."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=1200"
          title="Online Experiences"
          description="Live, interactive activities led by Hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=1200"
          title="Featured collection: Wanderlust"
          description="Travel from home with Online Experiences."
        />
      </div>
    </div>
  );
}

export default Home;
