// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCi2_C3xnWTuEgATHvZPQ_DWt52PwqNWWI",
    authDomain: "angubase-e68a6.firebaseapp.com",
    databaseURL: "https://angubase-e68a6.firebaseio.com",
    projectId: "angubase-e68a6",
    storageBucket: "angubase-e68a6.appspot.com",
    messagingSenderId: "792899611689"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
