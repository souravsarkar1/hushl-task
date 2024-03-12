export const initialFormData = {
  propertyInformation: {
    scopeOfRenovation: [],
    stateOfRepair: '',
    propertyType: '',
    rating: '',
    numberofRooms: '',
    LGBTQIFriendly: '',
    Design: '',
    isAdultOnly: '',
    propertymap: '',
    lastRenovated: '',
    thirdPartyReviewsaorAwards: '',
    ecoAwardsOrCertification: '',
    wifi: '',
    uniqueSellingPoints: '',
  },
  location: {
    latitude: '',
    longitude: '',
    city: '',
    roadAndNumber: '',
    suburb: '',
    postCode: '',
    country: '',
    state: '',
    atoll: '',
  },
  healthSafety: {
    lastReviewDate: '',
    rating: 0,
    comments: '',
    policyForEvacuation: [
      {
        title: '',
        url: '',
      },
    ],
    medicalEmergencyPolicy: [
      {
        title: '',
        url: '',
      },
    ],
    doctorOnSite: '',
    doctorIsPermanent: '',
    nurseOnsite: '',
    nurseIsPermanent: '',
    onPremiseQualifications: '',
    defibrillatorsOnProperty: '',
    defibrillatorsByPool: '',
    nearestClinicHospital: '',
    specialitiesOfNearestHospital: '',
    nearestChildrenHospital: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
  },

  beach: {
    length: '',
    features: '',
    beachType: [],
    areSomePartsofTheBeachOnlyForPrivateUse: '',
    willBeachVillasbeDisturbed: '',
    instagramSpots: '',
    tidesRips: '',
    hoursofLifeguardDuty: '',
    areoffBeachPatrolledbyLifeguards: '',
    lifeguardQualifications: [],
    cleanliness: '',
    include: '',
    BBQSpots: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },

    // outerReef: ""
  },
  transferOptions: {
    weatherlimited: '',
    timeLimitedbyTransferType: '',
    hotelFacilitatesTransferBooking: '',
    qualityofBoats: '',
    transferOption: '',
    boatschedules: '',
    seaplaneSchedules: '',
    seaplaneProvider: '',
    domesticAirlineSchedules: '',
    likelihoodofDelays: '',

    distanceOrTimeFromMale: '',
    meetAndGreetAtAirport: '',
  },
  waterSports: {
    diving: '',
    affiliation: '',
    sites: '',
    languagesSpoken: '',
    submarineTour: '',
    costs: '',
    maximumOccupancy: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
    whatflotationDevicesProvided: '',
    minimumAge: '',
    equipmentProvided: '',
    otherServices: '',
    nameOfSurfSite: '',
    reviewsSentiments: '',
  },

  reef: {
    entryPointSandLengthofSwim: '',
    accessibleFromBeach: [],
    houseReefAccessiblebyBoat: '',
    houseReefAccessibleCost: '',
    accessiblebyBoat: '',
    costTravel: '',
    travelTime: '',
    sites: '',
    outerReef: '',
    qualityOfCoral: '',
    houseReef: '',
    distanceFromBeach: '',
    qualityofFish: '',
    nearestOtherReefforGoodCoral: '',
    onsiteMarineBiologist: '',
    entryPointsAndLengthOfSwim: '',
    abundanceOfReefSharks: '',
    reviewsSentiments: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
  },
  gym: {
    qualityOfEquipment: '',
    rangeofEquipment: [],
    spaPreBookingAdvised: '',
    classes: '',
    specialistMachines: '',
    trainerOnSite: '',
    cost: '',
    openingTimes: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
    reviewsSentiments: '',
  },
  kidsClub: {
    ratioofStafftoChildren: '',
    staffQualifications: [],
    languagesSpoken: [],
    hours: '',
    cost: '',
    preBbookingAdvised: '',
    agesAccommodated: '',
    activities: [],
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
  },
  foodAndBeverage: {
    InclusionsOrExclusionsforFullOrhalfBoard: '',
    extraCostForRoomService: '',
    numberOfBarsAndNames: '',
    hoursOfOperation: '',
    specialties: '',
    reviewsSentiments: '',
    numberOfRestaurantsandNames: '',
    typesOfCuisine: '',
    halaalOption: '',
    kidsMenu: '',
    roomService: '',
    seviewsSentiments: '',
    media: {
      images: [
        {
          title: '',
          url: '',
        },
      ],
    },
  },
  services: {
    trainingOrQualifications: '',
    needToPreBook: '',
    //(limited number available:
    safetyFeatures: '',
    isNannyavAilable: '',
    cost: '',
  },
  pool: {
    length: '',
    depth: '',
    lapPool: '',
    safetyFeatures: '',
    totalNumberOfPool: '',
    reviewsSentiments: '',
    IsadultOnly: '', // boolean
    kidsFeatures: '',
    heated: '',
    cleanliness: '',
  },
  rooms: {
    maxOccupancyAdult: '',
    maxOccupancyChild: '',
    //adultAndChildCombinations: "",
    NeedtoPreBookExtraBedding: '',
    safetyFeaturesifOverwaterBungalow: [],
    safetyFeaturesForBalcony: [],
    safetyFeaturesForPool: [],
    commentsOnHowPrivacyIsImpacted: '',
    interconnected: '',
    noiseAtNight: '',
    privacyLevelsGoodEnoughForStrictMuslim: '',
    movieSystemsOrDVDs: '',
    roomName: '',
    numberOfRooms: '',
    reviewsSentiments: '',
    roomSize: '',
    childAgeCategory: '',
    cotAllowedAndcost: '',
    rollawayBedAllowedAndCost: '',
    roomLayoutMap: '',
    separateToilet: '',
    separateLivinRoomwoutDoor: '',
    needToPreBookExtrabedding: '', //(limited availability)
    numberOfBathrooms: '',
    bath: '',
    freeWifi: '', // boolean
    balconyPatio: '',
    privatePool: '',
    dimensionsOfPool: '',
    poolHeated: '',
    overwater: '',
    beachAccess: '',
    isTV: '', // boolean
    ironIroningBoard: '', // boolean
    teaOrCoffeeOrKettle: '', // boolean
    isMicrowave: '', // boolean
    musicSystem: '',
    laundryService: '',
    kitchenFacilitiesAndWhatFacilities: '',
    safe: '',
    pillowMenu: '',
    blackoutCurtains: '',
    FanOrAC: '',
    babyBath: '',
    babyMonitor: '',
    childrensToys: '',
    childrensCutlery: '',
  },
  media: {
    images: [
      {
        title: '',
        url: '',
      },
    ],
  },
};
