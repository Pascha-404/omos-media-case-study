# Omos Media Case Study

This project addresses the task of ensuring proper translations and formatting for date, time, and currency on a Shopify site using the StayAI app. The provided functionality includes injecting HTML, CSS, and JavaScript to fix translation and formatting issues.

## Task Summary

We are using the Shopify app StayAI, but its user interface for customers is in English. Although custom translations can be added in the app settings, some translations are missing, and the formats for date and currency are sometimes incorrect. Neither support nor documentation provides assistance, and installing another app is not an option. In the settings, you find three text areas where HTML, CSS, and JavaScript can be added.

### Requirements:
- Ensure that all translations are in German and that the formats for date, time, and currency are displayed correctly.

## Project Usage Instructions

This document provides instructions on how to set up, use, and build the project. It also covers how to add injection data and implement the built JavaScript file into the desired website.

### Setup the Project

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Pascha-404/omos-media-case-study
    ```

2. **Navigate to the project directory**:

    ```bash
    cd omos-media-case-study
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

### Add Injection Data

1. **Open the `contentToInject.ts` file**:

    ```bash
    src/contentToInject.ts
    ```

2. **Add or modify injection data**:

    - To add new text injection data, append an object to the `textInjectionContent` array.
    - To add new button injection data, append an object to the `buttonInjectionContent` array.
    - To add new date-time injection data, modify the `dateTimeInjectionContent` object.
    - To add new available items injection data, modify the `availableItemsContent` object.

    Example of adding a new text injection:

    ```typescript
    {
        injectionType: 'text',
        selector: { attribute: 'data-custom-type', value: 'CustomText' },
        content: {
            original: 'Original text content.',
            translation: 'Translated text content.',
        },
    }
    ```

### Build the Application

1. **Build the project**:

    ```bash
    npm run build
    ```

2. **The built files will be in the `dist` directory**.

### Implement the Built JS File into the Desired Website

1. **Locate the built JavaScript file**:

    ```bash
    dist/main.js
    ```

2. **Copy the `main.js` file to your website's directory**.

3. **Include the `main.js` file in your HTML**:

    Add the following script tag to your HTML file, preferably before the closing `</body>` tag:

    ```html
    <script src="path/to/main.js"></script>
    ```

    Replace `path/to/main.js` with the actual path where you copied the `main.js` file.

4. **Deploy your website**.

By following these instructions, you can set up the project, add or modify injection data, build the application, and implement the built JavaScript file into your desired website.

### Run the Documentation Server

To serve the documentation locally, use:

```bash
npm run docs:dev
```

### Running Unit Tests

To run the unit tests, use the following command:

```bash
npm run test:unit
```

### Running E2E Tests

To run the E2E tests, use the following command:

```bash
npm run test:e2e
```

To run the E2E tests in development mode, use the following command:

```bash
npm run test:e2e:dev
```

## Project Structure

```plaintext
omos-media-case-study/
├── cypress
│   ├── e2e
│   │   ├── buttonInjection_spec.cy.ts
│   │   ├── dateTimeInjection_spec.cy.ts
│   │   ├── dynamicTextInjector.cy.ts
│   │   └── textInjection_spec.cy.ts
│   └── screenshots
├── docs
│   ├── components
│   │   ├── button-injection.md
│   │   ├── date-time-injector.md
│   │   ├── dynamic-text-injector.md
│   │   ├── README.md
│   │   └── text-injector.md
│   ├── contentToInject.ts
│   │   └── README.md
│   ├── main.js
│   │   └── README.md
│   ├── README.md
│   ├── tests
│   │   ├── button-injector-test.md
│   │   ├── date-time-injector-test.md
│   │   ├── dynamic-text-injector-test.md
│   │   ├── README.md
│   │   └── text-injector-test.md
│   └── utils
│       ├── attributes-to-object.md
│       ├── injections.md
│       └── README.md
├── index.html
├── package.json
├── public
├── README.md
└── src
    ├── components
    │   ├── ButtonInjecton.vue
    │   ├── DateTimeInjector.vue
    │   ├── DynamicTextInjector.vue
    │   ├── __tests__
    │   │   ├── ButtonInjection.spec.ts
    │   │   ├── DateTimeInjector.spec.ts
    │   │   ├── DynamicTextInjector.spec.ts
    │   │   ├── injectionsUtils.spec.ts
    │   │   └── TextInjector.spec.ts
    │   └── TextInjector.vue
    ├── contentToInject.ts
    ├── main.ts
    ├── types.ts
    └── utils
        ├── attributesToObject.ts
        ├── index.ts
        └── injections.ts

```

## Documentation

The documentation for this project is built using VuePress. The configuration can be found in the `docs/.vuepress/config.js` file.

## License

This project is licensed under the MIT License.
