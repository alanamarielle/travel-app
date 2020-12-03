// Copy the contents of this file into a new file called keys.ts
// and replace api key and app id with your own
export const API_KEY = 'hello';
export const APP_ID = 'world';

//in the service component the keys will be imported like:
// import { API_KEY, APP_ID } from './keys';

//they will be utilized like:
// getRecipes = (): any => {
//     return this.http.get(this.edamamBaseUrl, {
//       params: {
//         app_key: API_KEY,
//         app_id: APP_ID,
//         q: 'brunch',
//       },
//     });
//   };
