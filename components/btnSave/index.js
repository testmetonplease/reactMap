import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Btn extends Component {

  state = {
    handlerClick: this.props.handlerClick || (() => {}),
    text: this.props.text || 'SAVE',
    style: this.props.style || {}
  };

  render() {
    return (
      <View style={[styles.wrap, this.state.style]}>
        <TouchableOpacity
          style={styles.container}
          onPress={this.state.handlerClick}
        >
          <Text
            style={styles.text}
          >
            {this.state.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
