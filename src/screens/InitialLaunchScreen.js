import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';

export class InitialLaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageWrapper}>
          <TouchableOpacity>
            <Text>
              <Text style={styles.language}>Português (Brasil)</Text>
              <Icon name="caret-down" size={25} color={colors.gray1} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            style={styles.instaLogo}
            source={require('../assets/instagramLogo.png')}
          />
          <PrimaryButton
            buttonLabel="Criar Nova Conta"
            buttonBgColor={colors.primary}
            buttonTextColor={colors.secondary}
          />
          <PrimaryButton
            buttonLabel="Login"
            buttonBgColor={colors.secondary}
            buttonTextColor={colors.primary}
          />
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerContentWrapper}>
            <Text style={styles.from}> from </Text>
            <Text style={styles.facebook}> FACEBOOK </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  languageWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '30%',
  },
  footerWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerContentWrapper: {
    borderTopColor: colors.gray1,
    borderTopWidth: 0.5,
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  from: {
    color: colors.gray1,
  },
  facebook: {
    fontWeight: 'bold',
  },
  language: {
    color: colors.gray1,
  },
});
