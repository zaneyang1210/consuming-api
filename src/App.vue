<template>
  <nav  >
     <div><h1 class="logo">RandomUsers</h1></div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: rgb(225, 225, 225);
  border: 2px solid rgb(222, 222, 222);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5vw;
  text-decoration: none;
}

.logo {
  font-size: 3vw;
  color: #3a73ad;
}

button {
  background-color: rgb(222, 222, 222);
  border: solid 2px;
  border-radius: 30px;
  color: #21405f;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: Helvetica;
}

button:hover {
    transform: scale(1.04,1.04);
    color: #3a73ad;
}

</style>
