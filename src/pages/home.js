import React from 'react'
const axios = require('axios');

var data = JSON.stringify({
    "collection": "products",
    "database": "nike",
    "dataSource": "nike-products",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-bchwk/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '',
      'api-key': 'y9WWVaW4WSdKCd4c0bCmiRuOGdqOAEYxdPHoOAzQZv2LEutd8fe92glLiDsoyoN3',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

function home() {
    return (
        <div>home</div>
    )
}

export default home