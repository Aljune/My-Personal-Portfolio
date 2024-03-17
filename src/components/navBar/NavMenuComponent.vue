<template >
    <nav class="nav flex-column">
        <!-- <router-link to="/">Home</router-link> | -->
        <router-link class="nav-link"  :to="{name: 'Admin'}">Admin</router-link> 
        <router-link class="nav-link"   :to="{name: 'Education'}">Education</router-link>
        <router-link class="nav-link"   :to="{name: 'ProfessionalExperience'}">Professional Experience</router-link>
        <router-link class="nav-link"   :to="{name: 'Contactus'}">Contactus</router-link>
    </nav>
</template>
<script>
export default {
    name: 'NavMenuComponent'
}
</script>
<style lang="">
    
</style>