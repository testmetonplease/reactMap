import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import PT from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

class Btn extends Component {

  renderIcon = btnIconStyle => {

    const { 
      icon,
      hideIcon,
      iconType
    } = this.props;

    if(icon && icon.name && !hideIcon){
      switch(iconType){
        case 'material':
          return (
            <View style={btnIconStyle}>
              <MaterialIcon
                name={icon.name}
                size={icon.size || 30}
                color={icon.color || '#666'}
                style={[icon.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'octicon':
          return (
            <View style={btnIconStyle}>
              <Octicon
                name={icon.name}
                size={icon.size || 30}
                color={icon.color || '#666'}
                style={[icon.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'ionicon':
          return (
            <View style={btnIconStyle}>
              <Ionicon
                name={icon.name}
                size={icon.size || 30}
                color={icon.color || '#666'}
                style={[icon.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'material-community-icons':
          return (
            <View style={btnIconStyle}>
              <MaterialCommunityIcon
                name={icon.name}
                size={icon.size || 30}
                color={icon.color || '#666'}
                style={[icon.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        default:
          return (
            <View style={btnIconStyle}>
              <Icon
                name={icon.name}
                size={icon.size || 30}
                color={icon.color || '#666'}
                style={[icon.style || {}, {flex: 1, textAlign: 'center'}]}
              />
            </View>
          )
        }
    }
  };

  renderIconLeft = btnIconStyle => {

    const { 
      iconLeft,
      hideIconLeft,
      iconTypeLeft
    } = this.props

    if(iconLeft && iconLeft.name && !hideIconLeft){
      switch(iconTypeLeft){
        case 'material':
          return (
            <View style={btnIconStyle}>
              <MaterialIcon
                name={iconLeft.name}
                size={iconLeft.size || 30}
                color={iconLeft.color || '#666'}
                style={[iconLeft.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'octicon':
          return (
            <View style={btnIconStyle}>
              <Octicon
                name={iconLeft.name}
                size={iconLeft.size || 30}
                color={iconLeft.color || '#666'}
                style={[iconLeft.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'ionicon':
          return (
            <View style={btnIconStyle}>
              <Ionicon
                name={iconLeft.name}
                size={iconLeft.size || 30}
                color={iconLeft.color || '#666'}
                style={[iconLeft.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        case 'material-community-icons':
          return (
            <View style={btnIconStyle}>
              <MaterialCommunityIcon
                name={iconLeft.name}
                size={iconLeft.size || 30}
                color={iconLeft.color || '#666'}
                style={[iconLeft.style || {}, {flex: 1, textAlign: 'center'}]}
              /> 
            </View>
          );
        default:
          return (
            <View style={btnIconStyle}>
              <Icon
                name={iconLeft.name}
                size={iconLeft.size || 30}
                color={iconLeft.color || '#666'}
                style={[iconLeft.style || {}, {flex: 1, textAlign: 'center'}]}
              />
            </View>
          )
        }
    }
  };

  render() {

    const { 
      handlerClick,
      disabled,
      btnStyle, 
      textStyle, 
      icon, 
      iconLeft, 
      toggle, 
      toggleDisabled, 
      value,
      viewConatinerStyles
    } = this.props;

    return (
      <View style={[styles.viewConatiner, viewConatinerStyles]}>
        <TouchableOpacity
          style={[styles.btn, btnStyle]}
          onPress={handlerClick}
          disabled={disabled}
        >
          <View style={styles.btnContainer}>
            {iconLeft && iconLeft.name && !this.props.hideIconLeft &&
              this.renderIconLeft([styles.iconContainerLeft, iconLeft.containerStyles])
            }
            <Text
              style={[styles.btnText, textStyle]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            >
              {this.props.text}
            </Text>
            {toggle &&
              <View style={[styles.toggleContainer, this.props.toggleStyle]}>
                <Switch
                  disabled={toggleDisabled || false}
                  value={value}
                  onValueChange={this.props.handlerToggleClick}
                />
              </View>
            }
            {icon && icon.name && !this.props.hideIcon &&
              this.renderIcon([styles.iconContainer, icon.containerStyles])
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Btn.defaultProps = {
  handlerClick: () => {},
  handlerToggleClick: () => {}
};

Btn.propTypes = {
  handlerClick: PT.func,
  handlerToggleClick: PT.func
};

export default Btn