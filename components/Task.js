import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, Feather, EvilIcons, COLORS, SHADOWS, SIZES } from '../constants/index';

const Task = (props) => {
  return (
    <View style={styles.task}>
      <View>
        <Text style={styles.task__text}> {props.text} </Text>
      </View>
      <View>
        <Feather name="trash" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.medium,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
    borderRadius: SIZES.small,
  },
  task__text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default Task;
