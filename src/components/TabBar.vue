<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="Records" icon="add-o" to="/records">记录</van-tabbar-item>
      <van-tabbar-item name="Analysis" icon="bar-chart-o"  to="/analysis">分析</van-tabbar-item>
      <van-tabbar-item name="Favorites" icon="shopping-cart-o" to="/favorites">收藏</van-tabbar-item>
      <van-tabbar-item name="Settings" icon="setting-o" to="/settings">设置</van-tabbar-item>
    </van-tabbar>
  </div> 
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'TabBar',
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>
