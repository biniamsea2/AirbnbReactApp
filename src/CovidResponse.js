import React from "react";
import './CovidResponse.css';

function CovidResponse() {
  return (
    <div className="covidResponse">
      {/* rel is not required but is a secruity recommendation */}
      {/* allows us to open with a new tab: */}
      <a target="_blank" rel="noopener noreferrer" href="https://www.airbnb.com/resources/hosting-homes?persona=guest">Get the latest on our COVID-19 response</a>
    </div>
  );
}

export default CovidResponse;
