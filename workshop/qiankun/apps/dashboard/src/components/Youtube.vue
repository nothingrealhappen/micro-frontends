<template>
    <div class="dashboard-container">
        <iframe
            title="COVID-19 dashboard"
            src="https://www.youtube.com/embed/x6UiR9Rs6dA?autoplay=1"
            allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Youtube',
    props: {
        src: String,
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;
}

.dashboard-container iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
