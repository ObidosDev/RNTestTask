import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Book from './components/book';
import EmptyState from './components/emptyState';
import SearchField from '@components/searchView';

import BooksActions from '@modules/Books/actions';
import BooksSelectors from '@modules/Books/selectors';
import UtilsProcessStatusSelectors from '@modules/UtilityProcessStatuses/selectors';

const Books: FunctionComponent = () => {
  const safeAreaInsets = useSafeAreaInsets();

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const isLoading = useSelector(
    UtilsProcessStatusSelectors.isActionLoading(BooksActions.BOOKS_LOAD),
  );

  const data = useSelector(BooksSelectors.getBooksIds);

  const onRefresh = useCallback(() => {
    dispatch(
      BooksActions.BOOKS_LOAD.START.create({
        searchQuery,
      }),
    );
  }, [dispatch, searchQuery]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const renderItem: ListRenderItem<typeof data[0]> = useCallback(
    ({item: bookId}) => {
      return <Book bookId={bookId} />;
    },
    [],
  );

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const keyExtractor = useCallback((bookId: string) => bookId, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchField
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
      </View>

      <FlatList
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'on-drag'}
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {
            paddingBottom: 16 + safeAreaInsets.bottom,
          },
        ]}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={<EmptyState searchQuery={searchQuery} />}
        refreshing={isLoading}
        onRefresh={onRefresh}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },

  searchContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },

  separator: {
    height: 16,
  },
});
