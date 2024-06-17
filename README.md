# Flight Manager

### Architecture and file structure

This web app is being developed following MVVM architecture.

### Additional Details:
- **public/**: This folder contains the HTML file so you can tweak it, for example, to set the page title.
- **src/**: This is the folder where you will spend most of your time, it contains the main source code for your application.
    - **commons/**: This folder is for reusable React components, types and classes.
    - **features/**: It contains all available features in our app.
      - **booking**/
        - **passenger**/: Contains edit.tsx (View), usePassengerDetails.tsx (ViewModel) and passenger.ts (Model)
    - **hooks/**: All reusable hooks and special functions.
    - **App.tsx**: The main component of your application.
    - **index.tsx**: The Typescript entry point of your application.
- **package.json**: Contains metadata about your project and lists the dependencies.

### How to run the app locally
- Go to the app folder `flight-manager-webapp`
- Run `npm install`
- Run `npm run serve-api` to create a fake api
- Run `npm run start`

### What is missing / Code smell
- usePassengerDetails.test.tsx tests need to be reviewed to take rerender into consideration
- Errors and validations are not being saved in state of usePassengerDetails
- Move api endpoint from usePassengerDetails.tsx to environment variable or settings