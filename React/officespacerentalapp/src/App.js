import React from "react";
import officeImage from "./office.jpg";

function App() {

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: officeImage
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: officeImage
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad",
      Image: officeImage
    }
  ];

  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>Office Space , at Affordable Range</h1>

      {
        officeList.map((item, index) => {

          let textColor = {};

          if (item.Rent < 60000) {
            textColor = { color: "red" };
          } else {
            textColor = { color: "green" };
          }

          return (
            <div key={index}>
              <img
                src={item.Image}
                alt="Office Space"
                width="250"
                height="180"
              />

              <h2>Name: {item.Name}</h2>

              <h3 style={textColor}>
                Rent Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

              <br />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;