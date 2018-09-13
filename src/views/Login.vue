<template>
  <div class="wrapper">
    <div class="login">
      <input
        class="input account"
        v-model="account"
        placeholder="账户名">
      <input
        class="input password"
        v-model="password"
        placeholder="密码">
      <button @click="login" class="button">登录</button>
    </div>
    <vue-particles color="#dedede" class="particles">
    </vue-particles>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import VueParticles from 'vue-particles';
import request from '@/helper/request';
import md5 from 'md5';

Vue.use(VueParticles);

export default {
  name: 'login',
  data() {
    return {
      todos: [],
      dialogVisible: false,
      account: '',
      password: '',
    };
  },
  components: {
  },
  mounted() {
  },
  methods: {
    login() {
      const data = {
        account: this.account,
        password: md5(this.password),
      };
      request.post('/api/login', data).then((result) => {
        console.log('result', result);
        if (result.success) {
          this.$message({
            message: '登录成功',
            type: 'success',
          });
          this.$router.push('/home');
        }
      }, (err) => {
        console.log('err', err);
        this.$message({
          message: err.toString(),
          type: 'error',
        });
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/img/dota_bg_01.jpg")
  }
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .login {
    width: 320px;
    text-align: center;
    background-color: rgba(50,50,50,0.6);
    padding: 48px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .input {
    display: block;
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 4px 16px 4px 16px;
    box-sizing: border-box;
  }
  .account {
    border: none;
    border-bottom: 1px solid rgb(227,227,227);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .password {
    border: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .button {
    width: 100%;
    height: 38px;
    font-size: 13px;
    font-weight: 500;
    line-height: 38px;
    background-color: rgb(70,175,95);
    color: #fff;
    border-radius: 4px;
    margin-top: 16px;
  }
  .button:hover {
    background-color: rgba(87, 214, 118);
  }
  .input:focus {
    outline: none;
  }
</style>
