import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CustomDrawerContent(props) {
    const _saveData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('tasks_ficture', jsonValue);
        } catch (e) {
            console.error(e);
        };
    };

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
        }
        _saveData(pickerResult); // 사진 저장
    }  

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="설정"
            />
            <DrawerItem
                label="사진 등록"
                onPress={openImagePickerAsync}
            >
            </DrawerItem>
            <DrawerItemList {...props} />
            <DrawerItem
                label="사원증 폐기"
            ></DrawerItem>
        </DrawerContentScrollView>
    );
}

function reservation() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>오피스 룸 예약 페이지</Text>
      </View>
    );
  }

const Drawer = createDrawerNavigator();

function menuDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen name="오피스 룸 예약(미구현)" component={reservation}/>
        </Drawer.Navigator>
    );
}

export default menuDrawer;