<template>
    <section>
        <p class="spacing" />

        <b-button v-on:click="refreshStatus" variant="primary" style="width:10em"> REFRESH </b-button>

        <p class="spacing" />

        <p class="loading" v-if="loading">Loading...</p>

        <p> <b>SSID:</b> {{ wifi.config.ssid }} </p>
        <p> <b>Encryption:</b> {{ wifi.config.encryption }} </p>
        <p> <b>IP4:</b> {{ wifi.ip4 }} </p>
        <p> <b>IP6:</b> {{ wifi.ip6 }} </p>
        <p> <b>MAC:</b> {{ wifi.mac }} </p>
    </section>
</template>

<script>
import WifiStatus from '../services/WifiStatus';
export default {
    name: 'WifiStatus',
    
    data() {
        return {
            loading: true,
            wifi: {}
        }
    },
    methods: {
        refreshStatus: function() {
            this.interface = {};
            this.loading = true;

            WifiStatus.getStatus()
            .then(data => {
                this.wifi = data;
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
        }
    },
    created() {
        this.refreshStatus();
    }
}
</script>

<style lang="scss">
.spacing, .loading {
    margin-bottom: 15px;
}
</style>