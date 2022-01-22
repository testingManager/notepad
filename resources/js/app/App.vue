<template>
    <v-app :dark="true">
        <v-alert
            v-show="GET_SHOW_ALERT"
            :type="GET_ALERT_TYPE"
            class="alert-component"
            dense
        >
            {{ GET_ALERT_TEXT }}
        </v-alert>
        <v-main>
            <header-component v-if="GET_STATUS_LOGIN" />
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent';
import { mapGetters } from 'vuex';

export default {
    name: "App.vue",
    components: { HeaderComponent },

    computed: {
        ...mapGetters(['GET_STATUS_LOGIN', 'GET_ALERT_TEXT', 'GET_ALERT_TYPE', 'GET_SHOW_ALERT'])
    }
}
</script>

<style scoped>
.alert-component {
    position: fixed!important;
    animation: show 1s ease;
    right:0;
    top: 100px;
    z-index: 2;
    opacity: 0.8;
}
@keyframes show {
    0%{}
    50%{ transform: translateX(-200px)}
    100%{ transform: translateX(0px)}
}
</style>
