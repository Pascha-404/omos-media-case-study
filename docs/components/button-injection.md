# ButtonInjection

The `ButtonInjection` component is a Vue component designed to inject new attributes and text into a specified button element on the page.

## Code

```typescript
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
            mergedSelector: button[\${this.selector.attribute}="\${this.selector.value}"],
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
```

## Props

| Name          | Type                             | Required | Default    | Description                                                                                 |
|---------------|----------------------------------|----------|------------|---------------------------------------------------------------------------------------------|
| `selector`    | `Object`                         | Yes      | -          | The selector object used to find the target button element.                                 |
| `newAttributes` | `Object`                         | No       | `{}`        | The new attributes to be added or overwritten on the target button element.                |
| `text`        | `String`                         | Yes      | -          | The new text content to be set inside the target button element.                            |

## Data Properties

### `targetElement`
- **Type:** `HTMLElement | null`
- **Description:** Holds the reference to the target button element that matches the given selector.

### `attributes`
- **Type:** `Object`
- **Description:** Stores the current attributes of the target button element.

### `mergedSelector`
- **Type:** `String`
- **Description:** Constructs the CSS selector string based on the provided `selector` prop to find the target button element.

## Computed Properties

### `mergedAttributes`
- **Type:** `Object`
- **Description:** Merges the current attributes of the target button element with the new attributes provided via the `newAttributes` prop. Existing attributes that are not overwritten by `newAttributes` are retained.

## Methods

### `updateAttributes`
- **Description:** Updates the attributes and text content of the target button element.
- **Details:** 
  - Iterates over the `mergedAttributes` and sets each attribute on the `targetElement`.
  - Updates the innerHTML of the `targetElement` to the provided `text` prop.

## Lifecycle Hooks

### `mounted`
- **Description:** Called when the component is mounted. Finds the target button element using the `mergedSelector`, retrieves its current attributes, and updates the button with the new attributes and text.
- **Details:** 
  - Uses `document.querySelector` to find the target button element.
  - Converts the current attributes of the target button element into an object using `attributesToObject`.
  - Calls `updateAttributes` to apply the new attributes and text.

