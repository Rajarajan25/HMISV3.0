export const today = new Date();
today.setHours(0, 0, 0, 0);
today.setDate(today.getDate() - today.getDay() + 3);

export const data = [
  {
    movieId: 1,
    text:"Gynaecology",
    startDate: new Date(today.getTime() - 113.5 * 3600000),
    endDate: new Date(today.getTime() - 111.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 2,
    text:"General Physician",
    startDate: new Date(today.getTime() - 110.5 * 3600000),
    endDate: new Date(today.getTime() - 108.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 3,
    text:"Dermatology",
    startDate: new Date(today.getTime() - 106.5 * 3600000),
    endDate: new Date(today.getTime() - 104.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 4,
    text:"Psychiatry",
    startDate: new Date(today.getTime() - 104 * 3600000),
    endDate: new Date(today.getTime() - 102 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
    
  }, {
    movieId: 5,
    text:"Pediatrics",
    startDate: new Date(today.getTime() - 101 * 3600000),
    endDate: new Date(today.getTime() - 99 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }
];

export const moviesData = [{
  id: 1,
  text: 'Gynaecology',
  image: 'https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg',
  color: '#10E80D',

}, {
  id: 2,
  text: 'General Physician',
  image: 'https://www.practo.com/consult/static/images/top-speciality-gp.svg',
  color: '#10E80D',
  
}, {
  id: 3,
  text: 'Dermatology',
  image: 'https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg',
  color: '#10E80D',
  
}, {
  id: 4,
  text: 'Psychiatry',
  image: 'https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg',
  color: '#10E80D',
  
}, {
  id: 5,
  text: 'Pediatrics',
  image: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg',
  color: '#10E80D',
  
}];
export const owners = [
  {
    text: 'Samantha Bright',
    id: 1,
    color: '#727bd2'
  }, {
    text: 'John Heart',
    id: 2,
    color: '#32c9ed'
  }, {
    text: 'Todd Hoffman',
    id: 3,
    color: '#2a7ee4'
  }, {
    text: 'Sandra Johnson',
    id: 4,
    color: '#7b49d3'
  }
];