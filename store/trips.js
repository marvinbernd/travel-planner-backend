const trips = [
  {
    id: 1,
    title: 'Mexico',
    start: new Date('2020-12-26'),
    end: new Date('2021-01-06'),
    startString: 'Dec 26',
    endString: 'Jan 6',
    image: { fileName: 'tulum' },
    items: [
      {
        id: 1,
        date: new Date('2020-12-26T12:00:00'),
        type: 'airplane',
        arrivalAirport: 'FRA',
        depatureAirport: 'MIA',
        flightNumber: 'LH1223',
        arrival: new Date('2020-12-26T18:45:00'),
        arrivalTimeZone: 'GMT-4',
      },
      {
        id: 2,
        date: new Date('2020-12-27T15:00:00'),
        type: 'hotel',
        title: 'The Betsy Hotel',
      },
      {
        id: 3,
        date: new Date('2020-12-27T19:00:00'),
        type: 'silverware',
        title: 'Nobu Miami Beach',
      },
    ],
  },
  {
    id: 2,
    title: 'Bali',
    start: new Date('2021-02-08'),
    end: new Date('2021-02-22'),
    startString: 'Dec 26',
    endString: 'Jan 6',
    image: { fileName: 'bali' },
    items: [],
  },
  {
    id: 3,
    title: 'Amsterdam',
    start: new Date('2021-02-26'),
    end: new Date('2021-02-28'),
    startString: 'Dec 26',
    endString: 'Jan 6',
    image: { fileName: 'amsterdam' },
    items: [],
  },
  {
    id: 4,
    title: 'Chile',
    start: new Date('2019-12-26'),
    end: new Date('2019-01-06'),
    startString: 'Dec 26',
    endString: 'Jan 6',
    image: { fileName: 'chile' },
    items: [],
  },
  {
    id: 5,
    title: 'Chile',
    start: new Date('2022-12-26'),
    end: new Date('2022-01-06'),
    startString: 'Dec 26',
    endString: 'Jan 6',
    image: { fileName: 'chile' },
    draft: true,
    items: [],
  },
];

const getTrips = () => trips;

const getTrip = (id) => {
  return trips.find((trip) => trip.id === id);
};

const addTrip = (trip) => {
  trip.id = trips.length + 1;
  trips.push(trip);
};

module.exports = {
  addTrip,
  getTrips,
  getTrip,
};
