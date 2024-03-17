<template>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
p {
  font-size: 1em!important;
}
.content ul li span {
    margin-left: 10px;
}
@media screen and (max-width: 425px) {
    #app{
      background: #0e0e0eb0!important;
    }
    #header h2{
      font-size: 18px!important;
    }
    .content h3 {
      font-size: 20px!important;
    }
    .content ul li{
      font-size: 14px!important;
    }
    .content ul li span {
      margin-left: 10px;
    }
    .navbar-nav .nav-item {
      font-size: 17px!important;
      text-transform: uppercase!important;
    }
    .menu .navbar-collapse {
      background: #95a59845;
        border-radius: 7px;
        margin-top: 5px;
        padding: 0 10px
    }
    .part-progress-bar h5{
      font-size: 16px!important;
    }
    .part-progress-bar .p-bar-2 {
      margin-top: 10px;
    }
    .recent-work .web_application, .recent-work .web_url, .recent-work .publish_date {
      font-size: 10px!important;
    }
}
@media screen and (max-width:390px) {
  #header h1, #header h1:hover{
    font-size: 27px!important;
  }
}
@media screen and (max-width:320px) {
  #header h1, #header h1:hover{
    font-size: 25px!important;
  }
}
</style>
