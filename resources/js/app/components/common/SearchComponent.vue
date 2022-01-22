<template>
    <v-autocomplete
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        clearable
        hide-details
        hide-selected
        item-text="title"
        item-value="symbol"
        label="Search for a coin..."
        solo
    >
        <template v-slot:item="{ item }">
            <v-list-item link @click="nextPrompt(item.category_id, item.section_id, item.id)">
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.code" />
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-autocomplete>
</template>

<script>
import axios from "axios";

export default {
    name: "SearchComponent",
    data: () => ({
        isLoading: false,
        items: [],
        search: null,
    }),

    methods: {
        nextPrompt(categoryId, sectionId, id) {
            this.$router.push({ path: '/category/' + categoryId + '/section/' + sectionId + '#' + id, query: { id: id }})
        }
    },

    watch: {
        /*model(val) {
            if (val != null) this.tab = 0
            else this.tab = null
        },*/
        search(val) {
            if (this.items.length > 0) return
            console.log(val)
            this.isLoading = true

            // Lazily load input items
            axios.get('/api/prompt/search/' + encodeURI(val))
                .then(res => {
                    console.log(res.data)
                    this.items = res.data
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (this.isLoading = false))
        },
    }
}
</script>

<style scoped>

</style>
