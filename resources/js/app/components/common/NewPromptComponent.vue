<template>
    <v-dialog v-model="value" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Added new prompt</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Title" :rules="rules.required" v-model="prompt.title" required counter="100"/>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea name="code" :rules="rules.required" label="Enter code" v-model="prompt.code" hint="Hint text"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <ckeditor v-model="prompt.modifiers" />
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closePrompt">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="savePrompt">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import validate from "../../mixins/validate";
import axios from 'axios';

export default {
    name: "NewPromptComponent",
    mixins: [validate],
    model: {
        prop: 'value',
        event: 'click'
    },
    props: {
        value: {
            type: Boolean
        },
        promptValue: {
            type: Object,
            default: null
        }
    },

    data: () => ({
        prompt: {
            id: null,
            code: '',
            title: '',
            modifiers: '',
            categoryId: '',
            sectionId: '',
        }
    }),

    methods: {
        closePrompt() {
            this.$emit('click', false)
        },
        savePrompt() {
            if (!this.validate()) {
                return false;
            }
            if (this.prompt.id) {
                const updatePrompt = {
                    title: this.prompt.title,
                    code: this.prompt.code,
                    modifiers: this.prompt.modifiers,
                    category_id: this.prompt.category_id,
                    section_id: this.prompt.section_id,
                    user_id: this.prompt.user_id,
                    id: this.prompt.id
                }
                axios.post('/api/prompt/update', updatePrompt)
                    .then(() => {
                        this.$emit('refreshPrompts', true)
                        this.closePrompt()
                    })
                    .catch(error => console.log(error.response.data))
            } else {
                this.prompt.categoryId = this.$route.params.categoryId
                this.prompt.sectionId = this.$route.params.sectionId

                axios.post('/api/prompt/create', this.prompt)
                    .then(res => {
                        this.$emit('refreshPrompts', true)
                        this.closePrompt()
                    })
                    .catch(error => console.log(error.response.data))
            }
        }
    },

    created() {
        console.log(this.promptValue)
        if (this.promptValue) {
            this.prompt = this.promptValue
        }
    }
}
</script>

<style scoped>

</style>
