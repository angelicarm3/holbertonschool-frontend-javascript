/* eslint-disable */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((result) => {
    const resultBody = result[0].body;
    const resultfirstName = result[1].firstName;
    const resultlastName = result[1].lastName;

    console.log(`${resultBody} ${resultfirstName} ${resultlastName}`);
  }).catch((error) => {
    console.log('Signup system offline');
  });
}
