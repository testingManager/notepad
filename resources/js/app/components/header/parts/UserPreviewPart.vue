<template>
    <v-list color="#333399" :class="downClass">
        <v-list-item
            v-bind="attr"
            v-on="on"
            link
        >
            <!--                <v-list-item-avatar>
                                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                            </v-list-item-avatar>-->
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    {{ userName }}
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action
                :class="downClass"
            >
                <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: "UserPreviewPart",
    props: ['attr', 'on', 'downClass'],
    computed: {
        ...mapState(['user']),
        ...mapGetters(['GET_USER_NAME']),
        userName() {
            return this.GET_USER_NAME
        }
    }
}
</script>

<style scoped>
</style>
