# Cipherem Tokenomics

Simple react app that displays Cipherem tokenomics data in a chart.

## Dependences

- Node v20.3.0
- npm v9.6.7

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/my-chart-app.git
    cd my-chart-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Generating Data

The project includes a script to generate sample data for the chart. This data will be saved as a JSON file in the `public/data` directory.

1. Run the data generation script:

    ```bash
    npm run generate-data
    ```

This will create a `data.json` file in the `public/data` directory with the generated data.


## Render the App

To render the app in development mode, run:

```bash
npm start
```

This will start a development server and open the app in your default web browser, at localhost:3000.

## Building the Project

To build the project for production, run:

```bash
npm run build
```

