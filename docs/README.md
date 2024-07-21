# Omos Media Case Study

This project addresses the task of ensuring proper translations and formatting for date, time, and currency on a Shopify site using the StayAI app. The provided functionality includes injecting HTML, CSS, and JavaScript to fix translation and formatting issues.

## Task Summary

We are using the Shopify app StayAI, but its user interface for customers is in English. Although custom translations can be added in the app settings, some translations are missing, and the formats for date and currency are sometimes incorrect. Neither support nor documentation provides assistance, and installing another app is not an option. In the settings, you find three text areas where HTML, CSS, and JavaScript can be added.

### Requirements:
- Ensure that all translations are in German and that the formats for date, time, and currency are displayed correctly.

## Getting Started

To get started with this project, follow these steps:

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build the Application

To build the application for production, use:

```bash
npm run build
```

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
│   └── e2e
│       ├── buttonInjection_spec.cy.ts
│       ├── dateTimeInjection_spec.cy.ts
│       ├── dynamicTextInjector.cy.ts
│       └── textInjection_spec.cy.ts
├── docs
│   └── README.md
├── index.html
├── package.json
├── public
├── README.md
└── src
    ├── components
    │   ├── DateTimeInjector.vue
    │   ├── DynamicTextInjector.vue
    │   ├── __tests__
    │   │   ├── DateTimeInjector.spec.ts
    │   │   ├── DynamicTextInjector.spec.ts
    │   │   ├── injectionsUtils.spec.ts
    │   │   └── TextInjector.spec.ts
    │   └── TextInjector.vue
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
