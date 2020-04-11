import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

const num = 17;
// eslint-disable
if (num === 18) {
  // eslint-disable-next-line
    alert('Hi'); // eslint-disable-line no-alert
}
// eslint-enable
