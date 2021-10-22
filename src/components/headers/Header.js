import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import dreamPass_x64 from '../../../assets/images/dreamPass_x64.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../colors/Theme';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import menuDrawer from '../drawNavi/DrawerNavigation';

const HeaderInput = styled.View`
          width: ${({ width }) => width - 20}px;
      `;
// 코드 정리
/*
menu = (props) => {
   const nonMenu = props.nonMenu;
   if(nonMenu) return {
       <view>
       <MaterialCommunityIcons 
                   size = {75} 
                   name = "menu"
                   color = {theme.mono800} 
          />
          </view>
   }; else return {
       <MaterialCommunityIcons 
                   size = {75} 
                   name = "menu"
                   color = {theme.mono800} 
                   />

   }
};
*/
/*function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home"  />
        <Drawer.Screen name="Profile"  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/

const Header = ({navigation, ...props}) => {
    const width = useWindowDimensions().width;
    const title = props.title;
    const nonMenu = props.nonMenu;
    const onPress = props.onPress;

    return nonMenu === 'nonMenu' ? (
        <HeaderInput style={styles.container} width={width}>
            <Image source={dreamPass_x64}
                style={{ width: 64, height: 67, marginTop: 10 }} />
            <Text style={{ fontSize: 20, color: theme.mono900 }}>{'\n'}{title}</Text>
            <MaterialCommunityIcons
                size={75}
                name="menu"
                color={theme.mono200} 
            />
        </HeaderInput>
    ) : (
        <HeaderInput style={styles.container} width={width}>
            <Image source={dreamPass_x64}
                style={{ width: 64, height: 67, marginTop: 10 }} />
            <Text style={{ fontSize: 20, color: theme.mono900 }}>{'\n'}{title}</Text>
            <MaterialCommunityIcons
                size={75}
                name="menu"
                color={theme.mono700} 
                onPress={onPress}
            >
            <menuDrawer/>
            </MaterialCommunityIcons>
        </HeaderInput>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
    },
});

export default Header;