<template>
  <div id="app">
    <div class="header">
      <h1 class="header-title">鲨视锐析</h1>
    </div>
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue';
import { onMounted } from 'vue';
import { dbInit,writeLastLogin } from './db.js';

export default {
  name: 'App',
  setup() {
    onMounted(async () => {
      try {
        const db = await dbInit();
        console.log('Database initialized');
        await writeLastLogin(db);
        console.log('Last login time has been updated.');
      } catch (error) {
        console.error('Failed to write last login time:', error);
      }
    });
  },
  components: {
    TabBar
  }
};
</script>

<style>
.header-title{
  text-align: center;
}
</style>
