<template>
<div class="main">
    <!-- component img -->
        <sidebar />
   <vueper-slides
                ref="myVueperSlides"
                autoplay
                :arrows="false"
                :bullets="true"
                :pause-on-hover="pauseOnHover"
                @autoplay-pause="internalAutoPlaying = true"
                @autoplay-resume="internalAutoPlaying = true"
                    >
            <vueper-slide v-for="slide in slides"
                :key="slide.id"
                :title="slide.title"
                 />
        </vueper-slides>


      <div class="container">
      <!-- Other Components sections -->
            <About />
            <profession />
            <portfolio />

    </div>

        <Footer />
     <router-view />
</div>
</template>


<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import About from '../Sections/Pages/About.vue'
import Sidebar from '../Sections/Pages/sidebar.vue'
import profession from '../Sections/Pages/Professional.vue'
import portfolio from '../Sections/Pages/Portfolio.vue'
import Footer from '../Sections/Pages/Footer.vue'
export default {
    data() {
        return{
                pauseOnHover: true,
                autoPlaying: true,
                internalAutoPlaying: true,
                 slides: [
                    {
                        id: '1',
                        title: '<div><img  class="ig_style_1" src="/images/back.sd.jpg" alt=""></div>',
                    },
                    {
                        id: '2',
                        title: '<div><img  class="ig_style_2" src="/images/back.er.webp" alt=""></div>',
                    },
                    {
                        id: '3',
                        title: '<div><img class="ig_style_3" src="/images/back.sd.jpg" alt=""></div>',
                    },
                    {
                        id: '4',
                        title: '<div><img  class="ig_style_4" src="/images/back.er.webp" alt=""></div>',
                    },
                ],
        }
    },
    mounted(){
        console.log('now i am work this test');

    },
    components:{
        VueperSlides,
        VueperSlide,
        About,
        Sidebar,
        profession,
        portfolio,
        Footer
    },
    created(){
        //code..
    },

}
</script>
