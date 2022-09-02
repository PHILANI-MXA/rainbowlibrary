<template>

<!-- <div class="row  justify-content-between gy-2">
<div v-for="product in products" class="col-md-2 card d-flex" :key="product.id">
<div>
  <div class="card-header ">
  <h5 class="card-title mt-0">{{product.title}}</h5>
  <p class="card-text">{{product.category}}</p>
  </div>
  <div class="card-body">
  <img class="img-fluid image m-auto" :src="product.img" :alt="product.title">
    <p class="card-text">{{product.book_description}}</p>
  </div>
</div>
</div>
</div> -->

<div class="container h-100 p-5">
<div  v-for="product in products" :key="product.id" class="card mb-3 d-flex" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.img" class="img-fluid rounded-start" alt="title">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.book_description}}</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      search:'',
    }
  },
    computed: {
        products() {
            return this.$store.state.products
        }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart() {
      const item = {
        title: '',
        category: '',
        book_description: '',
        img: '',
      }
    }
  }
}


</script>

<style scoped>

.card{
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
color: black;
font-family: San-Francisco;
transition: 0.4s ease-out;
margin-bottom: 10px;
width: 30%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}

img{
  height: 40%px;
}

.productdesc{
    display: flex;
    height: 100%;
    flex-direction: column;
}
</style>
