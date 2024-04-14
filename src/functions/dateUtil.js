import moment from 'moment';
import 'moment/dist/locale/es';
import 'moment/dist/locale/fr';
import 'moment/dist/locale/en-gb';

const format = 'DD MMM YYYY, hh:mm A';
const format2 = 'ddd DD MMM YYYY, hh:mm A Z';

const getLocale = () => {
  const localeStorage = localStorage.getItem('i18nextLng');
  if (localeStorage === 'en') return 'en-gb';
  if (localeStorage === 'es') return 'es';
  if (localeStorage === 'fr') return 'fr';
  return 'en-gb';
};

moment.locale(getLocale());

export function mapDate(object) {
  try {
    return moment(object).format(format);
  } catch (error) {
    console.error('mapDate: ', error.message);
  }
  return '';
}

export function mapDatefromUtcToLocalTime(object) {
  try {
    return moment(object).format(format2);
  } catch (error) {
    console.error('mapDate: ', error.message);
  }
  return '';
}

export const convertSecondsToTime = (value) => {
  const convertSeconds = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    const mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;
    return { days, hrs, mnts, seconds };
  };

  if (value) {
    const { days, hrs, mnts, seconds } = convertSeconds(value);
    let timeString = '';
    if (days > 0) {
      timeString += `${days} D, `;
    }
    if (days > 0 || hrs > 0) {
      timeString += `${hrs} H, `;
    }
    if (days > 0 || hrs > 0 || mnts > 0) {
      timeString += `${mnts} M, `;
    }
    timeString += `${Number.parseFloat(seconds).toFixed(2)} S`;
    return timeString;
  }
  return 0;
};
