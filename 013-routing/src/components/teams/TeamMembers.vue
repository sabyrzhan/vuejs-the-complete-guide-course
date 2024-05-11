<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to teams 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props: ['teamId'],
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    renderTeams() {
      const team = this.teams.find(team => team.id === this.teamId)
      this.teamName = team.name
      const teamMembers = []
      for (const userId of team.members) {
        const teamMember = this.users.find(user => user.id === userId)
        teamMembers.push(teamMember)
      }
      this.members = teamMembers
    }
  },
  created() {
    this.renderTeams()
  },
  watch: {
    teamId() {
      this.renderTeams()
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>