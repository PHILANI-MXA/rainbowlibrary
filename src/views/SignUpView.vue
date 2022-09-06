<template>
<div id="signup" class="container min-vh-100">
<h2 class="fw-bold p-2">Register</h2>
<div class="col-md-6 m-auto">
    <form class="container border border-black h-100" @submit.prevent="register">
    <h4 class="text-decoration-underline fw-bold text-white">Sign Up</h4>
  <div class="form-group">
    <label for="firstName">Firstname</label>
    <input type="text" class="form-control pass m-auto" id="firstName" v-model="firstName">
  </div>
    <div class="form-group">
    <label for="lastName">lastName</label>
    <input type="text" class="form-control pass m-auto" id="lastName" v-model="lastName">
  </div>
    <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control pass m-auto" id="email" v-model="email">
  </div>
   <div class="form-group">
    <label for="password">password</label>
    <input type="password" class="form-control pass m-auto" id="password" v-model="password">
  </div>
  <div class="form-group">
    <label class="form-control" v-show="userMsg">{{userMsg}}</label>
  </div>
  <button class="btn btn-primary my-5" type="submit">Submit</button>
</form>
</div>
</div>
   
</template>

<script>

export default {

    data() {
    return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
  },
  computed: {
    userMsg() {
      return this.$store.state.userMsg
    }
  },
    methods: {
        register() {
        this.$store.dispatch('register', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
      });
        }
    }
    
}

</script>

<style scoped>
.form{
    background-color: #fefefe;
}
.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
}

.pass::placeholder{
    padding-left: 20px;
    font-size: 15px;
}

.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
    font-size: 20px;
    transition: 0.5s ease;
}

.pass:hover{
    background-color: black;
    color: white;
}
</style>