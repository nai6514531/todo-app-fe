<template>
  <div class="home">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{todo.name}}</li>
    </ul>
    <Button @click="add">新增</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import todoService from '@/service/todo';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      dialogVisible: false,
      profile: {},
    };
  },
  components: {
  },
  mounted() {
    todoService.list().then((result) => {
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
