<template>
  <section class="recent-work">
    <div class="album py-5 bg-transparent">
      <div class="section-title">
        <h2>RECENT WORK</h2>
        <p>Learn more my recent work</p>
      </div>

      <!-- Filter Buttons -->
      <div class="text-center mb-4">
        <button class="btn btn-sm btn-outline-primary me-2" @click="selectedFilter = ''">All</button>
        <button
          v-for="type in uniqueWebApps"
          :key="type"
          class="btn btn-sm btn-outline-success me-2"
          :class="{ active: selectedFilter === type }"
          @click="selectedFilter = type"
        >
          {{ type }}
        </button>
      </div>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div
            v-for="work in filteredRecentWork"
            :key="work.id"
            class="col"
          >
            <div class="card-item">
              <div class="card shadow-sm">
                <img class="rounded img-fluid" :src="work.image" alt="" />
                <div class="card-body">
                  <p class="card-text"><strong>{{ work.name }}</strong></p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="my-1">
                      <template v-if="work.web_url">
                        <a :href="work.web_url" target="_blank">
                          <button
                            type="button"
                            class="btn me-1 btn-sm btn-outline-secondary web_url"
                          >
                            View
                          </button>
                        </a>
                      </template>
                      <template v-if="work.web_application">
                        <div class="btn btn-sm btn-danger web_application">
                          {{ work.web_application }}
                        </div>
                      </template>
                    </div>
                    <small class="text-muted publish_date d-none">
                      {{ work.publish_date }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredRecentWork.length === 0" class="text-white text-center py-5">
            No projects found for "{{ selectedFilter }}"
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DolkusImage from '@/assets/works/dolkus1.jpg';
import HakkundaiImage from '@/assets/works/hakkundai.jpg';
import UdonImage from '@/assets/works/udon-imai.jpg';
import KokorotalkMeImage from '@/assets/works/kokoro-talk.jpg';
import FilInvestImage from '@/assets/works/fil-invest.jpg';
import VivaImage from '@/assets/works/viva.jpg';
import DmciImage from '@/assets/works/dmci.jpg';
import LhrImage from '@/assets/works/lhr.jpg';
import OhmylensiImage from '@/assets/works/ohmylens.jpg';
import TamImage from '@/assets/works/tam-inter-office.jpg';
import GiftInformationSystemImage from '@/assets/works/gift-information-system.jpg';
import SensorImage from '@/assets/works/sensor-monitor.jpg';
import BmcImage from '@/assets/works/bmc.jpg';
import WeddingPicScanMeImage from '@/assets/works/wedding-pic-scan-me.jpg';
import BgImage from '@/assets/img/bg.jpg';
import CWA from '@/assets/works/Aljune-Merry-Church-Wedding-1st-Anniversary.png';
import Tabulate from '@/assets/works/Tabulate.png';  
import WC from '@/assets/works/WC.png';  
import Inreal from '@/assets/works/Inreal.png';  
export default {
  name: 'WorkComponent',
  data() {
    return {
      selectedFilter: '',
      recentWork: []
    };
  },
  computed: {
    filteredRecentWork() {
      if (!this.selectedFilter) return this.recentWork;
      return this.recentWork.filter((item) =>
        item.web_application.toLowerCase().includes(this.selectedFilter.toLowerCase())
      );
    },
    uniqueWebApps() {
      const apps = this.recentWork.map((item) => item.web_application);
      return [...new Set(apps)].filter(Boolean);
    }
  },
  mounted() {
    this.fetchRecentWorkData();
  },
  methods: {
    fetchRecentWorkData() {
      this.recentWork = [
          {
          id: 11,
          name: 'Tam(Customer Relationship Management for Office Manufacturing)',
          web_application: 'Next JS & REACT TS & REACT NATIVE',
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
          web_application: 'Next JS & REACT TS & REACT NATIVE',
          publish_date: '2025-03-10',
          web_url: 'https://site4.ec-cube.net/admin/login',
          image: GiftInformationSystemImage,
        },
        {
          id: 14,
          name: 'Senior Citizen Sensor Monitor and Last Will and Instructions',
          web_application: 'Next JS & REACT TS',
          publish_date: '2025-03-10',
          web_url: 'https://ora.seizen-seiri.net/login/input',
          image: SensorImage,
        },
        {
          id: 15,
          name: 'PWP(Photo Wedding Portal)',
          web_application: 'Next JS & REACT TS & REACT NATIVE',
          publish_date: '2025-03-10',
          web_url: 'https://yutaogawa.com/locophy/publish/',
          image: BgImage,
        },
        {
          id: 16,
          name: 'BNC',
          web_application: 'Next JS & REACT TS',
          publish_date: '2025-03-10',
          web_url: 'https://bnc-development-bbfbe.web.app/',
          image: BmcImage,
        },
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
          id: 6,
          name: 'Viva',
          web_application: 'VUE JS AND LARAVEL',
          publish_date: '2025-03-10',
          web_url: 'https://vivaondemand.com.ph/',
          image: VivaImage,
        },
        {
          id: 7,
          name: 'DMCI HOLDING',
          web_application: 'OCTOBERCMS',
          publish_date: '2025-03-10',
          web_url: 'https://staging.dmciholdings.com/',
          image: DmciImage,
        },
        {
          id: 8,
          name: 'LABOUR HIRE RECRUITMENT (LHR AUSTRALIA)',
          web_application: 'WORDPRESS',
          publish_date: '2025-03-10',
          web_url: 'https://labourhireandrecruitment.com.au/',
          image: LhrImage,
        },
        {
          id: 9,
          name: 'OHMYLENS',
          web_application: 'WORDPRESS',
          publish_date: '2025-03-10',
          web_url: 'https://ohmylens.com/',
          image: OhmylensiImage,
        },
        {
          id: 10,
          name: 'ROUNDUP REALTY CEBU',
          web_application: 'WORDPRESS',
          publish_date: '2025-03-10',
          web_url: 'https://rurcebu.com/',
          image: BgImage,
        },
        {
          id: 17,
          name: 'WEDDING PIC SCAN ME',
          web_application: 'Vue JS & Bootstrap',
          publish_date: '2025-03-10',
          web_url: 'https://wedding-pic-scan-me.netlify.app/',
          image: WeddingPicScanMeImage,
        }, 
        {
          id: 18,
          name: 'CHURCH WEDDING 1st ANNIVERSARY',
          web_application: 'Vue JS & Bootstrap',
          publish_date: '2025-06-18',
          web_url: 'https://church-wedding-anniversary.netlify.app/',
          image: CWA,
        },
         {
          id: 19,
          name: 'PREMIUM DESIGN | TABULATE CRM',
          web_application: 'Laravel Php & Tailwinds & Rest API',
          publish_date: '2025-08-01',
          web_url: 'https://dev-tenant.tabulatecrm.com/',
          image: Tabulate,
        },
        {
          id: 20,
          name: 'WEALTH CLUB',
          web_application: 'WORDPRESS DESIGN & DEVELOPER',
          publish_date: '2025-09-10',
          web_url: 'https://wealth-club.org/',
          image: WC,
        },
        {
          id: 21,
          name: 'INREAL WEBSITE AND MOBILE APPLICATION',
          web_application: 'PHP Native & React Native & EXPO & Express Js & Prisma',
          publish_date: '2025-09-10',
          web_url: 'https://inreal-website.vercel.app/',
          image: Inreal,
        }
      ];
    }
  }
};
</script>

<style>
.recent-work .card-item,
.recent-work .card {
  height: 100% !important;
}
button.active {
  background-color: #18d26e;
  color: white;
}
</style>
