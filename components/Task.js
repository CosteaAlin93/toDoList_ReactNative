import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, Feather, EvilIcons, COLORS, SHADOWS, SIZES } from '../constants/index';

const Task = (props) => {
  return (
    <View style={styles.task}>
      <View style={styles.task__left}>
        <Feather
          name="check-circle"
          size={20}
          color={COLORS.accent}
          onPress={props.onDone.bind(this.id, props.id)}
        />
        <Text style={styles.task__text}> {props.text} </Text>
      </View>
      <View>
        <Feather
          name="trash"
          size={20}
          color={COLORS.accent}
          onPress={props.onDelete.bind(this.id, props.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.xxSmall,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
    borderRadius: SIZES.small,
  },
  task__left: {
    flexDirection: 'row',
    gap: SIZES.small,
  },
  task__text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default Task;
