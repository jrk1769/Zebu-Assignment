const axios = require("axios");
const { response } = require("express");

const express = require('express')
const app = express()


app.get('/api', function (req, res) {
  axios.get('https://randomuser.me/api/?results=5')
  .then(response => { 
      let filteredData = filterData(response.data);
    
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", '*');
      res.json(filteredData);
    
    })
  .catch(error => console.log("Error : ", error));

  
})

app.listen(3001);


function filterData(data) {
  data.results = data.results.map((item) => { 
    
    return {
      name: item.name.title+" "+item.name.first+" "+item.name.last,
      email: item.email,
      gender: item.gender,
      location: {
        city: item.location.city,
        state: item.location.state,
        country: item.location.country
      },
      picture: {
        large: item.picture.large,
        medium: item.picture.medium,
        thumbnail: item.picture.thumbnail
      }
    };
  })
  return data;
}