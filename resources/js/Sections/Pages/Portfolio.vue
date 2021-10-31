<template>
    <div class="portfolio">
        <!-- content -->
            <h2>Portfolio</h2>
        <div class="Portfolio">
            <Tabs value="name1" >
               <TabPane label="All" name="name1" icon="ios-apps">
                    <section  v-for="(all, i) in data" :key="i" class="section_scroll">
                        <div class="row">
                            <div class="col-md-4">
                                <img :src="all.front_one" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_tow" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                                <div class="col-md-4">
                                    <img :src="all.front_three" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_fore" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_five" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.back_one" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.back_tow" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.back_three" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.back_fore" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.back_five" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                        </div>
                    </section>
                </TabPane>
                <TabPane label="FrontEnd" name="name2" icon="ios-analytics-outline">
                    <section  v-for="(all, i) in data" :key="i" class="section_scroll">
                        <div class="row">
                            <div class="col-md-4">
                                <img :src="all.front_one" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_tow" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_three" alt="" class="w-100 p-2 img_1" >
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_fore" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                            <div class="col-md-4">
                                <img :src="all.front_five" alt="" class="w-100 p-2 img_1">
                                <Hover />
                            </div>
                        </div>
                    </section>
                </TabPane>
                <TabPane label="BackEnd" name="name3" icon="md-albums">
                    <section  v-for="(all, i) in data" :key="i" class="section_scroll">
                            <div class="row">
                                <div class="col-md-4">
                                    <img :src="all.back_one" alt="" class="w-100 p-2 img_1">
                                    <Hover />
                                </div>
                                <div class="col-md-4">
                                    <img :src="all.back_tow" alt="" class="w-100 p-2 img_1">
                                    <Hover />
                                </div>
                                <div class="col-md-4">
                                    <img :src="all.back_three" alt="" class="w-100 p-2 img_1">
                                    <Hover />
                                </div>
                                <div class="col-md-4">
                                    <img :src="all.back_fore" alt="" class="w-100 p-2 img_1">
                                    <Hover />
                                </div>
                                <div class="col-md-4">
                                    <img :src="all.back_five" alt="" class="w-100 p-2 img_1">
                                    <Hover />
                                </div>
                            </div>
                        </section>
                </TabPane>
            </Tabs>
        </div>

    </div>
</template>



<script>
import Hover from '../../components/text-Hover2.vue'
export default {
    data() {
        return{
            data:[
                {
                    front_one:'/images/slider-1.jpg',
                    front_tow:'/images/slider-1.jpg',
                    front_three:'/images/slider-1.jpg',
                    front_fore:'/images/slider-1.jpg',
                    front_five:'/images/slider-1.jpg',

                    back_one:'/images/slider-2.jpg',
                    back_tow:'/images/slider-2.jpg',
                    back_three:'/images/slider-2.jpg',
                    back_fore:'/images/slider-2.jpg',
                    back_five:'/images/slider-2.jpg'
                },
            ]
        }
    },
    methods:{
        //
    },
    created(){
        //
    },
    watch:{
        //
    },
    components:{
        Hover
    }
}
</script>
