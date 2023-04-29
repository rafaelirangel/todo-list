import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import {useState} from 'react';

export default function App() {
  const [task, setTask] = useState();

  //setting an empty arr to save whatever task the user adds
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    //once the user added the task, the keyboard is hidden again
    Keyboard.dismiss();
    //it's getting the old tasks and appending the new tasks to it 
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  //making a copy of the taskItems so when the user clicks on a task, that task is deleted from the list
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
        {/* Week Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Week tasks</Text>
        <View style={styles.items}>
          {/* Tasks. Passing 'text' as a props so it can be used on Task.js component*/}
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Keyboard avoiding view ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.EnterTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Enter a new task'} value={task} onChangeText={text => setTask(text)} />
        {/* TouchableOpacity is like a button. onPress is calling the handleAddTask function */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

// CSS style  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  tasksWrapper:{
    padding: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 20,
  },

  EnterTaskWrapper:{
    position: 'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  input:{
    padding: 15,
    width: 250,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  addWrapper:{
    backgroundColor: 'lightgrey',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addTask:{},


});
