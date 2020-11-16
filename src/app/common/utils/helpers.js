const MONTHS = [
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

const DAYS = ['1st', '2nd', '3rd'];

export const formatDateForUploadPDF = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day > 3 ? day + 'th' : DAYS[day - 1]} ${
    MONTHS[month]
  }, ${year} at ${(hours - 12) % 10 < 10 ? '0' : ''}${
    hours - 12 > 0 ? hours - 12 : hours
  }:${minutes < 10 ? '0' : ''}${minutes} ${hours > 12 ? 'pm' : 'am'}`;
};
