const RentalProvider = require('./rentalPrediction/rentalPrediction');
const SpartanBot = require('spartanbot').SpartanBot
require("dotenv").config();

const {API_KEY, API_SECRET, ORG_ID} = process.env;

let workerAddress = 'RRj8fK1WRUr6mHWxwMF3Cb7X35HcmF9Pet'; //TrueDevs RVN worker

let settingsNiceHash = { //martin
  type: 'NiceHash',
  api_key: API_KEY,
  api_secret: API_SECRET,
  api_id: ORG_ID,
  name: 'NiceHash'
};

let settingsMRR = {
  type: 'MiningRigRentals',
  api_key: '',
  api_secret: 
    '',
  name: 'MiningRigRentals'
};

let userInput = {
  token: 'RVN',
  tokenAlgo: 'KAWPOW',
  nextWorker: workerAddress,
  minDuration: .5,  // this should be a user setting (not in the main interface)
  minMargin: .10
}

//let rentalProvider = new RentalProvider();

let token = "RVN"
let tokenAlgo = "KAWPOW"
let minDuration = 60
let tokensPerBlock = 5000
let blocksPerHour = 60

let rentalProvider = new RentalProvider(settingsNiceHash);

function userinput() {
  let token = 'RVN';
  let tokenAlgo = 'KAWPOW';
  let nextWorker = workerAddress
  let minDuration = .5;  // this should be a user setting (not in the main interface)
  let minMargin = .10

  return { token, tokenAlgo, nextWorker, minDuration, minMargin};
}

let UserInput = userinput();
//let test = rentalProvider.getcurrentconditions(token, tokenAlgo, minDuration, tokensPerBlock, blocksPerHour)

/*
rentalProvider.setup(UserInput).then(() => {
  rentalProvider.getcurrentconditions(token, tokenAlgo, minDuration, tokensPerBlock, blocksPerHour).then((conditions) => console.table(conditions)
  )
})
*/

/*
rentalProvider.setup(UserInput).then(() => {
  rentalProvider.getcurrentconditions(token, tokenAlgo, minDuration, tokensPerBlock, blocksPerHour).then((currentCondition) => {
      rentalProvider.getcurrentrental(currentCondition).then((currentRental) => {
        let rewardsBeforeRentalStart = currentCondition.rewardsTotal
        let RentalCompositeStatusCode = (currentRental === undefined) ? (9) : (currentRental.RentalCompositeStatusCode)
        let RewardsCompositeCode = (currentCondition === undefined) ? (9) : (currentCondition.RewardsCompositeCode)
        let LiveEstimatesFromMining = rentalProvider.liveestimatesfrommining(currentRental, currentCondition, UserInput, tokensPerBlock, blocksPerHour, rewardsBeforeRentalStart)
        let MinerSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.MinerSubStatusCode)
        let RoundSharesSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.RoundSharesSubStatusCode)
        let CandidateBlocksSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.CandidateBlocksSubStatusCode)
        let NetworkPercent;
        let BestArbitrageCurrentConditions = rentalProvider.bestarbitragecurrentconditions(NetworkPercent, UserInput, tokensPerBlock, blocksPerHour, currentCondition)


        rentalProvider.botstatus(RentalCompositeStatusCode, RewardsCompositeCode, currentCondition, currentRental, LiveEstimatesFromMining, MinerSubStatusCode, RoundSharesSubStatusCode, CandidateBlocksSubStatusCode, BestArbitrageCurrentConditions, minMargin)
      })
  })
})
  
*/


function test() {
  rentalProvider.setup(UserInput).then(() => {
    rentalProvider.getcurrentconditions(token, tokenAlgo, minDuration, tokensPerBlock, blocksPerHour).then((currentCondition) => {
      rentalProvider.getcurrentrental(currentCondition).then((currentRental) => {
        let rewardsBeforeRentalStart = currentCondition.rewardsTotal
        let RentalCompositeStatusCode = (currentRental === undefined) ? (9) : (currentRental.RentalCompositeStatusCode)
        let RewardsCompositeCode = (currentCondition === undefined) ? (9) : (currentCondition.RewardsCompositeCode)
        let LiveEstimatesFromMining = rentalProvider.liveestimatesfrommining(currentRental, currentCondition, UserInput, tokensPerBlock, blocksPerHour, rewardsBeforeRentalStart)
        let MinerSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.MinerSubStatusCode)
        let RoundSharesSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.RoundSharesSubStatusCode)
        let CandidateBlocksSubStatusCode = (currentCondition === undefined) ? (9) : (currentCondition.CandidateBlocksSubStatusCode)
        let NetworkPercent;
        let BestArbitrageCurrentConditions = rentalProvider.bestarbitragecurrentconditions(NetworkPercent, UserInput, tokensPerBlock, blocksPerHour, currentCondition).then(res => console.log(res))
        let minMargin = .10

        //console.log(currentRental);
        
        rentalProvider.botstatus(RentalCompositeStatusCode, RewardsCompositeCode, currentCondition, currentRental, LiveEstimatesFromMining, MinerSubStatusCode, RoundSharesSubStatusCode, CandidateBlocksSubStatusCode, BestArbitrageCurrentConditions, minMargin).then((res) => {
          console.log(res);
          
        })

      })
    })
  })
}

setInterval(test, 15000)



