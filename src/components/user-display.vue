<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="user-box">
    <button @click="view = !view" class="more-button">Details</button>
    <div>
      <!-- eslint-disable-next-line vuejs-accessibility/alt-text -->
      <img v-bind:src="user.itemImage" class="image">
      <table class="user-table">
        <tr>
          <th>{{ user.itemFirstName }} {{ user.itemLastName }}</th>
        </tr>
        <tr>
          <td><small>{{ user.itemEmail }}</small></td>
        </tr>
        <tr>
          <td><small>{{ user.itemGender }}</small></td>
        </tr>
      </table>
    </div>
  </div>
  <div v-if="view"></div>
  <div v-else class="post-box">
    <div class="user-box">
      <table class="detail-table">
        <tr>
          <td>GENDER:</td>
          <td>{{ user.itemGender }} </td>
        </tr>
        <tr>
          <td>NATIONALITY:</td>
          <td> {{ user.itemNationality }}</td>
        </tr>
        <tr>
          <td>PHONE:</td>
          <td> {{ user.itemPhone }}</td>
        </tr>
        <tr>
          <td>LOCATION:</td>
          <td>
            {{ user.itemStreet }} {{ user.itemCounty }} {{ user.itemCity }}
            {{ user.itemState }} {{ user.itemCountry }} {{ user.itemPostcode }}
            {{ user.itemCityNumber }}
          </td>
        </tr>
        <tr>
          <td>DOB:</td>
          <td>{{ user.itemBirthdate }}</td>
        </tr>
        <tr>
          <td>AGE:</td>
          <td>{{ user.itemAge }}</td>
        </tr>
        <tr>
          <td>USERNAME:</td>
          <td>{{ user.itemUserName }}</td>
        </tr>
        <tr>
          <td>PASSWORD:</td>
          <td>{{ user.itemPassword }}</td>
        </tr>
      </table>
    </div>
  </div>
  <div>
    <button @click="getDataMale(user.itemId)">random male</button>
    <button @click="getDataFemale(user.itemId)">random female</button>
    <button @click="getData(user.itemId)">just random</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import useGenerate from '@/composables/use-generate';
import { RandomUser } from '@/interface/random-user';

export default defineComponent({
  name: 'UserDisplay',
  props: {
    user: {
      type: Object as PropType<RandomUser>,
      required: true,
    },
  },
  setup() {
    const showInput = ref(true);
    const view = ref(true);
    const { users } = useGenerate();
    const {
      generateRandom,
      generateMale,
      generateFemale,
      fetchLimit,
    } = useGenerate();

    async function getData(id: number) {
      const result = generateRandom(id);
      if (await result) {
        console.log('value generated');
        // console.log(users.value);
      } else {
        console.log('value not generated');
      }
    }

    async function getDataMale(id: number) {
      const result = generateMale(id);
      if (await result) {
        console.log('value generated');
        // console.log(users.value);
      } else {
        console.log('value not generated');
      }
    }

    async function getDataFemale(id: number) {
      const result = generateFemale(id);
      if (await result) {
        console.log('value generated');
        // console.log(users.value);
      } else {
        console.log('value not generated');
      }
    }

    return {
      getData,
      getDataMale,
      getDataFemale,
      users,
      view,
      showInput,
      fetchLimit,
    };
  },

});

</script>

<style>
.user-view {
  display: flex;
  flex-direction: inline;
  align-content: center;
  width: 70%;
  margin: center;
}

.image {
  border-radius: 20%;
  padding:5px;
}

.user-box {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 244);
  border-radius: 10px;
  margin-top: 5px;
  align-content: center;
}

.more-button {
  position: relative;
  left: 80%;
  bottom: 20px;
  width: 20%;
  align-content: center;
  border: none;
  background-color: rgb(255, 255, 244);
}

.detail-table {
  text-align: left;
  font-weight: bold;
  font-size: small;
}

.user-table {
  text-align: center;
  margin: auto;
}
</style>
