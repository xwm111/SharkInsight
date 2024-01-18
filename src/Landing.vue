<template>
  <div class="update-list">
    <van-nav-bar title="APP更新内容" />
    <div class="enter-app-button">
      <van-button type="primary" round block to="/records">进入App</van-button>
    </div>
    <van-list>
      <van-cell v-for="(item, index) in updates" :key="index" :title="item.title" :label="item.date" />
    </van-list>
  </div>
</template>

<script>
import { ref } from 'vue';
import { NavBar, List, Cell,Button } from 'vant';

export default {
  name: 'UpdateList',
  components: {
    'van-nav-bar': NavBar,
    'van-list': List,
    'van-cell': Cell,
    'van-button': Button
  },
  setup() {
    const updates = ref([
      // 假设这是从API获取的更新内容
      { title: '1:增加手牌收藏', date: '2024-01-01' },
      { title: '2:数据只保存在本地，可以随时销毁', date: '2024-01-02' },
      // ...更多更新内容
    ]);

    return {
      updates,
    };
  },
};
</script>

<style>
/* 在这里添加你的CSS样式 */
.enter-app-button {
  display: flex;
  justify-content: center;
  margin: 16px 0;
}
.van-button {
  width: 60%; /* 设置按钮宽度为60% */
}
</style>
