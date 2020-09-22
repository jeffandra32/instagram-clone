import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
import SearchBox from '../components/SearchBox';

const DATA = [
  {id: '1', title: 'Inglês', subTitle: 'USA'},
  {id: '2', title: 'Espanhol', subTitle: 'Argentina'},
  {id: '3', title: 'Japonês', subTitle: 'Japão'},
  {id: '4', title: 'Mandarin', subTitle: 'China'},
];
export class InitialLaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
  }

  handleClick = () => {
    this.setState({languageModalVisible: !this.state.languageModalVisible});
  };
  render() {
    const {languageModalVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>
              <Text>English (United States) </Text>
              <Icon name="caret-down" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.instaLogo}
            source={require('../assets/images/instagramLogo.png')}
          />
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.primary}
              color={colors.secondary}
              text={'Create New Account'}
            />
          </View>
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.secondary}
              color={colors.primary}
              text={'Login'}
            />
          </View>
        </View>
        <View style={styles.fbLogoContainer}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.from}>from</Text>
            <Text style={styles.facebook}>FACEBOOK</Text>
          </View>
        </View>
        <Modal visible={languageModalVisible} transparent={true}>
          <View
            style={[
              styles.modalContainer,
              languageModalVisible
                ? {backgroundColor: 'rgba(0,0,0,0.5)'}
                : null,
            ]}>
            <View style={styles.modalContentContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>Selecione seu idioma</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.searchBoxWrapper}>
                <SearchBox />
              </View>
              <View style={styles.underLine} />

              <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <View style={styles.languageWrapper}>
                    <Text style={styles.langTitle}>{item.title}</Text>
                    <Text style={styles.subLanguage}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
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
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 15,
  },
  fbLogoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '30%',
  },
  bottomWrapper: {
    borderTopWidth: 0.5,
    borderColor: colors.gray,
    width: '100%',
    padding: 10,
  },
  from: {
    textAlign: 'center',
    color: colors.gray,
  },
  facebook: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    display: 'flex',
    flex: 1,
  },
  modalContentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secondary,
    marginLeft: '10%',
    marginRight: '10%',
  },
  titleWrapper: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  underLine: {
    height: 0.5,
    backgroundColor: colors.gray1,
  },
  searchBoxWrapper: {
    display: 'flex',
    marginBottom: 30,
  },
  languageWrapper: {
    marginLeft: 15,
    marginBottom: 10,
  },
  subLanguage: {
    color: colors.gray,
    fontSize: 16,
  },
  langTitle: {
    fontSize: 20,
  },
  ButtonItemContainer: {
    marginBottom: 10,
    width: '100%',
  },
});
