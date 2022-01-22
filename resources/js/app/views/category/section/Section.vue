<template>
    <v-row class="mt-5" justify="center">
        <v-col v-if="prompts.length" v-for="prompt in prompts" :key="prompt.id" cols="10" md="8">
            <prompt-component :prompt="prompt" v-on:deleteEvent="refresh" />
        </v-col>

        <v-col cols="10" md="8" v-if="!prompts.length">
            <h3>У вас пока нет подсказок в этом разделе...</h3>
        </v-col>

        <v-col cols="10" md="8">
            <v-card>
                <v-card-actions >
                    <v-btn @click="addPrompt" block>
                        <v-icon large>mdi-plus-circle-outline</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <new-prompt-component v-model="promptDialog" v-on:refreshPrompts="refresh" />
    </v-row>
</template>

<script>
import axios from 'axios';
import PromptComponent from "../../../components/common/PromptComponent";
import NewPromptComponent from "../../../components/common/NewPromptComponent";

export default {
    name: "Section",
    components: {NewPromptComponent, PromptComponent },
    data: () => ({
        promptDialog: false,
        prompts: []
    }),

    methods: {
        async getPrompts(categoryId, sectionId) {
            axios.get('/api/prompt/list/' + categoryId + '/' + sectionId)
            .then(res => {
                console.log(res.data)
                this.prompts = res.data
            })
            .catch(error => console.log(error.response))
        },

        addPrompt() {
            this.promptDialog = true;
        },

        async refresh() {
            await this.getPrompts(this.$route.params.categoryId, this.$route.params.sectionId)
        }
    },

    async created() {
        await this.getPrompts(this.$route.params.categoryId, this.$route.params.sectionId)
    }
}
</script>

<style scoped>

</style>
