<template>
    <div class="content">
        <!-- content -->
        <div class="Footer_oage">
            <div class="container">
                <section class="Icons">
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
                <div class="text_footer">
                    <p class="quat">Personal Prijects:</p>
                        <Button type="default" ghost size="large">Portfolio</Button>
                        <Button type="default" ghost size="large">Contact</Button>
                     <span>Obeyda sarakbi</span>
                    <p class="copyright">@copyright 2020-2021 <br/> All rights reserved.Power By the....</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
             data:{
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


<style>
.Footer_oage{
    overflow: hidden;
    background-color: #E74C3C;
    margin-top: 100px;
    text-align: center;
    display: flex;
    justify-content: space-between;
}
.Icons{
    margin: 30px 0;
}
.Icons span{
    padding: 10px;
}
.Icons span a{
    padding: 10px;
    text-decoration: none;
    color: #fff;
    border-radius: 50%;
}
.Icons span a:hover{
    background:rgba(51, 51, 51, 0.233);
}
.Icons span a i{
    font-size: 22px;
}
.Footer_oage .quat{
    font-size: 13px;
    color: rgba(51, 51, 51, 0.699);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.Footer_oage Button{
    margin: 15px 10px;
    padding: 0 15px;
}
.Footer_oage .text_footer span{
    display: block;
    text-transform: uppercase;
    color: rgba(245, 245, 245, 0.603);
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
 .Footer_oage .ivu-btn-ghost.ivu-btn-dashed:hover, .Footer_oage .ivu-btn-ghost.ivu-btn-default:hover{
   color: #fff !important;
    border-color: #fff !important;
}
.text_footer .ivu-btn:hover{
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px !important;
}
.text_footer .ivu-btn:focus{
    box-shadow: none !important;
}
.text_footer .copyright{
    color: #fff;
    margin-bottom: 5px;
}
</style>
