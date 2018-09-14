<template>
  <div class="container">
    <NavHeader></NavHeader>
    <div class="main">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/Nav.vue';

export default {
  name: 'Frame',
  components: { NavHeader },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.container {
  background: #fafafa;
}
.main {
  width: 960px;
  min-height: 400px;
  background: #fff;
  margin: 48px auto 0 auto;
}
</style>
