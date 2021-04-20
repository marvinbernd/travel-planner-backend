const express = require('express');
const router = express.Router();

const tripMapper = require('../mapper/trips');
const store = require('../store/trips');

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateString = (d) => {
  const date = new Date(d);

  let month = date.getMonth();
  month = monthNames[month].slice(0, 3);
  const day = date.getDate();

  return month + ' ' + day;
};

router.get('/', (req, res) => {
  const trips = store.getTrips();
  let resources = trips.map(tripMapper);

  let refactoredTrips = [];

  resources = resources.forEach((trip) => {
    const year = trip.start.getFullYear();
    let month = trip.start.getMonth();
    month = monthNames[month];

    const isSectionAvailable = refactoredTrips.find(
      (s) => s.year === year && s.month === month
    );

    if (isSectionAvailable) {
      refactoredTrips.forEach((s) => {
        if (s.year === year && s.month === month) {
          s.data.push(trip);
        }
      });
    } else {
      refactoredTrips.push({ year, month, data: [trip] });
    }
  });

  res.send(refactoredTrips);
});

router.post('/', (req, res) => {
  const listing = {
    title: req.body.title,
    start: new Date(req.body.start),
    end: new Date(req.body.end),
    startString: getDateString(req.body.start),
    endString: getDateString(req.body.end),
    image: {
      fileName: 'chile',
    },
    items: [],
  };

  store.addTrip(listing);

  res.status(201).send(listing);
});

module.exports = router;
