<template lang="">
   <section class="recent-work">
        <div class="album py-5 bg-transparent">
            <div class="section-title">
                <h2>RECENT WORK</h2>
                <p>Learn more my recent work</p>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div v-for="work in recentWork" :key="work.id" class="col">
                        <div class="card-item"  data-aos="fade-up" data-aos-offset="200"
                            :data-aos-delay="work.index * 50" data-aos-duration="2000" data-aos-easing="ease-in-out"
                            data-aos-mirror="true" data-aos-once="false" >
                            <div class="card shadow-sm">
                                <img class="rounded img-fluid" :src="work.image"  alt="">
                                <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                                <div class="card-body">
                                    <p class="card-text"><strong>{{ work.name }}</strong></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="my-1">
                                            <template v-if="work.web_url">
                                                <a :href="work.web_url">
                                                    <button type="button" class="btn me-1 btn-sm btn-outline-secondary">View</button>
                                                </a>
                                            </template>
                                            <template v-if="work.web_application">
                                                <div class="btn btn-sm btn-danger">{{ work.web_application }}</div>
                                            </template>
                                        </div>
                                        <small class="text-muted">{{work.publish_date}}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>
<script>
import { db, addDoc, collection, setDoc, doc, onSnapshot, orderBy, getDocs, deleteDoc , Timestamp, storage, ref, uploadBytes, getDownloadURL} from '@/firebase.js';

export default {
    name: 'WorkComponent',
    props: {
        title: String,
    },
    data(){
        return {
            recentWork: [],
        }
    },
    mounted() {
      this.fetchRecentWorkData();
    },
    methods: {
        async fetchRecentWorkData() {
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
<style>
    .recent-work .card-item ,.recent-work .card  {
        height: 100%!important;
    }
</style>