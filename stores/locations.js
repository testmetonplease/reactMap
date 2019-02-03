import {
  observable,
  action,
  computed,
  toJS
} from 'mobx';
import { persist} from 'mobx-persist';
import _uniqBy from 'lodash/uniqBy';


class LocationsStore {

  // _locations

  @persist('placeList') @observable _locations = [];

  @action setLocations(data = []) {
    this._locations = data.map(el => el);
  }

  @action removeLocation(loc) {
    this._locations = this._locations.filter(el => el.place_id != loc.place_id);
  }

  @action addLocations(additionItems) {
   // this._locations = _uniqBy(this._locations.concat(additionItems), 'id');
   this._locations.push(additionItems);
  }

  // @action getLocations() {
  //   return this._locations; //.toJS();
  // }

  @computed 
  get getLocations() {
    return toJS(this._locations);
  }

  @action getOneLocation(loc) {
    return toJS(this._locations.find(el => el.place_id === loc.place_id));
  }



  @action removeAllLocations() {
    this._locations = [];
  }

}

const observableLocStore = new LocationsStore();
export default observableLocStore;
