<template>
    <section>
        <p class="spacing" />

        <b-button v-on:click="scanNetworks" variant="primary" style="width:10em"> SCAN </b-button>

        <p class="spacing" />

        <p class="loading" v-if="loading">Loading...</p>

        <b-list-group id="networks">
            <b-list-group-item button v-for="network in networks" :key="network.ssid">
                {{ network.ssid }} ({{ network.encryption }})
            </b-list-group-item>
        </b-list-group>
    </section>
</template>

<script>
import Networks from '../services/Networks';
export default {
    name: 'NetworkList',
    data() {
        return {
            loading: true,
            networks: []
        }
    },
    methods: {
        scanNetworks: function() {
            this.networks = [];
            this.loading = true;

            Networks.getNetworks()
            .then(networks => {
                this.networks = networks;
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
        }
    },
    created() {
        this.scanNetworks();
    }
}
</script>

<style lang="scss">
.spacing, .loading {
    margin-bottom: 15px;
}
</style>