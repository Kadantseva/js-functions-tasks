import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
          return emails.reduce((accum, email) => {
              const emailDomain = email.split('@')[1];
              if (freeEmailDomains.includes(emailDomain)) {
                  accum[emailDomain] = (accum[emailDomain] || 0) + 1;
              }
              return accum;
          }, {});
};

export default getFreeDomainsCount;
// END