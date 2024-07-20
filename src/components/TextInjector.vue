<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IAttributes } from '@/types';
import attributesToObject from '@/utils/attributesToObject';

export default defineComponent({
    props: {
        text: {
            type: String as PropType<string>,
            required: true,
            default: 'Provide a text property',
        },
        el: {
            type: Object as PropType<HTMLElement>,
            required: true,
        },
        newAttributes: {
            type: Object as PropType<IAttributes>,
            required: false,
            default: () => ({}),
        },
    },
    data() {
        return {
            tagName: this.el.tagName.toLowerCase(),
            attributes: attributesToObject(this.el.attributes),
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
});
</script>

<template>
    <component :is="tagName" v-bind="mergedAttributes">{{ text }}</component>
</template>
