<template>
    <section>
        <p class="spacing" />

        <b-button v-on:click="refreshStatus" variant="primary" style="width:10em"> REFRESH </b-button>

        <p class="spacing" />

        <p class="loading" v-if="loading">Loading...</p>

        <h2> WAN </h2>
        <p> <b>SSID:</b> {{ wan_config.ssid }} </p>
        <p> <b>Encryption:</b> {{ wan_config.encryption }} </p>
        <p> <b>IP4:</b> {{ ap_config.ip4 }} </p>
        <p> <b>IP6:</b> {{ ap_config.ip6 }} </p>
        <p> <b>MAC:</b> {{ ap_config.mac }} </p>

        <h2> Access Point </h2>

    </section>
</template>

<script>
import WifiStatus from '../services/WifiStatus';
export default {
    name: 'WifiStatus',
    
    data() {
        return {
            loading: true,
            ap_config: {},
            wan_config: {}
        }
    },
    methods: {
        refreshStatus: function() {
            this.interface = {};
            this.loading = true;

            WifiStatus.getStatus()
            .then(data => {
                for (let x = 0; x < data.interfaces.length; x++) {
                    if (data.interfaces[x].section == 'ap') {
                        this.ap_config = data.interfaces[x].config;
                    } else if (data.interfaces[x].section == 'sta') {
                        this.wan_config = data.interfaces[x].config;
                    }
                }
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