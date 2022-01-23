<template>
<!--    <v-card class="mx-auto" max-width="600">-->
        <v-list two-line dense>
            <v-list-item-group active-class="pink--text">
                <template v-for="(item, index) in popular">
                    <v-list-item dense :key="item.title">
                        <template v-slot:default="{ active }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title" />

                                <v-list-item-subtitle class="text--primary" v-text="item.code" />
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn icon @click="copyCode(item.code, item.id)">
                                    <v-icon :color="color">mdi-content-copy</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </template>
                    </v-list-item>

                    <v-divider v-if="index < popular.length - 1" :key="index" />
                </template>
            </v-list-item-group>
        </v-list>
<!--    </v-card>-->
</template>

<script>
import axios from "axios";

export default {
    name: "PopularPromptComponent",
    data: () => ({
        popular: [],
        color: 'indigo'
    }),
    methods: {
        popularPrompts() {
            axios.get('/api/prompt/populars')
            .then(res => {
                this.popular = res.data.popular
            })
        },

        async copyCode(code, id) {
            this.color = 'gray'
            await navigator.clipboard.writeText(code);
            await axios.post('/api/prompt/increment-rating', {id: id})
            setTimeout( () => {
                this.color = 'indigo'
            }, 3000)

        },
    },

    created() {
        this.popularPrompts()
    }
}
</script>

<style scoped>

</style>
