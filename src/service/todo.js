import request from '@/helper/request';

export default {
  list: () => request.get('/todo-list'),
};

