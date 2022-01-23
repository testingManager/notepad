<template>
    <div>
        <v-row dense >
            <v-col cols="6">
                <popular-prompt-component />
            </v-col>
        </v-row>
        <v-row class="mt-16">
            <v-col cols="8">
                <v-row>
                    <v-col cols="2" v-for="item in categories" :key="item.id">
                        <v-hover v-slot="{ hover }">
                            <v-card  :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" max-width="100">
                                <router-link :to="`/category/${item.slug}/${item.id}`">
                                    <v-img height="100" width="100" :src="item.image"></v-img>
                                </router-link>
                                <v-menu bottom left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn class="card-menu" color="success" icon v-bind="attrs" v-on="on">
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item :to="categoryMenu[0].path + '/' + item.id">
                                            <v-list-item-title>
                                                <v-icon small :color="categoryMenu[0].color">{{categoryMenu[0].icon}}</v-icon>
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item link @click="deleteCategory(item.id, item.slug)">
                                            <v-list-item-title>
                                                <v-icon small :color="categoryMenu[1].color">{{categoryMenu[1].icon}}</v-icon>
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <v-col cols="8" v-if="!categories.length">
                        <p>У вас пока нет ни одной категории...</p>
                    </v-col>

                    <v-col cols="2" >
                        <router-link to="/add-category">
                            <v-hover v-slot="{ hover }">
                                <v-card  :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" max-width="100">
                                    <v-img height="100" width="100" src="/img/add.webp"></v-img>
                                </v-card>
                            </v-hover>
                        </router-link>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider vertical />
            <v-col cols="4">
                <v-list flat>
                    <v-list-item-group v-model="model" color="indigo">
                        <v-list-item v-for="(item, i) in items" :key="i" link :to="item.path">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import PopularPromptComponent from "../components/common/PopularPromptComponent";

export default {
    name: "Home",
    components: {PopularPromptComponent},
    data: () => ({
        categories: [],
        items: [
            { icon: 'mdi-format-textdirection-l-to-r', text: 'Base64', path: '/base64' },
            { icon: 'mdi-timer-sand', text: 'Timestamp', path: '/timestamp' },
        ],
        categoryMenu: [
            { path: '/add-category', title: 'Edit', icon: 'mdi-pencil', color: 'orange'},
            { path: '', title: 'Remove', icon: 'mdi-close-circle', color: 'error'},
        ],
        model: 1,
    }),

    methods: {
        ...mapActions(['A_SET_ALERT']),
        async getCategories() {
            const categories = await axios.get('api/category/all')
            this.categories = categories.data
        },
        async deleteCategory(id, slug) {
            if (confirm('Do you really want to delete this category "' + slug + '"?')) {
                await axios.post('api/category/delete', {id: id, name: slug})
                    .then(async () => {
                        await this.getCategories();
                    })
                    .catch(() => {
                        this.A_SET_ALERT({text: 'Error server request', type: 'error', timeout: 2000})
                    })
            }
        }
    },

    created() {
        this.getCategories()
    }
}
</script>

<style scoped>
.card-menu{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
}
</style>
