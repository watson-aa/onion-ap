<template>
    <b-tabs>
        <b-tab title="Status">
            <wifi-status />
        </b-tab>
        <b-tab title="Networks">
            <network-list />
        </b-tab>
    </b-tabs>
</template>
    
<script>
import NetworkList from './NetworkList.vue';
import WifiStatus from './WifiStatus.vue';

export default {
  name: 'tab-nav',
  components: {
    'network-list': NetworkList,
    'wifi-status': WifiStatus
  }
}
</script>