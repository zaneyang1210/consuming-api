<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="forms">
    <UserDisplay v-for="user in users" v-bind:key="user.itemEmail" :user="user"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserDisplay from '@/components/user-display.vue';
import useGenerate from '@/composables/use-generate';
// import { RandomUser } from '@/interface/random-user';

export default defineComponent({
  name: 'HomeView',
  components: { UserDisplay },

  setup() {
    const { users } = useGenerate();
    return {
      users,
    };
  },
});

</script>

<style>
.forms {
  padding: 30px;
  border-radius: 15px;
  background-color: rgb(222, 222, 222);
  width: 70%;
  margin: auto;
  margin-top: 10px;
  /* cursor: pointer;
  transition: all 0.25s ease; */
}

/* .forms:hover {
    transform: scale(1.05,1.05);
} */

.post-forms {
  padding: 30px;
  border-radius: 15px;
  background-color: rgb(231, 229, 229);
  width: 50%;
  margin: auto;
  margin-top: 10px;
}

</style>
