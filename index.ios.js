'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    }
});

class PropertyFinderApp extends React.Component {
    render() {
        return (
            <Text style={styles.text}>Hello World!</Text>
        )
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
