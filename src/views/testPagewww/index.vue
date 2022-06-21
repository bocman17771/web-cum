<template>
{{test}}
{{getStore}}
</template>
<!-- <script lang="ts">export default { name: 'testPagewww' }</script> -->

<script>
import { useCounterStore } from '@/stores/counter'

export default {
    data() {
        return {
            test: 123,
            store: useCounterStore()
        }
    },
    mounted() {
        console.log(true);  
        this.store.increment()
    },
    computed: {
        getStore: function () {
            return this.store.doubleCount
        }
    }
}
</script>