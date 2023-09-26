import http from 'k6/http';
import { check, sleep} from 'k6';

export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '30s', // This can be shorter or just a few iterations
};

export default () => {
  http.get('https://test-api.k6.io');
  sleep(1);
  http.get('https://test.k6.io/contacts.php');
  sleep(2);
  http.get('https://test.k6.io/news.php');
  sleep(3);
  http.get('https://test.k6.io/pi.php?decimals=3');
  sleep(4);
   
};
