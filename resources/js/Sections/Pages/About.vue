<template>
    <div class="about_page">
        <!-- content -->
        <div class="row">

            <section class="inner_page_img col-md-5">
                 <img :src="data.src" alt="" class="img_cv">
               </section>

            <section class="inner_page_text col-md-7">
                  <h3> I'm  <span>{{ data.name }}</span></h3>
                  <h4>{{ data.title }}</h4>
                    <hr>
                  <div class="col"><strong> age </strong>   <span> {{ data.age}}</span></div>
                  <div class="col"><strong> address </strong> <span> {{ data.address}}</span></div>
                  <div class="col"><strong> E-mail </strong> <span> {{ data.email}}</span></div>
                  <div class="col"><strong> Phone </strong>  <span> {{ data.phone}}</span></div>
                  <div class="col"><strong> Experience </strong> <span> {{ data.Experience}}</span></div>
            </section>

            <section class="inner_page_icons col-md-12">
                <span>
                    <a href="#">
                        <Icon :type="data.icons.gitHub" />
                    </a>
                </span>
                <span>
                    <a href="#">
                         <Icon :type="data.icons.linkedIn" />
                    </a>
                </span>
                <span>
                    <a href="#">
                        <Icon :type="data.icons.whatsapp" />
                    </a>
                </span>
                <span>
                    <a href="#">
                        <Icon :type="data.icons.google" />
                    </a>
                </span>
                <span>
                    <a href="#">
                        <Icon :type="data.icons.contact" />
                    </a>
                </span>
             </section>
         </div>
    </div>
</template>






<script>
    export default {
        name:'AboutMe',
        data(){
            return {
                data:{
                    name: 'Obeyda Sarakbi',
                    title: 'Developer and Startup entrepreneur',
                    src: "/images/startuper-hover-1-299x347.jpg",
                    age:25,
                    address:'24058, Belgium, Brussels, Liutte 27, BE',
                    email: 'robertsmith@company.com',
                    phone: 2562548456,
                    Experience: '2Years',
                    icons:{
                        linkedIn: 'logo-linkedin',
                        gitHub: 'logo-github',
                        whatsapp: 'logo-whatsapp',
                        google: 'logo-google',
                        contact: 'md-contact'
                    }
                },
            }
        },
    }
</script>

