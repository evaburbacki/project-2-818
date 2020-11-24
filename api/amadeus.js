
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

const getToursAndActivities = async (latitude, longitude) => {
    const toursAndActivities = await amadeus.shopping.activities.get({
        latitude,
        longitude
    }).then(response => {
        console.log(response);
        return response.data
    }).catch(e => {
        console.log(e);
    });
    return toursAndActivities;

}

const getHotels = async (cityCode) => {
    const hotels = await amadeus.shopping.hotelOffers.get({
        cityCode
      }).then(response => {
        console.log(response);
        return response.data
    }).catch(e => {
        console.log(e);
    });
    return hotels;

}

exports.getTravelRecommendations = getTravelRecommendations;
exports.getHotels = getHotels;