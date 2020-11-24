
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET,
  });

const getTravelRecommendations = () => {
    const travelRecommendations = amadeus.referenceData.recommendedLocations.get({
        cityCodes: 'PAR',
        travelerCountryCode: 'FR'
      }).then(response => {
        // console.log(response);
        return response.data;
      }).catch(e => {
          console.log(e);
      })
    return travelRecommendations;
}

exports.getTravelRecommendations = getTravelRecommendations;