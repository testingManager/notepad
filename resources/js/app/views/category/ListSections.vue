<template>
    <v-list>
        <v-list-item-group>
            <template v-for="section in sections">
                <v-list-item :key="section.id" link>
                    <v-list-item-content @click="$router.push(`/category/` + section.category_id + `/section/` + section.id)" class="d-flex">
                        <v-list-item-title class="text-center" v-text="section.name.toUpperCase()"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-menu class="menu-top" bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn  color="success" icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-icon small color="orange" @click="showEditSection(section.id, section.category_id, section.slug)">mdi-pencil</v-icon>
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item link @click="deleteSection(section.id, section.category_id, section.name)">
                                    <v-list-item-title>
                                        <v-icon small color="error">mdi-close-circle</v-icon>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item-action>
                </v-list-item>
            </template>

            <template v-if="!sections.length">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>У вас пока нет ни одной подкатегории</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <template>
                <v-dialog v-model="dialog" persistent max-width="600px">

                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item v-bind="attrs" v-on="on">
                            <v-list-item-content>
                                <v-icon large>mdi-plus-circle-outline</v-icon>
                            </v-list-item-content>
                        </v-list-item>
                    </template>

                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Added new section</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-form ref="form">
                                            <v-text-field dense :error-messages="errors.name" outlined v-model="newSection" :rules="rules.required" label="Section name"/>
                                        </v-form>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false; newSection = '';">Close
                            </v-btn>
                            <v-btn color="blue darken-1" @click="saveSection()" text >Add</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>
            </template>
        </v-list-item-group>
    </v-list>
</template>

<script>
import axios from 'axios';
import validate from "../../mixins/validate";
import { mapActions } from 'vuex';

export default {
    name: "ListSections",
    mixins: [validate],
    data: () => ({
        dialog: false,
        errors: '',
        sections: [],
        newSection: ''
    }),

    methods: {
        ...mapActions(['A_SET_ALERT']),
        async getSections(sectionId) {
            axios.get('/api/section/list/' + sectionId)
            .then(res => {
                this.sections = res.data;
            })
        },

        async saveSection() {
            if (!this.validate()) {
                return false;
            }

            if (this.sectionId) {
                axios.post('/api/section/change', { name: this.newSection, categoryId: this.$route.params.id, sectionId: this.sectionId })
                    .then(() => {
                        this.newSection = '';
                        this.dialog = false;
                        this.sectionId = ''
                        this.getSections(this.$route.params.id);
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors;
                    })
            } else {
                axios.post('/api/section/save', {name: this.newSection, categoryId: this.$route.params.id})
                    .then(() => {
                        this.newSection = '';
                        this.dialog = false;
                        this.getSections(this.$route.params.id);
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors;
                    })
            }
        },

        deleteSection(sectionId, categoryId, name) {
            //let categoryId = this.$route.params.id
            if (confirm('Do you really want to delete utu subcategory "' + name + '"?')) {
                axios.post('/api/section/remove', { sectionId: sectionId, categoryId: categoryId })
                .then(() => {
                    this.getSections(categoryId);
                })
                .catch(err => {
                    this.A_SET_ALERT({ text: err.response.data.errors, type: 'error', timeout: 2000 });
                })
            }
        },

        showEditSection(sectionId, categoryId, slug) {
            this.newSection = slug
            this.dialog = true
            this.sectionId = sectionId
        }
    },

    created() {
        this.getSections(this.$route.params.id);
    }
}
</script>

<style scoped>
.menu-top{
    z-index: 10;
}
</style>
