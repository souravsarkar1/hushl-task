const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  hotelName : {
    name : {type : String, default : ""},
    address : {type : String,default : ""}
  },
  propertyInformation: {
    scopeOfRenovation: [{ type: String }],  
    stateOfRepair: { type: String, default: '' }
  },
  healthSafety: {
    lastReviewDate: { type: Date, default: Date.now },
    rating: { type: Number, default: 0.0 },
    comments: { type: String, default: '' },
    policyForEvacuation: [{
      title: { type: String, default: '' },
      url: { type: String, default: '' }
    }],
    medicalEmergencyPolicy: [{
      title: { type: String, default: '' },
      url: { type: String, default: '' }
    }],
    doctorOnSite: { type: String, default: '' },
    doctorIsPermanent: { type: String, default: '' },
    nurseOnsite: { type: String, default: '' },
    nurseIsPermanent: { type: String, default: '' },
    onPremiseQualifications: { type: String, default: '' },
    defibrillatorsOnProperty: { type: String, default: '' },
    defibrillatorsByPool: { type: String, default: '' }
  },

  beach: {
    beachType : [{type : String}],
    length: { type: Number, default: 0 },
    features: { type: String, default: '' },
    instagramSpots: { type: String, default: '' },
    tidesRips: { type: String, default: '' },
    hoursofLifeguardDuty: { type: Number, default: 0 },
    areoffBeachPatrolledbyLifeguards: { type: String, default: '' },
    lifeguardQualifications: [{ type: String,  }],
    areSomePartsofTheBeachOnlyForPrivateUse : {type : String, default: ''},
    willBeachVillasbeDisturbed : {type : String, default: ''},
  },
  transferOptions: {
    weatherlimited: { type: String, default: '' },
    timeLimitedbyTransferType: { type: String, default: ""},
    hotelFacilitatesTransferBooking : {type : String, default: ""},
    qualityofBoats : {type : String, default : ""}

  },
  reef: {
    entryPointSandLengthofSwim: { type: String, default: '' },
    accessibleFromBeach: [{ type: String }],  // Assuming an array of strings for accessibility
    houseReefAccessiblebyBoat: { type: String, default: '' },
    houseReefAccessibleCost: { type: Number, default: 0 },
    accessiblebyBoat : {type : String, default : ''},
    costTravel : {type : Number, default : 0},
    travelTime : {type : Number, default: 0},
    sites: { type: String, default: '' },
    outerReef : {type : String, default : ''}
  },
  gym: {
    qualityOfEquipment: { type: String, default: '' },
    rangeofEquipment: [{ type: String, default: '' }],
    spaPreBookingAdvised : {type : String, default : ""}
  },

  kidsClub: {
    ratioofStafftoChildren: { type: Number, default: 0 },
    staffQualifications: [{ type: String }],  // Assuming an array of strings for qualifications
    languagesSpoken: [{ type: String }],  // Assuming an array of strings for languages
  },
  foodAndBeverage: {
    InclusionsOrExclusionsforFullOrhalfBoard: { type: String, default: '' },
    extraCostForRoomService: { type: String, default: '' }
  },
  services: {
    trainingOrQualifications: [{ type: String }],  // Assuming an array of strings for qualifications
    needToPreBook: { type: String, default: '' },
    safetyFeatures: [{ type: String, default: '' }],
    isNannyavAilable : {type : String,default : ""}
  },
  pool : {
    length: { type: Number, default: 0 },
    depth: { type: Number, default: 0 },
    lapPool: { type: String, default: '' },
    safetyFeatures: [{type : String, default : ""}] 
  },
  rooms: {
    // maxOccupancy: ,
    maxOccupancyAdult : { type: Number, default: 0 },
    maxOccupancyChild : { type: Number, default: 0 },
    //adultAndChildCombinations: { type: Number, default: 0 },
    NeedtoPreBookExtraBedding: { type: String, default: '' },
    safetyFeaturesifOverwaterBungalow: [{ type: String, default: '' }],
    safetyFeaturesForBalcony: [{ type: String, default: '' }],
    safetyFeaturesForPool: [{ type: String, default: '' }],
    commentsOnHowPrivacyIsImpacted :{type : String, default: ""}, 
    interconnected: { type: String, default: '' },
    noiseAtNight: { type: String, default: '' },
    privacyLevelsGoodEnoughForStrictMuslim: { type: String, default: '' },
    movieSystemsOrDVDs: { type: String, default: '' },
  },
  media: {
    images: [
      {
        title: { type: String, default: '' },
        url: { type: String, default: '' }
      }
    ]
  }
}, {
  timestamps: true,
  versionKey: false
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = { ProductModel };
