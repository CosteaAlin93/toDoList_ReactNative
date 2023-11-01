import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Feather, EvilIcons, COLORS, SHADOWS, SIZES } from './constants/index';

import { useState } from 'react';

import GoalInput from './components/Input';
import Task from './components/Task';

export default function App() {
  //   state for new goals
  const [newGoals, setNewGoals] = useState([{ text: 2, id: 3 }]);

  //   state for done goals
  const [doneGoals, setDoneGoals] = useState([{ text: 3, id: 4 }]);

  function addNewGoal(enteredText) {
    setNewGoals((newGoals) => [...newGoals, { text: enteredText, id: Math.random().toString() }]);
  }

  function deleteNewGoal(id) {
    setNewGoals((newGoals) => newGoals.filter((task) => task.id !== id));
  }

  function addDoneGoal(id) {
    const doneGoal = newGoals.find((goal) => goal.id === id);
    console.log(doneGoal);

    if (doneGoal) {
      setNewGoals((newGoals) => newGoals.filter((task) => task.id !== id));
    }
    setDoneGoals((currentDoneGoals) => [...currentDoneGoals, doneGoal]);
  }

  function deleteDoneGoal(id) {
    setDoneGoals((doneGoals) => doneGoals.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.layout}>
      <StatusBar style="light" />

      {/* Header */}
      <Text style={styles.header}> To Do List </Text>

      {/* New Goals View */}
      <View style={styles.taskNew}>
        <View>
          <Text style={styles.taskNew__text}>New Goals</Text>
        </View>
        <View>
          <FlatList
            data={newGoals}
            renderItem={(itemData) => {
              return (
                <Task
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDelete={deleteNewGoal}
                  onDone={addDoneGoal}
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>

      {/* Done Goals View */}
      <View style={styles.taskDone}>
        <View>
          <Text style={styles.taskDone__text}>Done Goals</Text>
        </View>
        <View>
          <FlatList
            data={doneGoals}
            renderItem={(itemData) => {
              return (
                <Task
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDelete={deleteDoneGoal}
                  onDone={addDoneGoal}
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>

      {/* Goal Input */}
      <View style={styles.taskInput}>
        <GoalInput onAddGoal={addNewGoal} />
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
    paddingVertical: SIZES.large,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.medium,
    justifyContent: 'center',
  },
});
