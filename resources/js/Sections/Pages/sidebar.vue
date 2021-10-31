<template>
    <div class="content">
        <!-- content -->
                    <tasty-burger-button
                    ref="borger"
                    :type="buttonType"
                    :size="size"
                    :active="isActive"
                    v-on:toggle="onToggle"
                    />
        <div class="menu" v-if="clint">
            <div class="routers" >
                    <router-link to="#">Home</router-link>
                    <router-link to="#">About</router-link>
                    <router-link to="#">footer</router-link>
                    <router-link to="#">Portfolio</router-link>
                    <router-link to="#">contact</router-link>
            </div>
         </div>
    </div>
</template>



<script>
export default {
    data() {
        return{
                buttonType: 'elastic',
                size: 's',
                isActive: false,
                clint:false
        }
    },
    methods:{
         onToggle (active) {
             if(active == true){
                 this.clint = true
             }else{
                 this.clint = false
             }
        }
    }
}
</script>
