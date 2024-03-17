<template>
  <div>
    <div data-aos="fade-up" class="" data-aos-offset="200"
                            data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-mirror="true" data-aos-once="false" >
      <h1 class="display-4 fw-bold ">{{ firstName }} {{ lastName }}</h1>
      
      <h2 style="line-height: 2">I'm a passionate <span>graphic designer & full stack developer</span>, <br/>building bridges between front-end finesse and back-end robustness from Cebu</h2>
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    firstName: String,
    lastName: String,
    title: String,
    msg: String,
  }
}
</script>

<style>

</style>
