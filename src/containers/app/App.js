import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {AppNav}  from '../navigators/RootNavigator';

// App: root component
export class App extends Component {
    render() {
        return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    <AppNav />
                </View>
           
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});

export default App;