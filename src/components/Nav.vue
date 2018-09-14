<template>
    <div class="header">
      <div class="nav">
        <img src="@/assets/img/icon/coffee.svg" alt="图片加载失败" class="icon">
        <div class="info">
          <p class="gap">{{profile.nickName || '匿名用户'}}</p>
          <p class="logout" @click="logout">退出登录</p>
        </div>

      </div>
    </div>
</template>

<script>
import userService from '@/service/user';

export default {
  name: 'nav-header',
  data() {
    return {
      profile: {},
    };
  },
  mounted() {
    userService.profile().then((result) => {
      if (result.success) {
        this.profile = result.data;
      }
    });
  },
  methods: {
    logout() {
      userService.logout().then((result) => {
        console.log('result', result);
        if (result.success) {
          window.location.href = '/';
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.header {
  height: 48px;
  top: 0;
  position: fixed;
  z-index: 200;
  width: 100%;
  border-bottom: solid 1px #ca2100;
  background-color: #db4c3f;
  transition: height 200ms ease-in;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.nav {
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  height: 48px;
  color: #fff;
}
.icon {
  width: 24px;
}
.info {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}
.gap {
  margin-right: 16px;
}
.logout {
  cursor: pointer;
}
</style>
