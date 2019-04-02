<template>
    <div id="body">
        <input v-model="title" placeholder="タイトル"></textarea></br>
        <textarea v-model="text" placeholder="今日の釣報を投稿しましょう！"></textarea></br>
        <button @click="post(title,text)">投稿する</button>
    </div>
</template>

<script>
import Axios from '../lib/axios.js';
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    post(title, text) {
      Axios.post('/graphql',
        {
          query: `
              mutation {
                createDiary(title: "${title}", text: "${text}", name: "gem", tags: ["aa","sss"]) {
                  success
                  errors
                }
              }
          `
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log('ERROR!! occurred in Backend.')
          console.log(errr)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  #body {
    flex-grow: 2;
    height: 100%;
    .card {
      font-size: 16px;
      background: rgba(30, 30, 30, 0.3);
      margin: 10px;
      padding: 5px;
      box-shadow: 2px 2px 2px 2px rgba(73, 73, 73, 0.6);
      transition: 0.5s;
      &:hover {
        background: rgba(30, 30, 30, 0.7);
        transition: 0.5s;
      }
    }
  }
</style>
