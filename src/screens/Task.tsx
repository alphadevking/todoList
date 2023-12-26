import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from '../components/Task';
import { TaskStyles } from '../styles';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TaskScreen() {
    const [task, setTask] = useState<string>('');
    const [taskItems, setTaskItems] = useState<string[]>([]);
    const [editingTask, setEditingTask] = useState<boolean>(false);
    const [editingIndex, setEditingIndex] = useState<number>(0);

    // Function to load tasks from AsyncStorage
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('@tasks');
            const loadedTasks = storedTasks ? JSON.parse(storedTasks) : [];
            setTaskItems(loadedTasks);
        } catch (error) {
            console.error('Failed to load tasks', error);
        }
    };

    // Load tasks when the component mounts
    useEffect(() => {
        loadTasks();
    }, []);

    // Function to save tasks to AsyncStorage
    const saveTasks = async (tasks: string[]) => {
        try {
            await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Failed to save tasks', error);
        }
    };

    // Save tasks whenever they change
    useEffect(() => {
        saveTasks(taskItems);
    }, [taskItems]);

    // Function to clear tasks after a minute
    useEffect(() => {
        const timer = setTimeout(() => setTaskItems([]), 60000);
        return () => clearTimeout(timer);
    }, []);

    // Function to handle adding tasks
    const handleAddTask = () => {
        Keyboard.dismiss();
        if (task.trim()) {
            setTaskItems([...taskItems, task]);
            setTask('');
        }
    };

    // Function to remove a task
    const deleteTask = (index: number) => {
        const newTaskItems = [...taskItems];
        newTaskItems.splice(index, 1);
        setTaskItems(newTaskItems);
    };

    const editTask = (index: number, newText: string) => {
        if (newText.trim() && editingTask === true) {
            const updatedTaskItems = [...taskItems];
            updatedTaskItems[index] = newText.trim();
            setTaskItems(updatedTaskItems);
            setTask('');
            setEditingTask(false)
        } else {
            setEditingTask(false)
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={TaskStyles.container}>
                {/* Added this scroll view to enable scrolling when list gets longer than the page */}
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                >

                    {/* Today's Tasks */}
                    <View style={TaskStyles.tasksWrapper}>
                        <Text style={TaskStyles.sectionTitle}>Today's tasks</Text>
                        <View style={TaskStyles.items}>
                            {taskItems.map((item, index) => {
                                const rightSwipeActions = () => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => deleteTask(index)}
                                            style={[TaskStyles.buttonPrimary, {marginLeft: 5}]}
                                        >
                                            <Text style={TaskStyles.buttonText}>Delete</Text>
                                        </TouchableOpacity>
                                    );
                                };

                                const leftSwipeActions = () => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setEditingTask(true)
                                                setTask(item);
                                                setEditingIndex(index);
                                            }}
                                            style={[TaskStyles.buttonPrimary, { marginRight: 5 }]}
                                        >
                                            <Text style={TaskStyles.buttonText}>Edit</Text>
                                        </TouchableOpacity>
                                    );
                                };

                                return (
                                    <Swipeable
                                        key={index}
                                        renderLeftActions={leftSwipeActions}
                                        renderRightActions={rightSwipeActions}
                                    >
                                        <Task text={item} />
                                    </Swipeable>
                                );
                            })}
                        </View>

                    </View>

                </ScrollView>

                {/* Write a task */}
                {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={TaskStyles.writeTaskWrapper}
                >
                    <TextInput style={TaskStyles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => editingTask ? editTask(editingIndex, task) : handleAddTask()}>
                        <View style={TaskStyles.addWrapper}>
                            <Text style={TaskStyles.addText}>{editingTask ? '✔️' : '➕'}</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
        </GestureHandlerRootView>
    );
}
