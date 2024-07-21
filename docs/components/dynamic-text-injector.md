# DynamicTextInjector

The `DynamicTextInjector` component dynamically updates a text element based on the value of an input element.

## Code

```vue
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
```

## Props

| Name                | Type           | Default    | Description                                                    |
|---------------------|----------------|------------|----------------------------------------------------------------|
| `text`              | `string`       | **required** | The initial text content with a placeholder for the dynamic value. |
| `dynamicPlaceholder`| `string`       | `'{count}'` | The placeholder string in the text content that will be replaced by the dynamic number. |
| `maxCount`          | `number`       | `5`        | The maximum count value to calculate the remaining items.      |
| `linkedInput`       | `ILinkedInput` | **required** | The object containing the selector and value for the input element to link with the component. |

## Data

- `remainingItems` (Number): Holds the remaining items count.
- `inputElement` (HTMLInputElement | null): Holds a reference to the linked input element.

## Methods

### `updateRemainingItems(value: number)`

Updates the `remainingItems` data property based on the input value.

## Computed Properties

### `formattedText()`

Returns the text with the dynamic placeholder replaced by the `remainingItems` value.

## Lifecycle Hooks

### `mounted()`

Finds the input element by its selector, sets the initial value, and watches for changes to the input value.

## Template

```html
<template>
    <p data-test="dynamicTextInjection">{{ formattedText }}</p>
</template>
```

The template consists of a `p` element that displays the `formattedText`.

## Usage Example

To use the `DynamicTextInjector` component in your application, import and register it in your parent component:

```vue
<template>
  <div id="app">
    <DynamicTextInjector
      text="Please select between 1 and 5 products: Current total {count} more items"
      dynamicPlaceholder="{count}"
      :linkedInput="{ selector: 'data-pf-type', value: 'QuantityField' }"
    />
    <input class="sc-bnOPBZ bwJNhh pf-43_" min="1" max="50" type="number" data-hidespinner="false" name="quantity" data-variants-continue="" data-pf-type="QuantityField" value="1">
  </div>
</template>

<script>
import DynamicTextInjector from './components/DynamicTextInjector.vue';

export default {
  name: 'App',
  components: {
    DynamicTextInjector
  }
};
</script>

<style>
/* Add any global styles here */
</style>
```

This will display the dynamic text based on the value of the linked input element.
