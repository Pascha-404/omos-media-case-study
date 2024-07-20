<script lang="ts">
import { defineComponent, type PropType } from 'vue';
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
    },
    data() {
        return {
            tagName: this.el.tagName.toLowerCase(),
            attributes: attributesToObject(this.el.attributes),
        };
    },
});
</script>

<template>
    <component :is="tagName" v-bind="attributes">{{ text }}</component>
</template>
