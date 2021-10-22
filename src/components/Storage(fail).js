/*import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';

const Storage = (props) => {
    const storage = props.storage;
    const [tasks, setTasks] = useState({});

    const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
            console.log(tasks);
        } catch (e) {
            console.error(e);
        }
    };

    const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || '{}'));
        console.log(tasks);
    };

    return (storage === save) ? (
        _saveTasks()
    ) : (
        _loadTasks()
    );
};
export default Storage;*/