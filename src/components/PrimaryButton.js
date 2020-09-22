import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';

export class PrimaryButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {color, buttonBg, text} = this.props;
    const buttonText = text;
    const buttonBgColor = buttonBg;
    const labelColor = color;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: buttonBgColor}]}>
          <Text style={[styles.text, {color: labelColor}]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PrimaryButton;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 16,
  },
});
