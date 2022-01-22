<template>
    <v-card
        class="form-auth"
        max-width="600"
    >
        <v-card-title>Add new category</v-card-title>
        <v-card-text>
            <v-form ref="form" >
                <v-text-field outlined dense label="Category name" :error-messages="errors.name" :rules="rules.required" v-model="newCategory.name" />
                <app-image-upload-component v-model="newCategory.image"  :imagePath="newCategory.pathImage"/>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="saveCategory">{{ $route.params.id ? 'Edit' : 'Save' }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import AppImageUploadComponent from "../../components/common/AppImageUploadComponent";
import validate from "../../mixins/validate";
import { mapActions } from 'vuex';
import axios from "axios";

export default {
    name: "AddCategory",
    mixins: [validate],
    components: { AppImageUploadComponent },
    data: () => ({
        errors: [],
        newCategory: {
            name: '',
            image: null,
            pathImage: '',
            id: null
        }
    }),

    methods: {
        ...mapActions(['A_SET_ALERT']),
        async saveCategory() {
            if (!this.validate()) {
                return false;
            }


            let form = new FormData();

            form.append('name', this.newCategory.name)

            if (this.newCategory.id) {
                form.append('id', this.newCategory.id)
                this.newCategory.image && form.append('image', this.newCategory.image)
                axios.post('/api/category/update', form, {headers: {"Content-type": "multipart/form-data"}})
                    .then(() => this.$router.push('/dashboard'))
                    .catch(err => this.errors = err.response.data.errors)
            } else {
                if (!this.newCategory.image) {
                    await this.A_SET_ALERT({text: "Upload image", type: 'error', timeout: 2000})
                    return false;
                }

                form.append('image', this.newCategory.image)
                axios.post('/api/category/new', form, {headers: {"Content-type": "multipart/form-data"}})
                    .then(() => this.$router.push('/dashboard'))
                    .catch(err => this.errors = err.response.data.errors)
            }
        },

        async getCategory(id) {
            return axios.get('/api/category/edit/' + id, {headers: {"Accept": "application/json"}})
            .then(res => {
                this.newCategory.name = res.data.name
                this.newCategory.id = res.data.id
                this.newCategory.pathImage = res.data.image
            })

        }
    },

   created() {
        if (this.$route.params.id) {
          //await this.getCategory(this.$route.params.id)
            axios.get('/api/category/edit/' + this.$route.params.id, {headers: {"Accept": "application/json"}})
                .then(res => {
                    this.newCategory.name = res.data.name
                    this.newCategory.id = res.data.id
                    this.newCategory.pathImage = res.data.image
                })
        }
    }
}
</script>

<style scoped>

</style>
