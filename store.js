import { AsyncStorage } from 'react-native'
import { create } from 'mobx-persist'

import locations from './stores/locations';


export default {
   locations
 };

export async function rehydrate() {
  const hydrate = create({storage: AsyncStorage, jsonify: true});
  console.log('rehydrate1');
  await hydrate('locations', locations);
  return Promise.resolve();
}

