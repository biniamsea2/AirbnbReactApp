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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/homes?ne_lat=69.17077453041205&ne_lng=-90.35456017042054&sw_lat=26.05222546958795&sw_lng=-154.31403982957946&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
            title="Entire homes"
            description=""
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
            title="Unique stays"
            description=""
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/homes?ne_lat=69.17077453041205&ne_lng=-90.35456017042054&sw_lat=26.05222546958795&sw_lng=-154.31403982957946&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=6&property_type_id%5B%5D=10&property_type_id%5B%5D=16&property_type_id%5B%5D=18&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=63&property_type_id%5B%5D=66&property_type_id%5B%5D=69&property_type_id%5B%5D=4&property_type_id%5B%5D=32&property_type_id%5B%5D=17&property_type_id%5B%5D=23&property_type_id%5B%5D=12&property_type_id%5B%5D=24&property_type_id%5B%5D=15&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=720"
            title="Farms and nature"
            description=""
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/homes?ne_lat=69.17077453041205&ne_lng=-90.35456017042054&sw_lat=26.05222546958795&sw_lng=-154.31403982957946&room_types%5B%5D=Entire%20home%2Fapt&amenities%5B%5D=12&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
            title="Pets allowed"
            description=""
          />
        </a>
      </div>
      <div className="your_world">
        <h1>
          Your world is <br></br>worth sharing
        </h1>
        <h5 Style="margin-top:5px;font-weight:lighter;">
          Turn your extra space into your next <br></br>opportunity.
        </h5>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.airbnb.com/host/homes?locale=en"
          >
            Become a Host
          </a>
        </button>
      </div>
      <div className="home_section">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/host/homes?locale=en"
        >
          <Card img={card2} />
        </a>
      </div>
      <h2 className="discover">Discover Experiences</h2>
      <h3 className="unique">
        Unique activities with local experts—in person or online.
      </h3>
      <div className="home_section">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/experiences?location_search=NEARBY"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=1200"
            title="Experiences"
            description="Local things to do, wherever you are."
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/experiences/online"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=1200"
            title="Online Experiences"
            description="Live, interactive activities led by Hosts."
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46390&search_type=section_navigation"
        >
          <Card
            img="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=1200"
            title="Featured collection: Wanderlust"
            description="Travel from home with Online Experiences."
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
