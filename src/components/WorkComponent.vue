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
                        <div class="card-item" >
                            <div class="card shadow-sm">
                                
                                <img class="rounded img-fluid" :src="work.image"  alt="">
                                <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                                <div class="card-body">
                                    <p class="card-text"><strong>{{ work.name }}</strong></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="my-1">
                                            <template v-if="work.web_url">
                                                <a :href="work.web_url" target="_blank">
                                                    <button type="button" class="btn me-1 btn-sm btn-outline-secondary web_url">View</button>
                                                </a>
                                            </template>
                                            <template v-if="work.web_application">
                                                <div class="btn btn-sm btn-danger web_application">{{ work.web_application }}</div>
                                            </template>
                                        </div>
                                        
                                        <small class="text-muted publish_date d-none">{{work.publish_date}}</small>
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
import DmciImage from '@/assets/works/dmci.jpg';
import DolkusImage from '@/assets/works/dolkus1.jpg';
import FilInvestImage from '@/assets/works/fil-invest.jpg';
import HakkundaiImage from '@/assets/works/hakkundai.jpg';
import OhmylensiImage from '@/assets/works/ohmylens.jpg';
import SensorImage from '@/assets/works/sensor-monitor.jpg';
import TamImage from '@/assets/works/tam-inter-office.jpg';
import UdonImage from '@/assets/works/udon-imai.jpg';
import VivaImage from '@/assets/works/viva.jpg';
import BmcImage from '@/assets/works/bmc.jpg';
import LhrImage from '@/assets/works/lhr.jpg';
import GiftInformationSystemImage from '@/assets/works/gift-information-system.jpg';
import WeddingPicScanMeImage from '@/assets/works/wedding-pic-scan-me.jpg';
import KokorotalkMeImage from '@/assets/works/kokoro-talk.jpg';

import BgImage from '@/assets/img/bg.jpg';


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
                this.recentWork = [
                    {
                        id: 1,
                        name: 'DOLKUS',
                        web_application: 'WORDPRESS',
                        publish_date: '2027-12-01',
                        web_url: 'http://dolkus.com/blog/',
                        image: DolkusImage,
                    },
                    {
                        id: 2,
                        name: 'HAKKUNDAI',
                        web_application: '.Net',
                        publish_date: '2025-01-15',
                        web_url: 'https://hakuundai.net/',
                        image: HakkundaiImage,
                    },
                    {
                        id: 3,
                        name: 'D IMAI',
                        web_application: 'WORDPRESS',
                        publish_date: '2025-03-10',
                        web_url: 'https://en.d-imai.com/',
                        image: UdonImage,
                    },
                    {
                        id: 4,
                        name: 'KOKORO TALK',
                        web_application: 'WORDPRESS',
                        publish_date: '2025-03-10',
                        web_url: 'https://kokoro-talk.com/',
                        image: KokorotalkMeImage,
                    },
                    {
                        id: 5,
                        name: 'FILINVEST',
                        web_application: 'VUE JS AND LARAVEL',
                        publish_date: '2025-03-10',
                        web_url: 'https://filinvest.com/',
                        image: FilInvestImage,
                    },
                    {
                        id: 17,
                        name: 'Viva',
                        web_application: 'VUE JS AND LARAVEL',
                        publish_date: '2025-03-10',
                        web_url: 'https://vivaondemand.com.ph/',
                        image: VivaImage,
                    },
                    {
                        id: 6,
                        name: 'DMCI HOLDING',
                        web_application: 'OCTOBERCMS',
                        publish_date: '2025-03-10',
                        web_url: 'https://staging.dmciholdings.com/',
                        image: DmciImage,
                    },
                    {
                        id: 7,
                        name: 'LABOUR HIRE RECRUITMENT (LHR AUSTRALIA)',
                        web_application: 'WORDPRESS',
                        publish_date: '2025-03-10',
                        web_url: 'https://labourhireandrecruitment.com.au/',
                        image: LhrImage,
                    },
                    {
                        id: 8,
                        name: 'OHMYLENS',
                        web_application: 'WORDPRESS',
                        publish_date: '2025-03-10',
                        web_url: 'https://ohmylens.com/',
                        image: OhmylensiImage,
                    },
                    {
                        id: 9,
                        name: 'ROUNDUP REALTY CEBU',
                        web_application: 'WORDPRESS',
                        publish_date: '2025-03-10',
                        web_url: 'https://rurcebu.com/',
                        image: BgImage,
                    },
                    {
                        id: 10,
                        name: 'Tam(Customer Relationship Management for Office Manufacturing)',
                        web_application: 'REACT JS/TS',
                        publish_date: '2025-03-10',
                        web_url: 'https://tam-development.web.app/login',
                        image: TamImage,
                    },
                    {
                        id: 12,
                        name: 'Fortune Telling Services',
                        web_application: 'CAKE PHP',
                        publish_date: '2025-03-10',
                        web_url: 'https://www.elsa-online.net/',
                        image: BgImage,
                    },
                    {
                        id: 13,
                        name: 'Gift information System',
                        web_application: 'Kotlin Spring Boot & REACT TS',
                        publish_date: '2025-03-10',
                        web_url: 'https://site4.ec-cube.net/admin/login',
                        image: GiftInformationSystemImage,
                    },
                    {
                        id: 14,
                        name: 'Senior Citizen Sensor Monitor and Last Will and Instructions',
                        web_application: 'Kotlin Spring Boot & REACT TS',
                        publish_date: '2025-03-10',
                        web_url: 'https://ora.seizen-seiri.net/login/input',
                        image: SensorImage,
                    },
                    {
                        id: 15,
                        name: 'PWP(Photo Wedding Portal)',
                        web_application: 'Kotlin Spring Boot & REACT TS',
                        publish_date: '2025-03-10',
                        web_url: 'https://yutaogawa.com/locophy/publish/',
                        image: BgImage,
                    },
                    {
                        id: 16,
                        name: 'BNC',
                        web_application: 'Kotlin Spring Boot & REACT TS',
                        publish_date: '2025-03-10',
                        web_url: 'https://bnc-development-bbfbe.web.app/',
                        image: BmcImage,
                    },
                    {
                        id: 17,
                        name: 'WEDDING PIC SCAN ME',
                        web_application: 'Vue JS & Firebase',
                        publish_date: '2025-03-10',
                        web_url: 'https://wedding-pic-scan-me.netlify.app/',
                        image: WeddingPicScanMeImage,
                    }
                ];
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