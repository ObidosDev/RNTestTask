import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import imgClear from '@images/clear.png';
import imgSearch from '@images/search.png';

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

interface Props {
  style?: StyleProp<ViewStyle>;
  searchQuery: string;
  onSearchQueryChange: (searchQuery: string) => void;
}

const DELAY_FOR_UPDATE = 500; // ms

const SearchField: FunctionComponent<Props> = ({
  style,
  searchQuery,
  onSearchQueryChange,
}) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const {onFocus, onBlur} = useMemo(
    () => ({
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
    }),
    [],
  );

  const onClear = useCallback(() => {
    setValue('');
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery !== value) {
        onSearchQueryChange(value);
      }
    }, DELAY_FOR_UPDATE);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSearchQueryChange, searchQuery, value]);

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
        ]}>
        <Image
          style={styles.searchIcon}
          source={imgSearch}
          resizeMode={'contain'}
        />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder={'Search'}
          placeholderTextColor={'#ccc'}
          autoCapitalize={'none'}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {value ? (
          <TouchableOpacity
            style={styles.clearContainer}
            onPress={onClear}
            hitSlop={HIT_SLOP}>
            <Image
              style={styles.clearIcon}
              source={imgClear}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

SearchField.defaultProps = {
  style: undefined,
};

export default SearchField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  inputContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#bbb',
    backgroundColor: '#fff',
  },
  inputContainerFocused: {
    borderColor: '#3f51b5',
  },

  searchIcon: {
    marginRight: 8,
    width: 24,
    height: 24,
    tintColor: '#bbb',
  },

  input: {
    padding: 0,
    flex: 1,
    fontSize: 16,
    lineHeight: undefined,
    textAlignVertical: 'center',
    color: '#000',
  },

  clearContainer: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
});
