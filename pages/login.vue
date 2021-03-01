<template>
  <div class="flex h-screen items-center justify-center">
    <form ref="loginform" @submit.prevent="login()" class="w-1/4 mx-auto p-4">
      <h1 class="font-semibold mb-2 text-xl">
        Login
      </h1>
      <div class="mb-4">
        <label for="email" class="block mb-1 text-sm">Email or Phone</label>
        <input
          type="text"
          name="username"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-1 text-sm">Password</label>
        <input
          type="password"
          name="password"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',

  data() {
    return {
      error: {},
    };
  },

  computed: {
    user(){
      return this.$auth.user
    },

    isLoggedin(){
      return this.$auth.loggedIn
    },

  },

  mounted() {
    // Before loading login page, obtain csrf cookie from the server.

  },
  methods: {
    async login() {
      this.error = {};
      axios.defaults.withCredentials = true;
      let sanctumRes = await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      console.log(sanctumRes, 'sanctumRes');
      try {
        // Prepare form data
        const formData = new FormData(this.$refs.loginform);

        // Pass form data to `loginWith` function
        let user = await this.$auth.loginWith('local', { data: formData });

        this.$auth.setUser(user);

        console.log(this.$auth.user, 'aaaaaaaaa');

        console.log(this.$auth.fetchUser(), 'auth------------');

        // Redirect user after login
        //await this.$router.push('/');

      } catch (err) {
        this.error = err;
        // do something with error
      }
    },
  },
};
</script>
