import wSlider from '@/components/@ui/w-slider/index.vue'
import wTextField from '@/components/@ui/w-text-field/index.vue'
import wIcon from '@/components/@ui/w-icon/index.vue'
import wButton from '@/components/@ui/w-button/index.vue'
import wButtonBlock from '@/components/@ui/w-button/buttonBlock.vue'
import wTabs from '@/components/@ui/w-tabs/index.vue'
import wChip from '@/components/@ui/w-chip/index.vue'
import wMenu from '@/components/@ui/w-menu/index.vue'
import wSelect from '@/components/@ui/w-select/index.vue'
import wPaginatePanel from '@/components/@ui/w-paginate-panel/index.vue'
import wCheckbox from '@/components/@ui/w-checkbox/index.vue'


const components = {
    install(app) {
        app.component('w-slider', wSlider)
        app.component('w-text-field', wTextField)
        app.component('w-icon', wIcon)
        app.component('w-button', wButton)
        app.component('w-button-block', wButtonBlock)
        app.component('w-tabs', wTabs)
        app.component('w-chip', wChip)
        app.component('w-menu', wMenu)
        app.component('w-select', wSelect)
        app.component('w-paginate-panel', wPaginatePanel)
        app.component('w-checkbox', wCheckbox)
    },
}

export default components
