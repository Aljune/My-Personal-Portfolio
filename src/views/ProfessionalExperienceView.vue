<template>
    <div class="border bg-dark" style="height: 100vh">
        <div class="row align-items-stretch" style="height: 100vh">
            <div class="col-2 border">
                  <nav class="nav flex-column">
                    <!-- <router-link to="/">Home</router-link> | -->
                    <router-link class="nav-link"  :to="{name: 'Admin'}">Admin</router-link> 
                    <router-link class="nav-link"   :to="{name: 'Education'}">Education</router-link>
                    <router-link class="nav-link"   :to="{name: 'ProfessionalExperience'}">Professional Experience</router-link>
                    <router-link class="nav-link"   :to="{name: 'Contactus'}">Contactus</router-link>
                </nav>
            </div>
            <div class="col-10 border bg-dark p-3">
                <div class="container-fluid">
                    <div class="card shadow p-5 text-start">
                        <h2 class="fw-bold">Professional Experience Add Form</h2>

                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Title</label>
                            <input type="text" ref="title" class="form-control form-control" id="formGroupExampleInput" placeholder="Title">
                        </div>
                       
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Company</label>
                            <input type="text" ref="company" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Company">
                        </div>

                         <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Year</label>
                            <input type="text" ref="year" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Year">
                        </div>

                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Description</label>
                            <textarea type="text" ref="description" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Description"></textarea>
                        </div>
                       
                        <button class="btn btn-primary" style="width: 100px"  @click="addNewEducation">addnew</button>
                    </div>
                    <div class="card p-5 my-5">
                        <h2>Educations</h2>
                        <table class="table">
                        <thead>
                            <tr>
                            <th class="t-text-left" scope="col">Title</th>
                            <th class="t-text-left" scope="col">Company</th>
                            <th scope="col">Year</th>
                            <th class="t-text-left" scope="col">Description</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="education in educations" :key="education.id">
                            <td class="t-text-left">{{ education.title }}</td>
                            <td class="t-text-left">{{ education.company }}</td>
                            <td>{{ education.year }}</td>
                            <td class="t-text-left">{{ limitDescription(education.description, 50) }}</td>
                            <td>
                               <div class="d-flex gap-2 align-items-center justify-content-center">
                                    <div>
                                        <a :href="'/admin/professional-experience/' + education.id">
                                         <button class="btn btn-danger"> edit </button>
                                         </a>
                                    </div>
                                    <div>
                                        <button class="btn btn-warning" @click="deleteEduc(education.id)"> delete </button>
                                    </div>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs, deleteDoc } from '@/firebase.js';
import { ref, watch, onMounted } from 'vue';
import {useRoute} from "vue-router";


export default { 
    data(){
        return {
            educations: [],
        }
    },
     mounted() {
      this.fetchEducationData();
    },
      methods: {
        limitDescription(description, limit) {
            if (description && description.length > limit) {
                return description.substring(0, limit) + '...';
            }
            return description;
        },
        async addNewEducation() {
            try {

                const q = collection(db, 'professional-experience'); 
                const querySnapshot = await getDocs(q);
                const proexperienceCount = querySnapshot.size + 1;
                console.log(proexperienceCount);

                 const title = this.$refs.title.value.trim();
                 const company = this.$refs.company.value.trim();
                 const year = this.$refs.year.value.trim();
                 const description = this.$refs.description.value.trim();

                  const newDocRef = await addDoc(collection(db, 'professional-experience'), {
                    title: title,
                    index: proexperienceCount,
                    company: company,
                    year: year,
                    description: description,
                    date: Date.now(),
                 });
                  console.log('Document added with ID:', newDocRef.id);
                 this.$refs.title.value = '';
                 this.$refs.company.value = '';
                 this.$refs.year.value = '';
                 this.$refs.description.value = '';
                 window.alert('professional experience saved successfully!');
                 this.fetchEducationData();
            } catch(e) {
                console.log(e)
            }
        },
        async fetchEducationData() {
            try {
                this.educations = [];
            const q = collection(db, 'professional-experience'); 
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const educationData = {
                    id: doc.id,
                    index: doc.data().index,
                    title: doc.data().title,
                    company: doc.data().company,
                    year: doc.data().year,
                    description: doc.data().description,
                };
                this.educations.push(educationData);
                
            });
            this.educations.sort((a, b) => b.index - a.index);
            }catch (e) {
                console.error('Error fetching user data:', e);
            }
      }, 
       deleteEduc: async (id) => {
         try {
                await deleteDoc(doc(db, 'professional-experience', id));
                window.alert('professional experience delete successfully!');
                 window.location.reload();
           } catch(e) {
             console.log(e)
           }
           
      }
   
    },

}
</script>

<style>
.t-text-left{
    text-align: left;
}
</style>