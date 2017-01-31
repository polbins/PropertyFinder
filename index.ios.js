'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Text
} from 'react-native';

import SearchPage from './SearchPage';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});

class PropertyFinderApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage,
                }}/>
            )
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
