<template>
    <v-card max-width="600" class="form-auth">
        <v-card-title class="color-main">Login</v-card-title>
        <v-card-text>
            <v-form ref="form" class="mt-4">
                <v-text-field outlined dense type="email" :error-messages="errors.email" :rules="rules.required" label="Email" v-model="form.email" />
                <v-text-field outlined dense type="password" :error-messages="errors.password" :rules="rules.required" label="Password" v-model="form.password" />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <router-link to="/register">Registration</router-link>
            <v-spacer />
            <v-btn color="primary" @click="login">
                sign-in
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import validate from "../../mixins/validate";

export default {
    name: "Login",
    mixins: [validate],
    data:() => ({
        errors: [],
        form: {
            email: '',
            password: ''
        }
    }),

    computed: {
      ...mapGetters(['GET_STATUS_LOGIN'])
    },

    methods: {
        ...mapActions(['A_LOGIN', 'A_SET_ALERT']),
        async  login() {
            if (!this.validate()) {
                return false;
            }
            this.A_LOGIN(this.form)
                .then(() => {
                    if (this.GET_STATUS_LOGIN) {
                        return this.$router.push('/dashboard');
                    }
                    this.A_SET_ALERT({text: 'Errors server request', type: 'error', timeout: 2000});
                })
                .catch(error => this.errors = error)
        }
    }
}
</script>

<style scoped>

</style>
