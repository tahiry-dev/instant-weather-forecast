const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const now = new Date();
const options = { weekday: 'long' };
let today = now.toLocaleDateString('en-EN', options);

today = today.charAt(0).toUpperCase() + today.slice(1);

const order1 = daysOfWeek.slice(daysOfWeek.indexOf(today));
const order2 = daysOfWeek.slice(0, daysOfWeek.indexOf(today));
/* eslint-disable import/prefer-default-export */
export const orderedDay = order1.concat(order2);
/* eslint-enable import/prefer-default-export */
