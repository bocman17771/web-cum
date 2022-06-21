<template>
<slot></slot>
<Footer></Footer>
</template>
<script lang="ts">
import Footer from '../Footer/index.vue'
export default {
    name: 'layoutDefault',
    components: {
        Footer
    }
}
</script>

<script lang="ts" setup>
    
</script>