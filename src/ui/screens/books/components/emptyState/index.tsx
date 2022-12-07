import React, {FunctionComponent, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import BooksActions from '@modules/Books/actions';
import UtilsProcessStatusSelectors from '@modules/UtilityProcessStatuses/selectors';

interface Props {
  searchQuery: string;
}

const EmptyState: FunctionComponent<Props> = ({searchQuery}) => {
  const isLoading = useSelector(
    UtilsProcessStatusSelectors.isActionLoading(BooksActions.BOOKS_LOAD),
  );

  const description = useMemo(() => {
    if (isLoading) {
      return 'Loading...';
    }

    if (searchQuery) {
      return `No books for "${searchQuery}"`;
    }

    return 'No books :( Try to refresh!';
  }, [isLoading, searchQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  description: {
    fontSize: 16,
    color: '#000',
  },
});
