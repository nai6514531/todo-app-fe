<template>
  <div class="home">
    <router-link :to="{ name: 'about' }" >
    此团详情
    </router-link>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{todo.name}}</li>
    </ul>
    <Button @click="add">新增</Button>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from 'element-ui';
import request from '@/helper/request';

export default {
  name: 'home',
  data() {
    return {
      todos: [],
      dialogVisible: false,
    };
  },
  components: {
    HelloWorld,
    Button,
  },
  mounted() {
    request.get('/api/ping').then((result) => {
      console.log('result', result);
      if (result.success) {
        this.todos = result.data;
      }
    });
  },
  methods: {
    add() {
      console.log('add');
    },
  },
};
</script>
