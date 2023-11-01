import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, COLORS, SHADOWS, SIZES } from './constants/index';

import GoalInput from './components/Input';

export default function App() {
  return (
    <View style={styles.layout}>
      <StatusBar style="light" />

      {/* Header */}
      <Text style={styles.header}> To Do List </Text>

      {/* New Goals View */}
      <View style={styles.taskNew}>
        <Text style={styles.taskNew__text}>New Goals</Text>
      </View>

      {/* Done Goals View */}
      <View style={styles.taskDone}>
        <Text style={styles.taskDone__text}>Done Goals</Text>
      </View>

      {/* Goal Input */}
      <View style={styles.taskInput}>
        <GoalInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.primary,
    paddingVertical: SIZES.xxxLarge,
    paddingHorizontal: SIZES.medium,
    fontSize: SIZES.large,
  },
  taskNew: {
    flex: 5,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.medium,
  },
  taskNew__text: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  taskDone: {
    flex: 2,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.medium,
  },
  taskDone__text: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  taskInput: {
    flex: 2,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.medium,
  },
});
