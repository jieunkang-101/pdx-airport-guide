export class FlightTracker {
  async getFlight(airline, flightNumber) {
    console.log(airline)
    console.log(flightNumber)
    try {
      let response = await fetch(`https://aerodatabox.p.rapidapi.com/flights/${airline}${flightNumber}/2019-08-29?withLocation=false&withAircraftImage=false`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.API_KEY}`,
          "mode": "no-cors"
        }
      });
      let jsonifiedResponse;
      if(response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
    
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}