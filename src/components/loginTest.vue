<template>
    <div id="login" class="container min-vh-100">
<h2 class="fw-bold p-2">Login</h2>
<div class="col-md-6 m-auto">
    <form class="container border border-black h-100" @submit.prevent="login">
    <h4 class="text-decoration-underline fw-bold text-white">Login</h4>
    <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control pass m-auto" id="email" v-model="email">
  </div>
   <div class="form-group">
    <label for="password">password</label>
    <input type="password" class="form-control pass m-auto" id="password" v-model="user_password">
  </div>
  <button class="btn btn-primary my-5" type="submit">Submit</button>
</form>
</div>
</div>
</template>

<script>

export default {
    name: '',
    components: {

    },
    data() {
        return {
            email: '',
            user_password: ''

        }
    },
    methods: {
        register() {
            this.$store.dispatch('login', {
            email: this.email,
            user_password: this.user_password
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