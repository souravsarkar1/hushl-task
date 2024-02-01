const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  propertyInformation: {
    scopeOfRenovation: [{ type: String }],  // Assuming an array of strings for renovation scope
    stateOfRepair: { type: String, default: '' }
  },
  healthSafety: {
    lastReviewDate: { type: Date, default: null },
    rating: { type: Number, default: 0 },
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
    length: { type: Number, default: 0 },
    features: { type: String, default: '' },
    instagramSpots: { type: String, default: '' },
    tidesRips: { type: String, default: '' },
    hoursofLifeguardDuty: { type: Number, default: 0 },
    areoffBeachPatrolledbyLifeguards: { type: String, default: '' },
    lifeguardQualifications: [{ type: String }],  // Assuming an array of strings for qualifications
    outerReef: { type: String, default: '' }
  },
  transferOptions: {
    weatherlimited: { type: String, default: '' },
    timeLimitedbyTransferType: { type: String, default: '' },
  },
  reef: {
    entryPointSandLengthofSwim: { type: String, default: '' },
    accessibleFromBeach: [{ type: String }],  // Assuming an array of strings for accessibility
    houseReefAccessiblebyBoat: { type: String, default: '' },
    houseReefAccessibleCost: { type: Number, default: 0 },
    accessiblebyBoatCostTravelTime: [{ type: String }],  // Assuming an array of strings for cost and travel time
    sites: { type: String, default: '' }
  },
  gym: {
    qualityOfEquipment: { type: String, default: '' },
    rangeofEquipment: { type: String, default: '' },
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
    length: { type: Number, default: 0 },
    depth: { type: Number, default: 0 },
    lapPool: { type: String, default: '' },
    safetyFeatures: { type: String, default: '' }
  },
  rooms: {
    maxOccupancy: { type: String, default: '' },
    adultAndChildCombinations: { type: String, default: '' },
    NeedtoPreBookExtraBedding: { type: String, default: '' },
    safetyFeaturesForPool: { type: String, default: '' },
    safetyFeaturesifOverwaterBungalow: { type: String, default: '' },
    interconnected: { type: String, default: '' },
    noiseAtNight: { type: String, default: '' },
    privacyLevelsGoodEnoughForStrictMuslim: { type: String, default: '' },
    movieSystemsOrDVDs: { type: String, default: '' }
  }
}, {
  timestamps: true,
  versionKey: false
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {ProductModel}