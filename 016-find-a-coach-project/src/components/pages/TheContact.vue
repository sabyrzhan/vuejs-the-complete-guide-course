<template>
  <div>
    <the-base-card>
      <h2>{{ coach.name }}</h2>
      <p><strong>{{ coach.price }}</strong></p>
    </the-base-card>

    <the-base-card>
      <h2>Interested? Reach out now!</h2>
      <the-badge css-class="frontend">Contact</the-badge>
      <div class="container">
        <label for="email">Your E-Mail</label>
        <input type="text" id="email" />
        <label for="message">Message</label>
        <textarea id="message"></textarea>
        <div class="buttons">
          <the-button css-class="primary">Send message</the-button>
        </div>
      </div>
    </the-base-card>

    <the-base-card>
      <div class="badges">
        <the-badge v-for="tag in coach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
      </div>
    </the-base-card>

  </div>
</template>
<script>
import {mapState} from "vuex";
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheButton from "@/components/ui/TheButton.vue";
import TheBadge from "@/components/ui/TheBadge.vue";
export default {
  components: {TheBadge, TheButton, TheBaseCard},
  computed: {
    ...mapState('coach', {
      'coach': state => state.coaches[0]
    })
  }
}
</script>

<style scoped>
label, input, textarea {
  font-family: inherit;
  width: 100%
}

div.buttons {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
}

input {
  border: 1px solid #cccccc;
  height: 1.5rem;
}

label {
  display: block;
  margin: 7px 0;
}

textarea {
  height: 100px;
  border: 1px solid #cccccc;
}

div.badges {
  padding: 10px;
}
</style>