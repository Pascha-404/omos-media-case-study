# TextInjector

The `TextInjector` component replaces the content of an HTML element with provided text and optionally updates its attributes.

## Code

```vue
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
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
    <component :is="tagName" v-bind="mergedAttributes" v-html="text"></component>
</template>
```

## Props

| Name            | Type         | Default                | Description                                                    |
|-----------------|--------------|------------------------|----------------------------------------------------------------|
| `text`          | `string`     | **required**           | The text content to inject.                                    |
| `el`            | `HTMLElement`| **required**           | The HTML element to replace the content of.                    |
| `newAttributes` | `IAttributes`| `{}`                   | New attributes to set on the HTML element.                     |

## Data

- `tagName` (String): The tag name of the HTML element.
- `attributes` (IAttributes): The attributes of the HTML element.

## Computed Properties

### `mergedAttributes()`

Returns the merged attributes of the original and new attributes, excluding those that need altering.

## Template

```html
<template>
    <component :is="tagName" v-bind="mergedAttributes" v-html="text"></component>
</template>
```

The template consists of a `component` element that dynamically renders the element type with the merged attributes and injected text.

## Usage Example

To use the `TextInjector` component in your application, import and register it in your parent component:

```vue
<template>
  <div id="app">
    <TextInjector
      text="Injected Text"
      :el="document.getElementById('element-id')"
      :newAttributes="{ class: 'new-class' }"
    />
  </div>
</template>

<script>
import TextInjector from './components/TextInjector.vue';

export default {
  name: 'App',
  components: {
    TextInjector
  }
};
</script>

<style>
/* Add any global styles here */
</style>
```

This will replace the content of the specified HTML element with the provided text and update its attributes if specified.
