export const today = new Date();
today.setHours(0, 0, 0, 0);
today.setDate(today.getDate() - today.getDay() + 3);

export const data = [
  {
    movieId: 1,
    ownerid:1,
    text:"Gynaecology",
    startDate: new Date(today.getTime() - 113.5 * 3600000),
    endDate: new Date(today.getTime() - 111.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 2,
    ownerid:2,
    text:"General Physician",
    startDate: new Date(today.getTime() - 110.5 * 3600000),
    endDate: new Date(today.getTime() - 108.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 3,
    ownerid:1,
    text:"Dermatology",
    startDate: new Date(today.getTime() - 106.5 * 3600000),
    endDate: new Date(today.getTime() - 104.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }, {
    movieId: 4,
    ownerid:1,
    text:"Psychiatry",
    startDate: new Date(today.getTime() - 104 * 3600000),
    endDate: new Date(today.getTime() - 102 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
    
  }, {
    movieId: 5,
    ownerid:2,
    text:"Pediatrics",
    startDate: new Date(today.getTime() - 101 * 3600000),
    endDate: new Date(today.getTime() - 99 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15'
  }
];

export const moviesData = [{
  id: 1,
  text: 'Gynaecology',
  imageAlt:'G',
  image: '/media/Services/gynaecology.svg',
  color: '#10E80D',

}, {
  id: 2,
  text: 'General Physician',
  imageAlt:'GP',
  image: '/media/Services/general_physician.svg',
  color: '#10E80D',
  
}, {
  id: 3,
  text: 'Dermatology',
  imageAlt:'D',
  image: '/media/Services/dermatology.svg',
  color: '#10E80D',
  
}, {
  id: 4,
  text: 'Psychiatry',
  imageAlt:'Psy',
  image: '/media/Services/psychiatry.svg',
  color: '#10E80D',
  
}, {
  id: 5,
  text: 'Pediatrics',
  imageAlt:'Pe',
  image: '/media/Services/pediatrics.svg',
  color: '#10E80D',
  
}];
export const owners = [{
  text : 'Gopi',
  id: 1,
  color: '#56ca85',
  avatar: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gym/coach-man.png',
  age: 27,
  discipline: 'Gynaecology, Dermatology, Psychiatry'
}, {
  text : 'Sandra Johnson',
  id: 2,
  color: '#ff9747',
  avatar: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gym/coach-woman.png',
  age: 24,
  discipline: 'Pediatrics, General Physician'
}];