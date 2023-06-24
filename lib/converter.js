import moment from 'moment';

export const convertISOTime = (isoTime) => {
  const formattedTime = moment(isoTime).format('MMMM Do YYYY, h:mm:ss a');
  return formattedTime;
};