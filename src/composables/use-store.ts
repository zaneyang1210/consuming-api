import { ref } from 'vue';
import { RandomUser } from '@/interface/random-user';

const staticData: RandomUser[] = [
  {
    itemId: 0,
    itemTitle: '',
    itemFirstName: '',
    itemLastName: '',
    itemGender: '',
    itemNationality: '',
    itemPhone: '',
    itemEmail: '',
    itemStreet: '',
    itemCity: '',
    itemState: '',
    itemCountry: '',
    itemCounty: '',
    itemCityNumber: 0,
    itemPostcode: '',
    itemImage: '',
    itemBirthdate: '',
    itemAge: 0,
    itemPassword: '',
    itemUserName: '',
  },
];

export default function useStorePost() {
  const users = ref<RandomUser[]>(staticData);
  return {
    users,
  };
}
