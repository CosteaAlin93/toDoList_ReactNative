import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Feather, EvilIcons, COLORS, SHADOWS, SIZES } from '../constants/index';

import { useState } from 'react';

const GoalInput = (props) => {
  // state for TextInput content
  const [enteredText, setEnteredText] = useState('');

  function enteredTextHandler(inputedText) {
    setEnteredText(inputedText);
  }

  function addNewGoal() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <View style={styles.component}>
      <TextInput
        style={styles.component__textInput}
        placeholder="Enter your goal"
        placeholderTextColor={COLORS.primary}
        onChangeText={enteredTextHandler}
        value={enteredText}
      />
      <TouchableOpacity onPress={addNewGoal}>
        <View style={styles.component__touchable}>
          <Feather name="plus" size={52} color={COLORS.secondary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.xSmall,
  },
  component__textInput: {
    borderWidth: 3,
    borderColor: COLORS.secondary,
    padding: SIZES.xSmall,
    color: COLORS.primary,
    borderRadius: SIZES.small,
    flex: 1,
  },
  component__touchable: {
    alignItems: 'baseline',
    justifyContent: 'center',
  },
});

export default GoalInput;
