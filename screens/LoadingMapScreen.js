import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';
import flagImg from '../assets/images/flag-blue.png';
import { inject, observer } from 'mobx-react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import BaseTheme from './../themes/base-theme';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

@inject('locations')
@observer
class LoadingMapScreen extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
     };
  }
  onPressZoomIn() {
    const region_new = {
        latitude:       this.state.region.latitude,
        longitude:      this.state.region.longitude,
        latitudeDelta:  this.state.region.latitudeDelta * 10,
        longitudeDelta: this.state.region.longitudeDelta * 10
        }
     this.setState({region: {...this.state.region, ...region_new}});
   }

  onPressZoomOut() {
    const region_new = {
      latitude:       this.state.region.latitude,
      longitude:      this.state.region.longitude,
      latitudeDelta:  this.state.region.latitudeDelta / 10,
      longitudeDelta: this.state.region.longitudeDelta / 10
        }
     this.setState({region: {...this.state.region,...region_new}});
  
  }
 
  render() {
    let selectedLocations = this.props.locations._locations;
    console.log(this.props.locations.getLocations);
   
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          region={this.state.region}
          onPress={this.onMapPress}
          zoomEnabled = {true}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee" >
         
          { selectedLocations && Object.keys(selectedLocations).map((key, i) =>
              !selectedLocations[key].error && 
              <Marker
              coordinate={{
                latitude:  selectedLocations[key].location['lat'],
                longitude: selectedLocations[key].location['lng']
              }}
               image={flagImg}
               title={ selectedLocations[key].formatted_address || selectedLocations[key].country }
               description={ selectedLocations[key].formatted_address || selectedLocations[key].country } >
             <Callout>
              <View>
                <Text>{ selectedLocations[key].formatted_address || selectedLocations[key].country }</Text>
              </View>
            </Callout>
            </Marker> )} 
        </MapView>
        <View style={styles.buttonContainer}>
           <TouchableOpacity  onPress={()=>{this.onPressZoomIn()}} >
              <EvilIcon name = 'plus'
                accessibilityLabel = 'nav-add'
                size = { 34 }
                color = { BaseTheme.baseColor }/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{this.onPressZoomOut()}} >
              <EvilIcon name = 'minus'
                 accessibilityLabel = 'nav-add'
                 size = { 34 }
                 color = { BaseTheme.baseColor }/>
           </TouchableOpacity>
           <View style={styles.bubble}>
             <Text>my test</Text>
           </View>
        </View>
      </View>
    );
  }
}

LoadingMapScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default LoadingMapScreen;