<template>
    <v-card max-width="1200">
        <v-card-title>Timestamp</v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <h4>Timestamp:{{timestampSet()}} {{timestamp}} <v-text-field :disabled="true" type="number"  /></h4>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "Timestamp",
    data: () => ({
        timestamp: null
    }),

    computed: {
        getTimestamp() {
            // return this.timestamp;
        }
    },


    methods: {
        timestampSet() {
             setInterval(function () {
                this.timestamp = new Date().getTime()
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
