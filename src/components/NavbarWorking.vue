<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-primary ">
  <div class="container-fluid">
    <a class="navbar-brand my-2 my-sm-0" href="#">RainbowLibrary<img src="https://i.postimg.cc/SsRMCdJ7/favicon-32x32.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item text-white">
         <router-link class="text-decoration-none text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/signup">SignUp</router-link>
        </li>
              <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/allbooks">Books</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input id="search" class="form-control me-sm-2" type="text" placeholder="Search" v-model="search">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view/>
</div>
</template>

<script>

</script>

<style>
.nav-item{
  display: flex;
  width: 100%;
  padding: 10px;
}
.navbar-brand{
  font-style: italic;
}

.btn{
  color: white;
  border-color: white;
}

nav {
position:fixed;
width: 100%;
top: 0;
background-color:rgb(221,221,136);
z-index:50;
}

.navbar-toggler-icon{
    background-color: black;
}
</style>