<template>
<header :class="{ 'header-top': currentIndex !== 0 }" id="header">
   <div class="container-fluid w-75 " :class="{ 'text-start': currentIndex === 0 }">
      <!-- <div class="menu my-3 d-flex justify-content-between align-items-center" v-if="currentIndex !== 0">
         <div>
            <h2 class="fw-bold text-white">{{homeStaticData.firstName}} {{homeStaticData.lastName}}</h2>
         </div>
         <div>
          <button
            v-for="(item, index) in menuItems"
            :key="index"
            @click="goToItem(index)"
            :class="{ 'active': index === currentIndex }"
          >
            {{ item }}
          </button>
         </div>
        
      </div> -->
       <div class="mobile menu menu-item my-3 d-flex justify-content-between align-items-center" v-if="currentIndex !== 0">
        <div>
          <h2 class="fw-bold text-white">{{homeStaticData.firstName}} {{homeStaticData.lastName}}</h2>
        </div>
        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button"  @click="toggleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">

              <ul class=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                <li class="nav-item"  v-for="(item, index) in menuItems"
            :key="index"
            @click="goToItem(index)"
            :class="{ ' active': index === currentIndex }">
                  {{ item }}
                </li>
               <!-- <li class="nav-item">
                <a href="/my-project" class="text-decoration-none fw-normal"> Test Project </a>
                  </li> -->
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    <div class="mobile menu menu-item" v-if="currentIndex === 0">
        <nav class=" navbar navbar-expand-lg navbar-light bg-light" :class="{ 'navbar-open': isNavbarOpen }">
          <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button"  @click="toggleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">

              <ul class=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                <li class="nav-item"  v-for="(item, index) in menuItems"
            :key="index"
            @click="goToItem(index)"
            :class="{ ' active': index === currentIndex }">
                  {{ item }}
                </li>
              <!-- <li class="nav-item">
                <a href="/my-project" class="text-decoration-none fw-normal"> Test Project </a>
                  </li> -->
              </ul>
            </div>
          </div>
        </nav>
      </div>
    <div class="slider-container">
      <transition name="slide" mode="out-in">
        <div :key="currentIndex" class="slider-item">
          <!-- Content for each section goes here -->
          <component v-if="currentIndex === 0" :is="components.HomeComponent" :firstName="homeStaticData.firstName" :lastName="homeStaticData.lastName" :title="homeStaticData.title" :msg="homeStaticData.introText" />
          
          <component v-else-if="currentIndex === 1" 
          :is="components.AboutComponent" 
          :bday="aboutStaticData.bday" 
          :website="aboutStaticData.website" 
          :phone="aboutStaticData.phone"  
          :city="aboutStaticData.city"  
          :age="aboutStaticData.age"  
          :degree="aboutStaticData.degree"  
          :email="aboutStaticData.email"  
          :description="aboutStaticData.description" 
          :objective="aboutStaticData.objective" 
          :msg="aboutStaticData.title"
          :freelance="aboutStaticData.freelance"/>
            <!-- Add your about section content here -->
          <component v-else-if="currentIndex === 2" 
          :is="components.ResumeComponent"
          />
          <component v-else-if="currentIndex === 3" :is="components.WorkComponent" :title="workStaticData.title" />
            
            <!-- Add your educational background section content here -->
          <component v-else-if="currentIndex === 4" 
          :is="components.ContactusComponent"
          :phone="contactStaticData.phone"  
          :city="contactStaticData.city"  
          :email="contactStaticData.email"  
          />
            
          
        </div>
      </transition>
    </div>
      <div class="desktop menu menu-item" v-if="currentIndex === 0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button"  @click="toggleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }">

              <ul class=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                <li class="nav-item"  v-for="(item, index) in menuItems"
            :key="index"
            @click="goToItem(index)"
            :class="{ ' active': index === currentIndex }">
                  {{ item }}
                </li>
              <!-- <li class="nav-item">
                <a href="/my-project" class="text-decoration-none fw-normal"> Test Project </a>
                  </li> -->
              </ul>
            </div>
          </div>
        </nav>
      </div>
  </div>
</header>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ResumeComponent from '@/components/ResumeComponent.vue'
import ContactusComponent from '@/components/ContactusComponent.vue'
import WorkComponent from '@/components/WorkComponent.vue'
import TodoApplicationComponent from '@/components/TodoApplicationComponent.vue'


export default {
  data() {
    return {
      currentIndex: 0,
      previousIndex: null, 
      menuItems: ["Home", "About", "Resume", "Work", "Contacts"],
      homeStaticData: {
        firstName: 'Aljune',
        lastName: 'F. Degamo',
        title: "Welcome to Our Home",
        introText: "I am a passionate graphic and full stack designer, building bridges between front-end finesse and back-end robustness."
      },
      aboutStaticData: {
        title: "Welcome to Our About",
        bday: "November 14, 1994",
        website: "",
        phone: "09065350079",
        city: "Purok 8, Cabayabsan, Cambanay , Danao City, Cebu 6004",
        age: 30,
        degree: "Bachelor of Science in Information Technology",
        email: "degamolajune14@gmail.com",
        description: "Hello! I'm a creative professional specializing in UI/UX design, graphic design, and website development. I bring ideas to life through visually compelling interfaces and seamless user experiences. Let's collaborate to create something extraordinary!",
        objective: "Seeking a challenging career with a progressive organization thatprovides an opportunity to capitalize my technical skills and abilities in the field of information technology (IT).",
        freelance: " Available Full Time And Part time",
        introText: "Explore and learn more about our wonderful home. We are excited to share our story with you."
      },
      contactStaticData: {
        city: "Purok 8, Cabayabsan, Cambanay , Danao City, Cebu 6004",
        email: "degamoaljune14@gmail.com",
        phone: "+63 992 787 0196",
      },
      workStaticData: {
        title: "Test",
      },
      components: {
        HomeComponent,
        AboutComponent,
        ResumeComponent,
        ContactusComponent,
        WorkComponent
      },
      isNavbarOpen: false
    };
  },
  methods: {
   goToItem(index) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index;
    }, toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  },
  mounted() {
        document.title = 'My Portfolio | Aljune Degamo';
    }
};
</script>

<style>

.menu .navbar-nav .nav-item {
  cursor: pointer;
}
.menu .navbar-nav .nav-item {
  position: relative; /* Needed for the absolute positioning of the pseudo-element */
}

.menu .navbar-nav .nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px; /* Border height */
  background-color: #35e788;
  transition: width 0.3s ease; /* Adjust the duration and easing as needed */
}

.menu .navbar-nav .nav-item:hover::after {
  width: 100%;
}

.menu .navbar-collapse {
  transition: 0.5s ease-out!important;
  overflow: hidden!important;
}

.menu .navbar-open .navbar-collapse {
  max-height: 500px!important; /* Adjust according to your content */
}

.menu {
  margin-top: 20px;
}

.menu button {
  margin-right: 10px;
  font-size: 16px;
  border: none;
  background: none;
  color: white;
}

.menu button.active {
  font-weight: bold;
  border-bottom: 3px solid #35e788;;
}

.menu-item {
  margin-top: 20px;
}
.menu-item .navbar {
  background-color: transparent!important;
}
.menu-item .navbar .container-fluid  {
  padding: 0!important;
}
.menu-item .nav-item, .menu-item .nav-item a{
  margin-right: 10px;
  font-size: 16px;
  border: none;
  background: none;
  color: white!important;;
}

.menu-item .nav-item.active {
  font-weight: bold;
  border-bottom: 3px solid #35e788;
}

.menu-item .navbar-toggler {
  background-color: #35e788;
}

.slider-container {
  overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.2ease; /* Adjust the transition duration and easing */
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave {
  transform: translateX(0);
}
body {
font-family: "Open Sans", sans-serif!important;
color: white;
}
 body::before {
        content: "";
        position: fixed;
        background: #040404 url('../assets/img/bg.jpg') top right no-repeat;
        background-size: cover;
        left: 0;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: -1;
}
#header {
    transition: ease-in-out 0.3s;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 997;
    overflow-y: auto;
}
#header.header-top {
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #000000a6;
    display: block;
}
#header .container {
  text-align: start;
}
#header.header-top .container {
    text-align: center;
}
#header h1, #header h1:hover {
    color: #fff;
    line-height: 1;
    display: inline-block;
}
#header h2 {
    font-size: 24px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
}
#header h2 span {
    color: #fff;
    border-bottom: 2px solid #18d26e;
    padding-bottom: 6px;
}
@media screen and (max-width: 2560px) {
 .desktop {
   display: block;
 }
 .mobile {
  display: none;
 }
}

@media screen and (max-width: 989px) {
 .desktop {
  display: none;
 }
 .mobile {
  position: absolute;
  width: 75%;
  top: 0;
  display: block;
 }
 #header.header-top .mobile{
    width: 100%;
    position: relative;
    flex-wrap: wrap;
 }
 #header.header-top .mobile .navbar {
    width: 100%;
    position: relative;
 }
 
 #header.header-top .mobile .navbar .navbar-nav {
    text-align: start;
 }
 #header.header-top .mobile .navbar .navbar-nav .nav-item, .mobile .navbar .navbar-nav .nav-item  {
    font-size: 20px;
 }
 .section-title p, .contact .info-box h3{
  font-size: 23px;
 }.resume .resume-title {
  font-size: 22px;
 }
}
</style>
