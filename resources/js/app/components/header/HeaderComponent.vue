<template>
    <v-app-bar
        color="#333399"
    >
        <v-toolbar-title>
            <router-link
                class="header-title"
                to="/dashboard"
            >Notepad</router-link>
        </v-toolbar-title>
        <v-spacer />

        <search-component />

        <div class="text-center" v-if="GET_STATUS_LOGIN">
            <v-menu
                class="color-main"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
                max-width="300"
            >
                <template v-slot:activator="{ on, attrs }">
                    <UserPreviewPart :attr="attrs" :on="on" :downClass="'hidden-sm-and-down'" />
                </template>

                <v-card>
                    <v-list >
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Настройки</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>

                        <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Exit</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                    </v-list>
                </v-card>
            </v-menu>
        </div>
    </v-app-bar>
</template>


<script>
import { mapGetters } from 'vuex'
import UserPreviewPart from './parts/UserPreviewPart'
import SearchComponent from "../common/SearchComponent";

export default {
    name: 'HeaderComponent',
    components: { SearchComponent, UserPreviewPart },
    data: () => ({
        select: null
    }),
    computed: {
        ...mapGetters(['GET_STATUS_LOGIN'])
    },

    methods: {
        async logout() {
            await this.$store.dispatch('A_LOGOUT')
                .then(() => {
                    this.$router.push('/login')
                })
        },
    }

}
</script>
<style scoped>
.header-title{
    color: #ffffff;
    font-weight: 800;
    text-decoration: none;
}
</style>
