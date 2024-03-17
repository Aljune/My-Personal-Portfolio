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
                        <h2 class="fw-bold">Educational Add Form</h2>

                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Name</label>
                            <input type="text" ref="name" class="form-control form-control" id="formGroupExampleInput" placeholder="Name">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Web Application Name</label>
                            <input type="text" ref="web_application" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Web Application Name">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">URL</label>
                            <input type="text" ref="web_url" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Url">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Published Date</label>
                            <input type="text" ref="publish_date" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Published Date">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Description</label>
                            <textarea type="text" ref="description" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="Description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label-lg">Upload File</label>
                            <input type="file" ref="image" class="form-control form-control-lg" id="formGroupExampleInput2" placeholder="School">
                        </div>
                       
                        <button class="btn btn-primary" style="width: 100px"  @click="addNewRecentWork">addnew</button>
                    </div>
                    <div class="card p-5 my-5">
                        <h2>Recent Works</h2>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Web Application</th>
                            <th scope="col">Web Url</th>
                            <th scope="col">Published Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="work in recentWork" :key="work.id">
                            <td>{{ work.name }}</td>
                            <td>{{ work.web_application }}</td>
                            <td><a :href="work.web_url">{{work.web_url}}</a></td>
                            <td>{{ work.publish_date }}</td>
                            <td>{{ limitDescription(work.description, 50) }}</td>
                            <td class="text-centera"><img class="rounded img-fluid" :src="work.image" height="150" width="150" alt=""></td>
                            <td>
                               <div class="d-flex gap-2 align-items-center justify-content-center">
                                    <div>
                                        <a :href="'/admin/education/' + work.id">
                                         <button class="btn btn-danger"> edit </button>
                                         </a>
                                    </div>
                                    <div>
                                        <!-- <button class="btn btn-warning" @click="deleteEduc(education.id)"> delete </button> -->
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
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs, deleteDoc , Timestamp, storage, ref, uploadBytes, getDownloadURL} from '@/firebase.js';

export default {
    data(){
        return {
            recentWork: [],
        }
    },
    mounted() {
      this.fetchRecentWorkData();
    },
    methods: {
        limitDescription(description, limit) {
            if (description && description.length > limit) {
                return description.substring(0, limit) + '...';
            }
            return description;
        },
        async addNewRecentWork() {
            try {
                const q = collection(db, 'works'); 
                const querySnapshot = await getDocs(q);
                const recentWorkCount = querySnapshot.size + 1;
                
                 const name = this.$refs.name.value.trim();
                 const webApplication = this.$refs.web_application.value.trim();
                 const webUrl = this.$refs.web_url.value.trim();
                 const publisheDate = this.$refs.publish_date.value.trim();
                 const description = this.$refs.description.value.trim();
                 const file  = this.$refs.image.files[0];

                 const fileName = `${Date.now()}_${file.name}`;
                 const storageRef = ref(storage, `images/${fileName}`);
                 await uploadBytes(storageRef, file);
                 const imageUrl = await getDownloadURL(storageRef);
                
                  const newDocRef = await addDoc(collection(db, 'works'), {
                    index:recentWorkCount,
                    name: name,
                    web_application: webApplication,
                    web_url: webUrl,
                    publish_date: publisheDate,
                    description: description,
                    image:imageUrl,
                    date: Timestamp,
                 });
                  console.log('Document added with ID:', newDocRef.id);
                 this.$refs.name.value = '';
                 this.$refs.web_application.value = '';
                 this.$refs.web_url.value = '';
                 this.$refs.publish_date.value = '';
                 this.$refs.description.value = '';
                 this.$refs.image.value = '';
                 window.alert('Work saved successfully!');
                 this.fetchRecentWorkData();

            } catch(e) {
                console.log(e)
            }
        }, async fetchRecentWorkData() {
            try {
                this.recentWork = [];
            const q = collection(db, 'works'); 
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
               const dateTimestamp = doc.data().date;

                const recentWorkData = {
                    id: doc.id,
                    index: doc.data().index,
                    name: doc.data().name,
                    web_application: doc.data().web_application,
                    publish_date: doc.data().publish_date,
                    web_url: doc.data().web_url,
                    description: doc.data().description,
                    image: doc.data().image,
                    date: dateTimestamp
                };
                this.recentWork.push(recentWorkData);
                
            });
            this.recentWork.sort((a, b) => b.index - a.index);
            }catch (e) {
                console.error('Error fetching user data:', e);
            }
        }
    }
}
</script>
<style lang="">
    
</style>