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
        <label for="email" :class="{invalid: !emailIsValid}">Your E-Mail</label>
        <input type="email" id="email" v-model="email" :class="{invalid: !emailIsValid}" @blur="validate" />
        <label for="message" :class="{invalid: !messageIsValid}">Message</label>
        <textarea id="message" v-model="message" :class="{invalid: !messageIsValid}" @blur="validate"></textarea>
        <div class="buttons">
          <the-button css-class="primary" @click="sendMessage">Send message</the-button>
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
import {mapActions, mapState} from "vuex";
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheButton from "@/components/ui/TheButton.vue";
import TheBadge from "@/components/ui/TheBadge.vue";
export default {
  components: {TheBadge, TheButton, TheBaseCard},
  data() {
    return {
      email: '',
      message: '',
      emailIsValid: true,
      messageIsValid: true
    }
  },
  computed: {
    ...mapState('coach', {
      'coach': state => state.coaches[0]
    })
  },
  methods: {
    validate() {
      this.emailIsValid = this.email.trim() !== ''
      this.messageIsValid = this.message.trim() !== ''

      return this.emailIsValid && this.messageIsValid;
    },
    sendMessage() {
      const isValid = this.validate();
      if (!isValid) {
        return false;
      }
      this.sendRequest({id: new Date().getTime(), email: this.email, message: this.message})
      this.email = '';
      this.message = '';
    },
    ...mapActions('requests', ['sendRequest'])
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

label.invalid {
  color: red;
}

input.invalid, textarea.invalid {
  border: 1px solid red;
}

textarea {
  height: 100px;
  border: 1px solid #cccccc;
}

div.badges {
  padding: 10px;
}
</style>