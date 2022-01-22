<template>
    <v-card :class="targetClass" :id="prompt.id">
        <v-card-title class="back-gray">
            {{ prompt.title }}
            <v-spacer/>
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="card-menu" color="success" icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="promptDialog = true">
                        <v-list-item-title>
                            <v-icon small color="orange">mdi-pencil</v-icon>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link @click="deletePrompt(prompt.id)">
                        <v-list-item-title>
                            <v-icon small color="red">mdi-close-circle</v-icon>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>
        <v-card-text class="d-flex pb-0">
            <p class="background-code">{{ prompt.code }}</p>
            <v-spacer />
            <v-btn icon @click="copyCode">
                <v-icon :color="color">mdi-content-copy</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-actions
            v-if="prompt.modifiers"
        >
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header class="pa-1">
                        Params
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div v-html="prompt.modifiers"></div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-actions>
        <new-prompt-component v-model="promptDialog" :promptValue="prompt" v-on:refreshPrompts="emitEvent" />
    </v-card>
</template>

<script>
import axios from "axios";
import NewPromptComponent from "./NewPromptComponent";

export default {
    name: "PromptComponent",
    components: { NewPromptComponent },
    props: {
        prompt: {
            type: Object
        }
    },

    data: () => ({
        color: 'indigo',
        promptDialog: false,
        targetClass: ''
    }),

    computed: {
        getCode() {
            return this.prompt.code
        }
    },

    methods: {
        async copyCode() {
            this.color = 'gray'
            await navigator.clipboard.writeText(this.getCode);
            await axios.post('/api/prompt/increment-rating', {id: this.prompt.id})
            setTimeout( () => {
                this.color = 'indigo'
            }, 3000)

        },

        async deletePrompt(id) {
            if (confirm('Do you really want to delete the hint?')) {
                axios.post('/api/prompt/delete', { id })
                .then(() => {
                    this.emitEvent()
                })
                .catch(err => {
                    this.A_SET_ALERT({ text: "Error server request", type: "error", timeout: 2000 })
                })
            }
        },

        emitEvent() {
            this.$emit('deleteEvent', true)
        }
    },

    created() {

        if (this.$route.query.id == this.prompt.id) {
            this.targetClass = 'target-prompt'
        }
    }
}
</script>

<style scoped>
.target-prompt{border: 2px solid green}
.background-code {background-color: #CCCCFF;}
</style>
