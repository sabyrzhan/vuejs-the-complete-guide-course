<template>
  <section>
    <header><h1>My Friends</h1></header>
    <div class="container">
      <new-friend
          @add-friend="handleAddFriend">
      </new-friend>
    </div>
    <ul>
      <friend-contact
          v-for="friend in friends"
          :friend="friend"
          :key="friend.id"
          @toggle-favorite="handleToggleFavorite"
          @delete-friend="handleDeleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "user1",
          name: "User1",
          phone: "+333333333",
          email: "user1@localhost.com",
          isFavorite: true
        },
        {
          id: "user2",
          name: "User2",
          phone: "+4444444444",
          email: "user2@localhost.com",
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    handleToggleFavorite(friendId) {
      const friend = this.friends.find(friend => friend.id === friendId)
      friend.isFavorite = !friend.isFavorite;
    },
    handleAddFriend(friend) {
      this.friends.unshift(friend);
    },
    handleDeleteFriend(friendId) {
      const index = this.friends.findIndex(friend => friend.id === friendId)
      this.friends.splice(index, 1);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>