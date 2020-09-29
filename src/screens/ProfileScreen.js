import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeaderWrapper}>
            <Image
              style={styles.plus}
              source={require('../assets/images/profilePage/plus.jpg')}
            />
            <Text style={styles.headerText}>Jefferson_andra10</Text>
            <Icon size={20} name="caret-down" />
          </View>
          <View style={styles.containerBars}>
            <Icon size={30} name="bars" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.ProfileSectionWrapper}>
            <View style={styles.ImageSection}>
              <Image
                style={styles.instaImageBorder}
                source={require('../assets/images/profilePage/storiescircle.png')}
              />
              <Image
                style={styles.userImage}
                source={require('../assets/images/jeff.png')}
              />
              <Text style={styles.userName}>Jefferson Andrade</Text>
            </View>
            <View style={styles.followersCountSection}>
              <View style={styles.followingCount}>
                <View>
                  <Text style={styles.countTitle}>334</Text>
                  <Text style={styles.countSubTitle}>Publicações</Text>
                </View>
                <View>
                  <Text style={styles.countTitle}>211K</Text>
                  <Text style={styles.countSubTitle}>Seguidores</Text>
                </View>
                <View>
                  <Text style={styles.countTitle}>134</Text>
                  <Text style={styles.countSubTitle}>Seguindo</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.moreInfoWrapper}>
            <TouchableOpacity style={styles.messagesButtonWrapper}>
              <Text style={styles.mesagesTitle}>Editar Perfil</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Destaques dos stories</Text>
            <Text>Mantenha seus stories favoritos no seu perfil</Text>
          </View>
          <ScrollView style={styles.storiesWrapper} horizontal={true}>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../assets/images/profilePage/plus1.jpg')}
              />
              <Text style={styles.storyProfName}>Novo</Text>
            </View>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../assets/images/profilePage/circle.png')}
              />
            </View>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../assets/images/profilePage/circle.png')}
              />
            </View>
            <View>
              <Image
                style={styles.storiesImage}
                source={require('../assets/images/profilePage/circle.png')}
              />
            </View>
          </ScrollView>

          <View style={styles.viewIconsWrapper}>
            <Image
              style={styles.viewIcon}
              source={require('../assets/images/profilePage/grid.jpg')}
            />
            <Image
              source={require('../assets/images/profilePage/profielplus.png')}
            />
          </View>

          <ScrollView>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/face.png')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/winder.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/vit.jpg')}
              />
            </View>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/5.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/6.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/7.jpg')}
              />
            </View>
          </ScrollView>
        </ScrollView>
        <View style={styles.footer}>
          <Icon color={colors.gray} size={25} name="home" />
          <Icon color={colors.black} size={25} name="search" />
          <Icon color={colors.gray} size={25} name="plus-square" />
          <Icon color={colors.gray} size={25} name="heart" />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  containerBars: {
    margin: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    backgroundColor: colors.secondary,
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  ProfileSectionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageSection: {
    display: 'flex',
    flex: 1,
    padding: 5,
  },
  followersCountSection: {
    display: 'flex',
    flex: 2,
  },
  instaImageBorder: {
    width: 130,
    height: 130,
  },
  userImage: {
    position: 'absolute',
    width: 115,
    height: 115,
    borderRadius: 70,
    margin: 13,
  },
  followingCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  messagesButtonWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,
    width: '95%',
    padding: 2,
  },
  ButtonItemWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,

    padding: 4,
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  mesagesTitle: {
    fontWeight: '400',
    textAlign: 'center',
  },
  countTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  countSubTitle: {
    color: colors.gray,
    textAlign: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moreInfoWrapper: {
    marginLeft: 15,
  },
  introText: {
    fontSize: 16,
  },
  urlText: {
    color: colors.blue,
  },
  storiesImage: {
    borderRadius: 70,
    width: 70,
    height: 70,
    borderColor: colors.gray1,
    borderWidth: 1,
    marginRight: 10,
  },
  storiesWrapper: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
  },
  storyProfName: {
    textAlign: 'center',
    marginRight: 15,
  },
  viewIconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imagesWrapper: {
    flexDirection: 'row',
  },
  galleryIMage: {
    display: 'flex',
    flex: 1,
    height: 200,
    margin: 1,
  },
  footerIcon: {
    width: 60,
    height: 60,
  },
  viewIcon: {
    marginTop: '3%',
  },
  plus: {
    width: 40,
    height: 40,
    marginRight: '5%',
  },
  text: {
    fontWeight: 'bold',
    marginTop: '3%',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
});
