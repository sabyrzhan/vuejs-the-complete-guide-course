<template>
  <header>
    <div>
      <h2><router-link to="/" active-class="home-active">Find a coach</router-link></h2>
      <section>
        <router-link to="/">All Coaches</router-link>
        <router-link to="/requests">Requests</router-link>
      </section>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: darkblue;
  height: 10vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  color: white;
}

a {
  text-decoration: none;
}

h2 a {
  color: white;
}

div {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

a {
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  color: pink;
}

section {
  display: flex;
}

section a:hover {
  border: 1px solid pink;
}

section a:active, a.router-link-active {
  border: 1px solid pink;
  background-color: blue;
}
</style>