import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FastImage, {Source} from 'react-native-fast-image';

import BooksSelectors from '@modules/Books/selectors';

import {RootStackNavigationProp} from '@navigation/rootStack';

interface Props {
  bookId: string;
}

const Book: FunctionComponent<Props> = ({bookId}) => {
  const navigation = useNavigation<RootStackNavigationProp<'Books'>>();

  const coverImageUrl = useSelector(
    BooksSelectors.book.getCoverImageUrl(bookId),
  );

  const imgSource: Source = useMemo(() => {
    return {
      uri: coverImageUrl,
    };
  }, [coverImageUrl]);

  const title = useSelector(BooksSelectors.book.getTitle(bookId));

  const author = useSelector(BooksSelectors.book.getAuthor(bookId));

  const publisher = useSelector(BooksSelectors.book.getPublisher(bookId));

  const synopsis = useSelector(BooksSelectors.book.getSynopsis(bookId));

  const onPress = useCallback(() => {
    navigation.navigate('BookDetails', {
      bookId,
    });
  }, [bookId, navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.containerInner}>
        <FastImage
          style={styles.image}
          source={imgSource}
          resizeMode={'cover'}
        />

        <View style={styles.containerInfo}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>

          <Text style={styles.description} numberOfLines={1}>
            {author}
          </Text>

          <Text style={styles.description} numberOfLines={1}>
            {publisher}
          </Text>

          <Text style={styles.description} numberOfLines={5}>
            {synopsis}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },

  containerInner: {
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: (100 * 327) / 224,
  },

  containerInfo: {
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3f51b5',
  },

  description: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#434449',
  },
});
