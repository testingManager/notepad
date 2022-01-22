<template>
    <v-card max-width="1200">
        <v-card-title>Base 64 translate</v-card-title>
        <v-card-text>
            <v-form ref="form">
                <v-textarea label="Enter text" rows="3" :rules="rules.required" v-model="text"></v-textarea>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn color="orange" @click="decode">decode</v-btn>
            <v-btn color="primary" @click="encode">encode</v-btn>
            <v-btn color="red" @click="clear">clear</v-btn>
            <v-spacer />
        </v-card-actions>
        <v-card-subtitle>Result:</v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col cols="11">
                    <p>{{ result }}</p>
                </v-col>
                <v-col cols="1">
                    <v-btn v-show="result" icon @click="copyCode">
                        <v-icon :color="color">mdi-content-copy</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios";
import validate from "../../mixins/validate";

export default {
    name: "Base64",
    mixins: [validate],
    data: () => ({
        text: '',
        result: '',
        color: 'indigo'
    }),

    methods: {
        decode() {
            if (!this.validate()) {
                return false;
            }
            axios.post('/api/base64/decode', { string: this.text })
            .then(res => {
                this.result = res.data.result;
            })
        },
        encode() {
            if (!this.validate()) {
                return false;
            }
            axios.post('/api/base64/encode', { string: this.text })
                .then(res => {
                    this.result = res.data.result;
                })
        },

        async copyCode() {
            this.color = 'gray';
            await navigator.clipboard.writeText(this.result);
            setTimeout( () => {
                this.color = 'indigo';
            }, 3000);
        },

        clear() {
            this.result = '';
            this.text = '';
        }
    }
}
</script>

<style scoped>

</style>
