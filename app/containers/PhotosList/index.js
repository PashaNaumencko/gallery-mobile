import React from 'react';
import { Text, Image, ImageBackground, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhotos } from '../../routines';


import styles from './styles';

class PhotosList extends React.Component {
  static navigationOptions = {
    title: 'Gallery'
  };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    const { getPhotos } = this.props;
    getPhotos();
  };

  onPhotoPress = (photo) => () => {
    this.props.navigation.push('PhotoPage', { photoInfo: photo });
  };

  getRenderItem = ({ item }) => {
    const { urls: { regular: imgUrl }, user: { username, profile_image: { medium: avatarUrl } }, description } = item;
    console.log(avatarUrl);
    return (
      <TouchableOpacity
        onPress={this.onPhotoPress(item)}
      >
        <ImageBackground source={{ uri: imgUrl }} style={styles.image}>
          <View style={styles.infoBox}>
            <View>
              <Image style={styles.avatar} source={{ uri: avatarUrl }} />
              <View style={styles.description}>
                <Text>{description}</Text>
                <Text>{username}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  getKeyExtractor = item => item.id;

  render() {
    const { photos, loading } = this.props;

    return (
      <View style={styles.container}>
        {loading 
          ? <ActivityIndicator style={styles.loader} size="large" color="#0000ff" /> 
          : (
            <FlatList
              refreshing={loading}
              onRefresh={this.onLoad}
              data={photos}
              horizontal={false}
              numColumns={2}
              keyExtractor={this.getKeyExtractor}
              renderItem={this.getRenderItem}
            />
          )
        }
      </View>
    );
  }
}

PhotosList.propTypes = {
  navigation: PropTypes.object,
  photos: PropTypes.object,
  loading: PropTypes.bool,
  getPhotos: PropTypes.func.isRequired
};

const mapStateToProps = ({ PhotosList: { photos, loading } }) => ({
  photos,
  loading
});

const mapDispatchToProps = {
  getPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosList);