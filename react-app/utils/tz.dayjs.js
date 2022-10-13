import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
// const timezone = require('dayjs/plugin/timezone')
// const utc = require('dayjs/plugin/utc'); dayjs.extend(utc) dayjs.extend(timezone)

export default dayjs;
