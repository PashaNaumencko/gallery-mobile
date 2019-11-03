import React from 'react';
import { Text, Image, ImageBackground, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhotos } from '../../routines';
import colors from '../../config/color.config';

// import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
// import Icon from 'react-native-vector-icons/AntDesign';

class PhotosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
  }
  

  static itemCountPerPage = 6;

  static navigationOptions = {
    title: 'Gallery'
  };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    const { getPhotos } = this.props;
    const { page } = this.state;
    getPhotos({ page, per_page: PhotosList.itemCountPerPage });

  };

  fetchMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1
      }),
      () => this.onLoad()
    );
  }

  onPhotoPress = (photo) => () => {
    this.props.navigation.push('PhotoPage', { photoInfo: photo });
  };

  onRefresh = () => {
    this.setState({ page: 1 });
    this.onLoad();
  }

  getRenderItem = ({ item }) => {
    const { urls: { regular: imgUrl }, user: { username, profile_image: { medium: avatarUrl } }, description } = item;

    const title = description || 'Untitled';

    return (
      <TouchableOpacity
        onPress={this.onPhotoPress(item)}
      >
        <ImageBackground source={{ uri: imgUrl }} style={styles.image}>
          <View style={styles.infoBox}>
            <View>
              <Image style={styles.avatar} source={{ uri: avatarUrl }} />
              <View style={styles.description}>
                <Text style={styles.descriptionText}>{title}</Text>
                <Text style={styles.descriptionText}>{username}</Text>
              </View>
            </View>
            {/* <LikeIcon /> */}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  getKeyExtractor = item => item.id;

  render() {
    const { photos, loading } = this.props;
    const { page } = this.state;

    const firstLoading = loading && page === 1;
    const moreLoading = loading && page > 1;

    return (
      <View style={styles.container}>
        {firstLoading
          ? <ActivityIndicator style={styles.loader} size="large" color={colors.blue} /> 
          : (
            <>
              <FlatList
                refreshing={firstLoading}
                onRefresh={this.onRefresh}
                data={photos}
                horizontal={false}
                numColumns={2}
                keyExtractor={this.getKeyExtractor}
                renderItem={this.getRenderItem}
                onEndReached={this.fetchMore}
                onEndReachedThreshold={0}
                initialNumToRender={6}
              />
              {moreLoading && <ActivityIndicator style={styles.loader} size="large" color={colors.blue} />}
            </>
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

const mapStateToProps = ({ PhotosList: { photos, loading, fetchMore } }) => ({
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
