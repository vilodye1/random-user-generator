const app = Vue.createApp({
    data() {
        return {
          firstName: 'Trish',
          lastName: 'Bee',
          email: 'trish@gmail.com',
          gender: 'female',
          picture: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
})

app.mount('#app')