<template>
  <div class="wrapper">
    <div class="login">
      <Form ref="form" :model="form" :rules="rule" inline class="form">
        <FormItem prop="account" class="input">
          <Input
            v-model="form.account"
            prefix="ios-contact"
            placeholder="账户名" />
        </FormItem>
        <FormItem prop="password" class="input">
          <Input
            prefix="md-key"
            class="password"
            v-model="form.password"
            placeholder="密码" />
        </FormItem>
        <FormItem class="input">
          <Button @click="login('form')" type="success" class="button">登录</Button>
        </FormItem>
       </Form>
    </div>
    <vue-particles color="#dedede" class="particles">
    </vue-particles>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import VueParticles from 'vue-particles';
import service from '@/service/user';
import md5 from 'md5';

Vue.use(VueParticles);

export default {
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
      rule: {
        account: [
          { required: true, message: '请输入账户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur',
          },
        ],
      },
    };
  },
  components: {
  },
  mounted() {
  },
  methods: {
    login(name) {
      this.$refs[name].validate((valid) => {
        const vm = this;
        if (valid) {
          const data = {
            account: this.form.account,
            password: md5(this.form.password),
          };
          service.login(data).then((result) => {
            if (result.success) {
              vm.$Message.success('登录成功');
              vm.$router.push('/main/home');
            } else {
              vm.$Message.error(result.msg);
            }
          }).catch((err) => {
            vm.$Message.error(err.toString());
          });
        }
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
    padding: 32px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .form {
    width: 240px;
    display: flex;
    flex-direction: column;
  }
  .input {
    margin: 0;
  }
  .account {
    border: none;
    border-bottom: 1px solid rgb(227,227,227);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .password {
    margin-top: 24px;
  }
  .button {
    width: 100%;
    margin-top: 24px;
  }
</style>
