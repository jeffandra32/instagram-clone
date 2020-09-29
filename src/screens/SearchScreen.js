import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/Colors';

const DATA = [
  {
    id: '2154',
    Title: 'minsaude',
    subTitle: 'Ministério da Saude',
    img: require('./../assets/images/min.jpg'),
  },
  {
    id: '7485',
    Title: 'unicefBrasil',
    subTitle: 'UNICEF Brasil',
    img: require('./../assets/images/unicef.png'),
  },
];

const DATA_RECENTE = [
  {
    id: '1254',
    Title: 'windersonnunes',
    subTitle: 'Winderson Nunes Boi',
    img: require('./../assets/images/winder.jpg'),
  },
  {
    id: '4541',
    Title: 'luisasonza',
    subTitle: 'Luiza Sonza Safada',
    img: require('./../assets/images/luiz.jpg'),
  },
  {
    id: '4546',
    Title: 'vitao',
    subTitle: 'Vitão Talarico',
    img: require('./../assets/images/vit.jpg'),
  },
  {
    id: '1245',
    Title: 'senaitalo',
    subTitle: 'Italo Sena',
    img: require('./../assets/images/italo.png'),
  },
  {
    id: '5458',
    Title: 'gabigol',
    subTitle: 'Gabriel Barbosa',
    img: require('./../assets/images/gabi.jpg'),
  },
];
export class SearchScreen extends Component {
  renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.img} />
      <View style={styles.itemRightWrapper}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.topHeaderWrapper}>
            <View style={styles.headerTopLeftWrapper}>
              <Icon size={25} name="arrow-left" />
              <TextInput placeholder="Pesquisar" />
            </View>
          </View>
          <View style={styles.subHeaderWrapper}>
            <TouchableOpacity style={styles.selectedCategoryItem}>
              <Text style={styles.titleSelected}>PRINCIPAIS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>CONTAS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>TAGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.title}>LOCAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.titleContainer}>Enfrentamento da COVID-19</Text>
        </View>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={this.renderItem}
        />

        <View style={styles.containerTitle}>
          <Text style={styles.titleContainer}>Recentes</Text>
        </View>
        <FlatList
          data={DATA_RECENTE}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={this.renderItem}
        />
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

export default SearchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  containerTitle: {
    display: 'flex',
    margin: '2%',
  },
  titleContainer: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerWrapper: {
    display: 'flex',
  },
  topHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 10,
  },
  headerTopLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '5%',
  },
  subHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  selectedCategoryItem: {
    display: 'flex',
    flex: 1,
    padding: 5,
    alignItems: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  categoryItem: {
    display: 'flex',
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: colors.gray,
  },
  titleSelected: {
    fontWeight: '600',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderBottomWidth: 2,
  },
  itemRightWrapper: {
    marginLeft: 10,
  },
  subTitle: {
    color: colors.gray,
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
