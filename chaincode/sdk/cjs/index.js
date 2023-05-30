'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getArbitrumOneSdk =
  exports.getGoerliSdk =
  exports.getPolygonSdk =
  exports.getContract =
    void 0
const ethers_1 = require('ethers')
const rusd_json_1 = __importDefault(require('../../abis/polygon/rusd.json'))
const priceFeed_json_1 = __importDefault(
  require('../../abis/polygon/priceFeed.json')
)
const multiLot_json_1 = __importDefault(
  require('../../abis/polygon/multiLot.json')
)
const rusd_json_2 = __importDefault(require('../../abis/goerli/rusd.json'))
const priceFeed_json_2 = __importDefault(
  require('../../abis/goerli/priceFeed.json')
)
const multiLot_json_2 = __importDefault(
  require('../../abis/goerli/multiLot.json')
)
const rusd_json_3 = __importDefault(require('../../abis/arbitrumOne/rusd.json'))
const priceFeed_json_3 = __importDefault(
  require('../../abis/arbitrumOne/priceFeed.json')
)
const multiLot_json_3 = __importDefault(
  require('../../abis/arbitrumOne/multiLot.json')
)
function getContract(address, abi, defaultSignerOrProvider) {
  return new ethers_1.Contract(address, abi, defaultSignerOrProvider)
}
exports.getContract = getContract
function getPolygonSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0xebAFe0Dc33d03976AC497a33079dC374018C9dE2',
      rusd_json_1.default,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x20332137f38af5ba8816d65657d324125a91993e',
      priceFeed_json_1.default,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x2C0Cd4B2a5C7777c3a59536ECA4E366092fC161b',
      multiLot_json_1.default,
      defaultSignerOrProvider
    ),
  }
}
exports.getPolygonSdk = getPolygonSdk
function getGoerliSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0x6D3F27853c3a0a00a57ee38E3d033d09701Fa7f6',
      rusd_json_2.default,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x3Ee543fd47F8B62f57C2ae337fA384eb12Cae9cd',
      priceFeed_json_2.default,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x441d138f08c717828f3fe6dae6fea32f5bc1f667',
      multiLot_json_2.default,
      defaultSignerOrProvider
    ),
  }
}
exports.getGoerliSdk = getGoerliSdk
function getArbitrumOneSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0xdd5FD2737cbC3111E68B64a789a7083CAAa8c9CC',
      rusd_json_3.default,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x799222AF47549789464557D6324cC6D31b1C7FD0',
      priceFeed_json_3.default,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x5178703354f8a1972b5889d5d5ca790bd6c7324e',
      multiLot_json_3.default,
      defaultSignerOrProvider
    ),
  }
}
exports.getArbitrumOneSdk = getArbitrumOneSdk
