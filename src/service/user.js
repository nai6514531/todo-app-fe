import request from '@/helper/request';

export default {
  login: data => request.post('/login', data),
  profile: () => request.get('/profile'),
  logout: () => request.post('/logout'),
};

