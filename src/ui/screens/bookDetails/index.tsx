import React, {
  FunctionComponent,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage, {Source} from 'react-native-fast-image';

import BooksActions from '@modules/Books/actions';
import BooksSelectors from '@modules/Books/selectors';
import UtilsProcessStatusSelectors from '@modules/UtilityProcessStatuses/selectors';

import {RouteProp} from '@react-navigation/native';
import {
  RootStackNavigationProp,
  RootStackParamList,
} from '@navigation/rootStack';

interface Props {
  navigation: RootStackNavigationProp<'BookDetails'>;
  route: RouteProp<RootStackParamList, 'BookDetails'>;
}

const BookDetails: FunctionComponent<Props> = ({navigation, route}) => {
  const {bookId} = route.params;

  const safeAreaInsets = useSafeAreaInsets();

  const dispatch = useDispatch();

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

  const isLoading = useSelector(
    UtilsProcessStatusSelectors.isActionLoading(BooksActions.BOOK_LOAD(bookId)),
  );

  const onRefresh = useCallback(() => {
    dispatch(
      BooksActions.BOOK_LOAD(bookId).START.create({
        bookId,
      }),
    );
  }, [bookId, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${title}`,
    });
  }, [navigation, title]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainerStyle,
        {
          paddingBottom: 16 + safeAreaInsets.bottom,
        },
      ]}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }>
      <FastImage style={styles.image} source={imgSource} resizeMode={'cover'} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{`${author}  |  ${publisher}`}</Text>

      <Text style={styles.text}>{synopsis}</Text>
    </ScrollView>
  );
};

export default BookDetails;

const IMAGE_WIDTH = Dimensions.get('window').width / 1.85;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },

  image: {
    alignSelf: 'center',
    width: IMAGE_WIDTH,
    height: (IMAGE_WIDTH * 327) / 224,
  },

  title: {
    marginTop: 24,
    fontSize: 32,
    fontWeight: '600',
    color: '#212529',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },

  text: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },
});
