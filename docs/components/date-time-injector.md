# DateTimeInjector

The `DateTimeInjector` component displays and constantly updates the current date and time.

## Code

```vue
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            currentDateTime: '',
            id: 'current-date-time-updated',
        };
    },
    methods: {
        updateDateTime() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0'); // 24-hour format
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            this.currentDateTime = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
        },
    },
    created() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000); // Update every second
    },
});
</script>

<template>
    <div :id="id">{{ currentDateTime }}</div>
</template>
```

## Props

This component does not accept any props.

## Data

- `currentDateTime` (String): Holds the current date and time as a formatted string.
- `id` (String): The ID assigned to the div element containing the date and time.

## Methods

### `updateDateTime()`

Updates the `currentDateTime` data property with the current date and time in the format `DD.MM.YYYY, HH:MM:SS`.

## Lifecycle Hooks

### `created()`

Calls `updateDateTime()` to set the initial date and time, and sets an interval to update the date and time every second.

## Template

```html
<template>
    <div :id="id">{{ currentDateTime }}</div>
</template>
```

The template consists of a `div` element that binds its `id` attribute to the `id` data property and displays the `currentDateTime`.

## Usage Example

To use the `DateTimeInjector` component in your application, import and register it in your parent component:

```vue
<template>
  <div id="app">
    <DateTimeInjector />
  </div>
</template>

<script>
import DateTimeInjector from './components/DateTimeInjector.vue';

export default {
  name: 'App',
  components: {
    DateTimeInjector
  }
};
</script>
```

This will display the current date and time in the specified format and update it every second.
