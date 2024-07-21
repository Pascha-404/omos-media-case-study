<script lang="ts">
import type { ILinkedInput } from '@/types';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String as PropType<string>,
            required: true,
        },
        dynamicPlaceholder: {
            type: String,
            default: '{count}', // Placeholder for the dynamic value
        },
        maxCount: {
            type: Number,
            default: 5, // Default maximum count
        },
        linkedInput: { type: Object as PropType<ILinkedInput>, required: true },
    },
    data() {
        return {
            remainingItems: 4, // Initial value, assuming input value is 1
            inputElement: null as HTMLInputElement | null,
        };
    },
    methods: {
        updateRemainingItems(value: number) {
            this.remainingItems = this.maxCount - value;
        },
    },
    computed: {
        formattedText(): string {
            return this.text.replace(
                this.dynamicPlaceholder,
                this.remainingItems.toString()
            );
        },
    },
    mounted() {
        // Find the input element by its selector
        this.inputElement = document.querySelector(
            `input[${this.linkedInput.selector}="${this.linkedInput.value}"]`
        ) as HTMLInputElement;
        if (this.inputElement) {
            // Set initial value
            this.updateRemainingItems(Number(this.inputElement.value));

            // Watch for changes to the input value
            this.inputElement.addEventListener('input', (event: Event) => {
                const input = event.target as HTMLInputElement;
                this.updateRemainingItems(Number(input.value));
            });
        }
    },
});
</script>

<template>
    <p data-test="dynamicTextInjection">{{ formattedText }}</p>
</template>
