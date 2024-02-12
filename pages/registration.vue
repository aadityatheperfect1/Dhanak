<!-- components/Signup.vue -->
<template>
  <div class="signupPage grid justify-center items-center">
    <div class="mt-28 mb-20">
      <form @submit.prevent="signup" class="form w-screen">
        <p class="title">Register </p>
        <p class="message">Sign Up NOW! </p>
          <!-- <label>
            <input class="input bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 mt-1" type="text" placeholder="" required="">
            <span>Firstname</span>
          </label> -->
          <label class="font-semibold text-sm text-gray-400  block" for="firstname">First Name</label>
            <input required
                v-model="first_name"
                class="border rounded-lg px-3 py-2 mt-1 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                type="text" id="firstname" />
          <!-- <label>
            <input class="input bg-gray-700 focus:border-blue-500 focus:ring-2 border focus:ring-blue-500 px-3 py-2 mt-1" type="text" placeholder="" required="">
            <span>Lastname</span>
          </label> -->
          <label class="font-semibold text-sm text-gray-400  block" for="lastname">Last Name</label>
            <input required
                v-model="last_name"
                class="border rounded-lg px-3 py-2 mt-1  text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                type="text" id="lastname" />
        

        <!-- <label>
          <input class="input bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 mt-1" type="email" placeholder="" required="">
          <span>Email</span>
        </label> -->
        <label class="font-semibold text-sm text-gray-400 block" for="login">E-mail</label>
        <input required
          v-model="email"
          class="border rounded-lg px-3 py-2 mt-1  text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type="email" id="login" />

        <!-- <label>
          <input class="input bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 mt-1" type="password" placeholder="" required="">
          <span>Password</span>
        </label> -->
        <label class="font-semibold text-sm text-gray-400  block" for="password">Password</label>
          <input required
              v-model="password"
              class="border rounded-lg px-3 py-2 mt-1  text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
              type="password" id="password" />
        <!-- <label>
          <input class="input bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 mt-1" type="password" placeholder="" required="">
          <span>Confirm password</span>
        </label> -->
        <label class="font-semibold text-sm text-gray-400  block" for="password">Confirm Password</label>
          <input required
              v-model="confirmpassword"
              class="border rounded-lg px-3 py-2 mt-1 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
              type="password" id="password" />
        <button class="submit">SIGN UP</button>
        <p class="signin">Already registered ? <NuxtLink to="/signin">Sign In</NuxtLink> </p>
      </form>
    </div>
  </div>
  <!-- <div class="body">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" v-model="password" required>

      <button type="submit">Signup</button>
    </form>
  </div> -->
</template>

<style scoped>
.signupPage {
  background-image: url(../assets/blob-haikei.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: black;
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #EC941C;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #EC941C;
}

.message, 
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline #c8790a;
}

.signin a {
  color: #EC941C;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #EC941C;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #EC941C;
}

.submit:hover {
  background-color: #c8790a;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
      first_name:'',
      last_name:'',
      confirmpassword:'',
      // csrf_token:'',
    };
  },
  // async mounted(){
  //   const response1 = await axios.get('https://backend.abhishekverma.me/api/csrf-token/', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   this.csrf_token = response1.data.csrf_token;
  // },
  methods: {
    async signup() {
  try {
    console.log(this.csrf_token);
    const response = axios.post('https://backend.abhishekverma.me/register/', {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
    }, {
      headers: {
        // "X-CSRFToken": this.csrf_token, 
        "content-type": "application/json" // Adjust this based on your server's CORS configuration
      },
    });
    console.log('Signup success:', response.data);
    // You can handle success here, such as redirecting to a login page
  } catch (error) {
    console.error('Signup failed:', error);
    // Handle signup failure, show an error message, etc.
  }
}
  },
};
</script>
