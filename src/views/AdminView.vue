<template>
    <div class="border bg-dark" style="height: 100vh">
        <div class="row align-items-stretch" style="height: 100vh">
            <div class="col-2 border">
                 <NavMenuComponent/>
            </div>
            <div class="col-10 border">
                <div class="container mt-5">
                    <div class="card py-5">
                        <h2>Weclome to my Personal Website Portfolio</h2>
                         <h1 class="fw-bold text-success">ALJUNE F. DEGAMO</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenuComponent from '@/components/navBar/NavMenuComponent.vue'

export default {
    components: {
        NavMenuComponent, 
  },
}
</script>

<style>
.nav-link {
  color: #fff;
}
</style>