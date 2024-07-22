<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IAttributes, ISelector } from '@/types';
import attributesToObject from '@/utils/attributesToObject';

export default defineComponent({
    props: {
        selector: { type: Object as PropType<ISelector>, required: true },
        newAttributes: {
            type: Object as PropType<IAttributes>,
            required: false,
            default: () => ({}),
        },
        text: {
            type: String as PropType<string>,
            required: true,
        },
    },
    data() {
        return {
            targetElement: null as HTMLElement | null,
            attributes: {} as IAttributes,
            mergedSelector: `button[${this.selector.attribute}="${this.selector.value}"]`,
        };
    },
    computed: {
        mergedAttributes(): IAttributes {
            const filteredAttributes = Object.keys(this.attributes).reduce((acc, key) => {
                if (!Object.prototype.hasOwnProperty.call(this.newAttributes, key)) {
                    acc[key] = this.attributes[key];
                }
                return acc;
            }, {} as IAttributes);

            return { ...filteredAttributes, ...this.newAttributes };
        },
    },
    methods: {
        updateAttributes() {
            if (this.targetElement) {
                Object.keys(this.mergedAttributes).forEach((key) => {
                    this.targetElement!.setAttribute(key, this.mergedAttributes[key]);
                });
                this.targetElement.innerHTML = this.text;
            }
        },
    },
    mounted() {
        this.targetElement = document.querySelector(this.mergedSelector);
        if (this.targetElement) {
            this.attributes = attributesToObject(this.targetElement.attributes);
            this.updateAttributes();
        }
    },
});
</script>
