# attributesToObject

The `attributesToObject` utility function converts HTML element attributes to an object.

### Usage

```typescript
import attributesToObject from '@/utils/attributesToObject';

const element = document.getElementById('example');
const attributes = attributesToObject(element.attributes);
console.log(attributes);
