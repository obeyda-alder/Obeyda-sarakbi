import axios from "axios"
// import {mapGetters} from 'vuex'

export default {
    data() {
        return {

        }
    },
    methods: {
        // API
        async callapi(method, url , dataObj) {
            try{
                return await axios({
                          method: method,
                          url: url,
                          data: dataObj
                        })
            }catch (e) {
                return e.response
            }
        },


        // notifications BY iview ui
        i(desc, title="Hey"){
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s(desc, title="Great!"){
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w(desc, title="Oops!"){
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e(desc, title="Error"){
            this.$Notice.error({
                title: title,
                desc: desc,
            });
        },
        swr(desc="Something went wrong! Please try again.", title="Oops" ){
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
    },
    created(){
        this.$Notice.config({
            //top: 50,
            // duration: 3
        })
    },
}
