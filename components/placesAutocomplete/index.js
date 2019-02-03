import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import BaseTheme from './../../themes/base-theme';

import styles from './styles';
import config from '../../config';

const ADDRESS_COMPONENTS = [
  'postal_code',
  'street_number',
  'route',
  'sublocality',
  'locality',
  'administrative_area_level_3',
  'administrative_area_level_2',
  'administrative_area_level_1',
  'country'
];

export default class PlacesAutocomplete extends Component {

  formatResult(details) {
    if (!details) {
      return this.props.onPressFormatted(null);
    }
    let formattedData = {
      data: {...details},
      place_id: details.place_id,
      formatted_address: details.formatted_address,
      location: details.geometry.location
    };

    if (details.address_components) {
      details.address_components.forEach(address => {
        address.types.forEach(type => {
          let address_type = ADDRESS_COMPONENTS.includes(type)
          if (ADDRESS_COMPONENTS.includes(type) && !formattedData[type]) {
            formattedData[type] = address.long_name;
          }
        });
      });
    }

    return this.props.onPressFormatted(formattedData);
  }

  onPress(data, details = null) {
    this.props.onPressFormatted && this.formatResult(details);
  };

  renderDescription = (description) => {
    return (
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
      >
        {description}
      </Text>
    );
  };

  render() {
    return (
      <View style={styles.locationSearchContainer}>
        <View style={styles.leftIconContainer}>
          <Icon
            name={'search'}
            size={20}
            color={BaseTheme.baseColor}
            style={styles.leftIcon}
          />
        </View>
        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            enablePoweredByContainer={false}
            placeholder={this.props.placeholder || 'Search'}
            text={''}
            query={{
              key: config.googleApi.googlePlacesApi.apiKey,
              language: 'en',
              components: 'country:US',
              types: this.props.queryTypes//'address' //'(cities)' //'(regions)', 'geocode'
            }}
            onPress={(data, details) => this.onPress(data, details)}
            styles={styles}
            currentLocationLabel="Current location"
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{}}
            renderDescription={row => this.renderDescription(row.description)}
            //filterReverseGeocodingByTypes={['locality', 'sublocality', 'postal_code', 'country', 'administrative_area_level_1' , 'administrative_area_level_2', 'administrative_area_level_3']} //['locality', 'administrative_area_level_3']
            //filterReverseGeocodingByTypes={['street_address', 'street_number']}
            debounce={300}
            {...this.props}
          />
        </View>
      </View>
    );
  }
}
