<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        initialText: {
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
        linkedInputSelector: {
            type: String as PropType<string>,
            required: true,
        },
        linkedInputSelectorValue: {
            type: String as PropType<string>,
            required: true,
        },
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
            return this.initialText.replace(
                this.dynamicPlaceholder,
                this.remainingItems.toString()
            );
        },
    },
    mounted() {
        // Find the input element by its selector
        this.inputElement = document.querySelector(
            `input[${this.linkedInputSelector}="${this.linkedInputSelectorValue}"]`
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
    <p>{{ formattedText }}</p>
</template>
