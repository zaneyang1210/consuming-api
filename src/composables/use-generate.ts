/* eslint-disable linebreak-style */
import { ref } from 'vue';
import { RandomUser } from '@/interface/random-user';
import UseStore from '@/composables/use-store';
import UseApi from '@/composables/use-api';

export default function useGenerate() {
  const fetchLimit = ref(0);
  // let counter = 0;
  // let limit;
  const { users } = UseStore();
  const {
    random,
    allMale,
    allFemale,
  } = UseApi();

  function findIndex(id:number):number {
    let results = -1;
    users.value.forEach((item, index) => {
      if (item.itemId === id) {
        results = index;
      }
    });
    return results;
  }

  async function generateRandom(id: number): Promise<boolean> {
    // eslint-disable-next-line prefer-const
    const index = findIndex(id);
    const jsonFormat = await (await random).json();
    const user = jsonFormat.results[0];

    let result = false;
    try {
      const {
        phone,
        email,
        gender,
        nat,
      } = user;
      const {
        street,
        city,
        state,
        country,
        postcode,
      } = user.location;
      const { large: image } = user.picture;
      const { title, first, last } = user.name;
      const { name, number } = street;
      const { date, age } = user.dob;
      const { username, password } = user.login;
      const item = {
        itemId: id,
        itemTitle: title,
        itemFirstName: first,
        itemLastName: last,
        itemGender: gender,
        itemNationality: nat,
        itemPhone: phone,
        itemEmail: email,
        itemStreet: name,
        itemCity: city,
        itemState: state,
        itemCountry: country,
        itemCityNumber: number,
        itemPostcode: postcode,
        itemImage: image,
        itemBirthdate: date,
        itemAge: age,
        itemUserName: username,
        itemPassword: password,
      } as unknown as RandomUser;
      users.value.splice(index, 1);
      users.value.push(item);
      console.log(item);
      result = true;
      return result;
    } catch (u) {
      console.log('error');
      // eslint-disable-next-line no-alert
      alert('Error fetching data, try again');
      result = false;
      return result;
    }
  }

  async function generateMale(id: number): Promise<boolean> {
    const index = findIndex(id);
    let result = false;

    try {
      const jsonFormat = await (await allMale).json();//     // console.log(data);
      const user = jsonFormat.results[0];
      const {
        phone,
        email,
        gender,
        nat,
      } = user;
      const {
        street,
        city,
        state,
        country,
        postcode,
      } = user.location;
      const { large: image } = user.picture;
      const { title, first, last } = user.name;
      const { name, number } = street;
      const { date, age } = user.dob;
      const { username, password } = user.login;
      const item = {
        itemId: id,
        itemTitle: title,
        itemFirstName: first,
        itemLastName: last,
        itemGender: gender,
        itemNationality: nat,
        itemPhone: phone,
        itemEmail: email,
        itemStreet: name,
        itemCity: city,
        itemState: state,
        itemCountry: country,
        itemCityNumber: number,
        itemPostcode: postcode,
        itemImage: image,
        itemBirthdate: date,
        itemAge: age,
        itemUserName: username,
        itemPassword: password,
      } as unknown as RandomUser;
      users.value.splice(index, 1);
      console.log('here lies user');
      users.value.push(item);
      console.log(item);
      result = true;
      return result;
    } catch (u) {
      console.log('error');
      // eslint-disable-next-line no-alert
      alert('Error fetching data, try again');
      result = false;
      return result;
    }
  }

  async function generateFemale(id: number): Promise<boolean> {
    // eslint-disable-next-line prefer-const
    const index = findIndex(id);
    let result = false;

    try {
      const jsonFormat = await (await allFemale).json();//     // console.log(data);
      const user = jsonFormat.results[0];
      const {
        phone,
        email,
        gender,
        nat,
      } = user;
      const {
        street,
        city,
        state,
        country,
        postcode,
      } = user.location;
      const { large: image } = user.picture;
      const { title, first, last } = user.name;
      const { name, number } = street;
      const { date, age } = user.dob;
      const { username, password } = user.login;
      const item = {
        itemId: id,
        itemTitle: title,
        itemFirstName: first,
        itemLastName: last,
        itemGender: gender,
        itemNationality: nat,
        itemPhone: phone,
        itemEmail: email,
        itemStreet: name,
        itemCity: city,
        itemState: state,
        itemCountry: country,
        itemCityNumber: number,
        itemPostcode: postcode,
        itemImage: image,
        itemBirthdate: date,
        itemAge: age,
        itemUserName: username,
        itemPassword: password,
      } as unknown as RandomUser;
      users.value.splice(index, 1);
      console.log('here lies user');
      users.value.push(item);
      console.log(item);
      result = true;
      return result;
    } catch (u) {
      console.log('error');
      // eslint-disable-next-line no-alert
      alert('Error fetching data, try again');
      result = false;
      return result;
    }
  }

  return {
    generateRandom,
    generateMale,
    generateFemale,
    findIndex,
    users,
    fetchLimit,
  };
}
