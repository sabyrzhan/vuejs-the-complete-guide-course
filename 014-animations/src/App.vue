<!--<template>-->
<!--  <div class="container">-->
<!--    <users-list></users-list>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <div class="block" :class="{animate: doAnimate}"></div>-->
<!--    <button @click="animate">Animate</button>-->
<!--  </div>-->
<!--  <base-modal @close="hideDialog" :open="dialogIsVisible">-->
<!--    <p>This is a test dialog!</p>-->
<!--    <button @click="hideDialog">Close it!</button>-->
<!--  </base-modal>-->
<!--  <div class="container">-->
<!--    <transition name="show-users" mode="out-in">-->
<!--      <button @click="toggleShowUsers" v-if="!areUsesVisible">Show users</button>-->
<!--      <button @click="toggleShowUsers" v-else>Hide users</button>-->
<!--    </transition>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition :css="false"-->
<!--                @before-enter="handleParaBeforeEnter"-->
<!--                @enter="handleParaEnter"-->
<!--                @after-enter="handleParaEnterAfter"-->
<!--                @before-leave="handleParaBeforeLeave"-->
<!--                @leave="handleParaLeave"-->
<!--                @after-leave="handleParaLeaveAfter"-->
<!--                @enter-cancelled="handleParaEnterCancelled"-->
<!--                @leave-cancelled="handleParaLeaveCancelled"-->
<!--    >-->
<!--      <p v-if="isParaVisible">This is the paragraph</p>-->
<!--    </transition>-->
<!--    <button @click="toggleParagraph">Click</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <button @click="showDialog">Show Dialog</button>-->
<!--  </div>-->
<!--</template>  -->

<template>
  <router-view v-slot="routerSlot">
    <transition name="router" mode="out-in">
      <component :is="routerSlot.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from '@/components/UsersList.vue';

export default {
  // components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      doAnimate: false,
      isParaVisible: false,
      areUsesVisible: false,
      enterInterval: false,
      leaveInterval: false
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animate() {
      this.doAnimate = true;
    },
    toggleParagraph() {
      this.isParaVisible = !this.isParaVisible;
    },
    toggleShowUsers() {
      this.areUsesVisible = !this.areUsesVisible;
    },
    handleParaBeforeEnter(el) {
      console.log('enter before', el);
      el.style.opacity = 0;
    },
    _paraToggler(show, el, done) {
      let count = 0.0
      if (!show) {
        count = 1;
      }
      const interval = setInterval(() => {
        const factor = 0.1;
        if (show) {
          count += factor;
        } else {
          count -= factor;
        }

        el.style.opacity = count;
        if (count >= 1 || count <= 0) {
          clearInterval(interval)
          done()
        }
      }, 20)
      if (show) {
        this.enterInterval = interval;
      } else {
        this.leaveInterval = interval;
      }
    },
    handleParaEnterCancelled() {
      clearInterval(this.enterInterval)
    },
    handleParaLeaveCancelled() {
      clearInterval(this.leaveInterval)
    },
    handleParaEnter(el, done) {
      console.log('enter', el);
      this._paraToggler(true, el, done)
    },
    handleParaEnterAfter(el) {
      console.log('enter after', el);
      el.style.opacity = 1;
    },
    handleParaBeforeLeave(el) {
      console.log('leave before', el);
      el.style.opacity = 1;
    },
    handleParaLeave(el, done) {
      console.log('leave', el);
      this._paraToggler(false, el, done)
    },
    handleParaLeaveAfter(el) {
      console.log('leave after', el);
      el.style.opacity = 0;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 1s ease-in-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translateX(-150px);*/
  animation: slide-the-box 0.3s ease-in-out forwards;
}

.show-users-enter-from, .show-users-leave-to {
  opacity: 0
}

.show-users-enter-to, .show-users-leave-from {
  opacity: 1;
}

.show-users-enter-active, .show-users-leave-active{
  transition: opacity 0.3s ease;
}

.router-enter-from, .router-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.router-enter-to, .router-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.router-enter-active, .router-leave-active {
  transition: all 0.3s ease;
}

@keyframes slide-the-box {
  0% {
    transform: translateX(0px) scale(1);
  }

  50% {
    transform: translateX(-120px) scale(1.3)
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

</style>