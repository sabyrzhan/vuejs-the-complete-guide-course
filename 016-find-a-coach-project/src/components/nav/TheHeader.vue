<template>
  <header>
    <div>
      <h2>Find a coach</h2>
      <section>
        <button>All Coaches</button>
        <button>Requests</button>
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

div {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: transparent;
  border: 1px solid pink;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  color: pink;
}
</style>