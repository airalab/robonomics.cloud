<template>
  <div>
    <div class="overlay" @click="$emit('closeModal')"></div>
  
    <div class="modal aws-vs-rws">
      <button class="modal__close-btn" @click="$emit('closeModal')" aria-label="close rws vs aws popup"></button>
      <h3>RWS vs AWS compare&nbsp;specifications</h3>
      <PopupItem
       v-for="item in items" 
       :key="item.id"
       :title="item.title"
       :rwsItems="item.rwsItems"
       :awsItems="item.awsItems"
      />
    </div>
  </div>
</template>

<script>
export default {

  components: {
    PopupItem: () => import('~/components/RWSAWSPopupItem.vue'),
  },

  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Device software',
          rwsItems: ['Aira', 'Robonomics io'],
          awsItems: ['AWS IoT Greengrass', 'FreeRTOS']
        },
        {
          id: 1,
          title: 'Management services',
          rwsItems: ['RWS core - Launch and Datalog services in Robonomics parachain'],
          awsItems: ['AWS IoT Core,', 'AWS IoT Device Management - connectivity and management services']
        },
        {
          id: 2,
          title: 'Transaction type',
          rwsItems: ['Technical and economic'],
          awsItems: ['Technical']
        },
        {
          id: 3,
          title: 'Security',
          rwsItems: ['Polkadot blockchain'],
          awsItems: ['IT-company cloud control']
        },
        {
          id: 4,
          title: 'Signal types',
          rwsItems: ['pub/sub'],
          awsItems: ['pub/sub']
        },
        {
          id: 5,
          title: 'Protocol',
          rwsItems: ['IPFS', 'Robonomics'],
          awsItems: ['HTTPS', 'MQTT']
        },
        {
          id: 6,
          title: 'Availability',
          rwsItems: ['Global "+"'],
          awsItems: ['Global "-"']
        },
        {
          id: 7,
          title: 'Ecosystem',
          rwsItems: ['Shared'],
          awsItems: ['Private']
        },
        {
          id: 8,
          title: 'Services',
          rwsItems: ['Polkadot, IPFS,', 'and Ethereum ecosystem projects'],
          awsItems: ['Amazon Web Services']
        },
        {
          id: 9,
          title: 'Access to cryptocurrencies',
          rwsItems: ['Yes'],
          awsItems: ['No']
        },
        {
          id: 10,
          title: 'Access to smart contracts and defi',
          rwsItems: ['Yes'],
          awsItems: ['No']
        },
      ]
    }
  }

}
</script>

<style scoped>

  .modal h3 {
    max-width: 356px;
    margin-bottom: var(--space);
    font-size: calc(var(--base-font-size) * 1.5);
    color: var(--color-light);
    align-self: center;
  }

</style>