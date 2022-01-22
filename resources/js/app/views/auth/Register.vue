<template>
    <v-card
        class="form-auth"
        max-width="600"
    >
        <v-card-title class="color-main">
            Register
        </v-card-title>
        <v-card-text >
            <v-form ref="form" class="mt-4">
                <v-text-field :error-messages="getErrors.email" dense outlined :rules="rules.emailRules" v-model="form.email" label="Email" />
                <v-text-field :error-messages="getErrors.name" dense outlined :rules="rules.nameRules" v-model="form.name" label="Name" />
                <v-text-field :error-messages="getErrors.password" dense outlined :rules="rules.passwordRules" v-model="form.password" label="Password" type="password" />
                <v-text-field :error-messages="getErrors.password" dense outlined v-model="form.password_confirmation" label="Confirmed" type="password" />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <router-link to="/login">Login</router-link>
            <v-spacer />
            <v-btn color="primary" @click="register">Register</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import validate from "../../mixins/validate";

export default {
    name: "Register",
    mixins: [validate],
    data: () => ({
        errors: [],
        form: {
            email: '',
            name: '',
            password: '',
            password_confirmation: ''
        }
    }),

    computed: {
        getErrors() {
            return this.errors
        }
    },

    methods: {
        ...mapActions(['A_LOGIN', 'A_REGISTER', 'A_SET_ALERT']),
        register() {
            if (!this.validate()) {
                return false;
            }

            this.A_REGISTER(this.form)
                .then(async (res) => {
                    if (res) {
                        return this.$router.push('/dashboard');
                    }
                    await this.A_SET_ALERT({text: 'Errors server request', type: 'error', timeout: 2000});
                })
            .catch(error => {
                this.errors = error;
                this.A_SET_ALERT({text: 'Errors server request', type: 'error', timeout: 2000});
            })
        }
    }
}
</script>

<style scoped>

</style>
