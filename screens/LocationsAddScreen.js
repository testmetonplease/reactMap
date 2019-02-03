import React, {
  Component
} from 'react';
import {
  observer,
  inject
} from 'mobx-react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

import PlacesAutocomplete from '../components/placesAutocomplete';
import ListButton from '../components/listButton';
import SaveBtn from '../components/btnSave';

import styles from '../styles';
import BaseTheme from './../themes/base-theme';


@inject('locations')
@observer
export default class LocationsAddScreen extends Component {

  searchLocation(location) {
    
     this.props.locations.addLocations(location);
     return location;
   
  }

  processChosenLocation(data) {
    return this.searchLocation(data);
    }

  toggleLocation(location) {
    let toggledLocation = { ...location };
    this.props.locations.removeLocation(toggledLocation);
   }

  goBack = () => {
      this.props.navigation.goBack();
  };

  render() {
    let selectedLocations = this.props.locations._locations;
    console.log(this.props.locations.getLocations);
   
    let queryTypes = 'address';
    let title = 'Add Address';
    const placeholder = 'Enter Address';
    
    let text = 'You will only see locations of the selected areas';
    return (
      <View style = { styles.container } >
        <ScrollView bounces = { false } >
          <View style = { styles.accAddLocationTextContainer }> 
            <Text style = {styles.accAddLocationText }>{text}</Text>
          </View> 
          <PlacesAutocomplete filterReverseGeocodingByTypes = { ['street_address'] }
            placeholder = { placeholder }
            queryTypes = { queryTypes }
            fetchDetails = { true }
            onPressFormatted = { (data) => this.processChosenLocation(data) }/>
    
            { selectedLocations && Object.keys(selectedLocations).map((key, i) =>
              !selectedLocations[key].error && 
              <View style = {styles.accListBox }  key = {`locSearch-${i}` } >
                 <ListButton text = { selectedLocations[key].formatted_address || selectedLocations[key].country }
                   textStyle = {{ color: '#333', paddingRight: 16, paddingLeft: 4, fontSize: 16 } }
                   iconType = 'material-community-icons'
                   icon = {{
                     name: 'check-circle',
                     color: BaseTheme.baseBreezeColor,
                     size: 30
                   }}
                   iconLeft = {{ name: 'location-on', color: '#bfc0c3', size: 28 }}
                   iconTypeLeft = 'material'
                   handlerClick = { () => this.toggleLocation(selectedLocations[key])}/> 

             </View> )
           } 
        </ScrollView> 
        <View
          style={{
           borderBottomColor: 'red',
           borderBottomWidth: 4,
          }}/>
          {/* <SaveBtn
          text = 'SHOW'
          style={{marginTop: 20}}
          handlerClick={this.goBack}
        /> */}

       </View>
    );
  }
}

const stylesLocal = StyleSheet.create({
  emptyView: {
    height: 50
  }
});

