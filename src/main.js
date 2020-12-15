const RentalProvider = require('./rentalPrediction/rentalPrediction')
const ExchangePrice= require('./exchangePrice')

let rentalProvider = new RentalProvider();
let exchangePrice = new ExchangePrice();


let updateSpotValues = setInterval(x, 15000)


rentalProvider.setup(UserInput).then(() => {
  rentalProvider.getcurrentconditions(token, tokenAlgo, minDuration, tokensPerBlock, blocksPerHour).then((currentCondition) => {
      rentalProvider.getcurrentrental(currentCondition).then((currentRental) => {
        console.log(currentRental);
       })
  })
})