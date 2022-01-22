export default {
    data: () => ({
        valid: false,
        rules: {
            required: [v => !!v || 'Заполните поле'],
            emailRules: [
                v => !!v || 'Заполните поле "email"',
                v => /.+@.+\..+/.test(v) || 'Введите правильный "email"',
            ],
            passwordRules: [
                v => !!v.trim() || 'Заполните поле "Password"',
                v => v.trim().length <= 20 || 'Поле "Password" должно содержать не более 20 символов',
                v => v.trim().length >= 6 || 'Поле "Password" должно содержать не менее 6 символов',
            ],
            nameRules: [
                v => !!v.trim() || 'Заполните поле "Name"',
                v => v.trim().length <= 20 || 'Поле "Name" должно содержать не более 30 символов',
                v => v.trim().length >= 3 || 'Поле "Name" должно содержать не менее 2 символов',
            ]
        }
    }),
    methods: {
        validate () {
            return this.$refs.form.validate()
        }
    }
}
