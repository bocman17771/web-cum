<template>
    <footer>
        <div :class="$style.hat">
            <div :class="$style.logo"/>
        </div>
    </footer>
</template>
<srcipt lang="ts">
export default {
    name: 'WFooter'
}
</srcipt> 
<script lang="ts" setup>

</script>
<style lang="scss" module>
    footer {
        padding-top: 3.2rem;
        padding-left: 4.4rem;
        padding-right: 4.4rem;
    }
    .logo {
        width: 33.7rem;
        height: 5.1rem;
        background-image: url('@/assets/logo/logo-1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>