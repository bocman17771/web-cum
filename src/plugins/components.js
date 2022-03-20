import wSlider from '@/components/@ui/w-slider/index.vue'
import wTextField from '@/components/@ui/w-text-field/index.vue'
import wIcon from '@/components/@ui/w-icon/index.vue'
import wButton from '@/components/@ui/w-button/index.vue'
import wTabs from '@/components/@ui/w-tabs/index.vue'
import wChip from '@/components/@ui/w-chip/index.vue'
import wMenu from '@/components/@ui/w-menu/index.vue'


const components = {
    install(app) {
        app.component('w-slider', wSlider)
        app.component('w-text-field', wTextField)
        app.component('w-icon', wIcon)
        app.component('w-button', wButton)
        app.component('w-tabs', wTabs)
        app.component('w-chip', wChip)
        app.component('w-menu', wMenu)
    },
}

export default components
