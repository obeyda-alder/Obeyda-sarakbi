<template>
    <div>
        <!-- {{Notificat}} -->
    </div>
</template>





<script>

export default{
    data() {
        return {
            Notificat: 'the page not found',
        }
    },
    methods:{
        Nots(){
            const not = `${this.Notificat} ${'<br/>'} the path Name: ${this.$router.currentRoute.path}`;
            this.e(not);
        },
    },
    created(){
        this.Nots()
    }
}
</script>
