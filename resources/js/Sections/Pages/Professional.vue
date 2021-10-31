<template>
    <div class="contente">
        <!-- content -->
            <h2 >Professional Skills</h2>
        <section class="professional_page">
            <div class="row professional">
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[0] }}</span>
                    <Progress :percent="Progress[0]" status="active"  hide-info/>
                </div>
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[1] }}</span>
                    <Progress :percent="Progress[1]" status="active"  hide-info/>
                </div>
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[2] }}</span>
                    <Progress :percent="Progress[2]" status="active" hide-info/>
                </div>
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[3] }}</span>
                    <Progress :percent="Progress[3]" status="active" hide-info/>
                </div>
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[4] }}</span>
                    <Progress :percent="Progress[4]" status="active" hide-info/>
                </div>
                <div class="col-md-6">
                    <span class="span_label">- {{  labelProgress[5] }}</span>
                    <Progress :percent="Progress[5]" status="active" hide-info/>
                </div>
            </div>
        </section>

    </div>
</template>



<script>
export default {
    data() {
        return{
            Progress:[80, 90,57,45,76,87],
            labelProgress: ['HTML5&CSS3','HTML5&CSS3','HTML5&CSS3','HTML5&CSS3','HTML5&CSS3','HTML5&CSS3'],
        }
    },
}
</script>

<style scoped>
.span_label{
    color: #535252;
    margin-left: 20px;
}
.professional div{
    padding: 10px;
}
</style>
