
<template>
  <!-- <div class="parent">
    <div class="child"></div>
  </div>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header -->
  <!-- <scroll-view></scroll-view>
  <RouterView /> -->
  
  <router-view v-slot="{ Component }">
      <!-- 缓存标记为 keepAlive 的路由组件 -->
      <keep-alive>
        <component v-if="$route.meta.keepAlive" :is="Component" />
      </keep-alive>
      <!-- 不缓存的路由组件 -->
      <component v-if="!$route.meta.keepAlive" :is="Component" />
    </router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import scrollView from './views/scrollView.vue';
 
</script>
<style scoped>

.parent {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: lightgray;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  width: 100px;
  height: 100px;
  background-color: lightblue;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
