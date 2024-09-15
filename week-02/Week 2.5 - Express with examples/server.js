
const express = require("express");
const app = express();
const port = 3000;

// global database 
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      }
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy == true) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  console.log(johnKidneys);
  console.log(numberOfHealthyKidneys)
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
