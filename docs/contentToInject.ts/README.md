# contentToInject.ts Overview

The `contentToInject.ts` file serves as a database for content that needs to be injected into the page. All handlers in the `main.js` file work with data from this file. To add or delete injections, simply change the data of the corresponding object.

## Text Injection Content

This array contains objects that define text content to be injected into elements on the page.

| Key         | Type    | Description                                      |
|-------------|---------|--------------------------------------------------|
| injectionType | string  | Type of the injection, in this case, 'text'.     |
| selector    | object  | Object defining the selector attribute and value.|
| content     | object  | Object containing original and translated text.  |

### Example Object

```typescript
{
    injectionType: 'text',
    selector: { attribute: 'data-pf-type', value: 'Paragraph3' },
    content: {
        original: 'Did you know that honey never spoils? ...',
        translation: 'Wusstest du, dass Honig niemals verdirbt? ...',
    },
}
```

## Button Injection Content

This array contains objects that define button content and attributes to be injected into button elements on the page.

| Key           | Type    | Description                                      |
|---------------|---------|--------------------------------------------------|
| injectionType | string  | Type of the injection, in this case, 'button'.   |
| selector      | object  | Object defining the selector attribute and value.|
| content       | object  | Object containing original and translated text.  |
| newAttributes | object  | Object containing new attributes to be added.    |

### Example Object

```typescript
{
    injectionType: 'button',
    selector: { attribute: 'name', value: 'add' },
    content: { original: 'Add To Cart', translation: 'In den Warenkorb' },
    newAttributes: {
        ['data-soldout']: 'Ausverkauft',
        ['data-adding']: 'Füge hinzu...',
        ['data-added']: 'Dankeschön!',
    },
}
```

## Date Time Injection Content

This object defines the date and time content to be injected into an element on the page.

| Key           | Type    | Description                                      |
|---------------|---------|--------------------------------------------------|
| injectionType | string  | Type of the injection, in this case, 'dateTime'. |
| selector      | object  | Object defining the selector attribute and value.|

### Example Object

```typescript
{
    injectionType: 'dateTime',
    selector: { attribute: 'id', value: 'current-date-time' },
}
```

## Available Items Content

This object defines dynamic text content to be injected into an element on the page, based on user input.

| Key           | Type    | Description                                      |
|---------------|---------|--------------------------------------------------|
| injectionType | string  | Type of the injection, in this case, 'dynamicText'. |
| selector      | object  | Object defining the selector attribute and value.|
| content       | object  | Object containing original and translated text.  |
| linkedInput   | object  | Object defining the input element selector.      |

### Example Object

```typescript
{
    injectionType: 'dynamicText',
    selector: { attribute: 'id', value: 'available-items' },
    content: {
        original: 'Please select between 1 and 5 products: Current total 4 more items',
        translation: 'Bitte wählen Sie zwischen 1 und 5 Produkten: Aktuelle Gesamtmenge {count} weitere Artikel',
    },
    linkedInput: { selector: 'data-pf-type', value: 'QuantityField' },
}
```

## Usage

All handlers in the `main.js` file interact with the data defined in `contentToInject.ts`. To modify the injected content, update the relevant object in this file.