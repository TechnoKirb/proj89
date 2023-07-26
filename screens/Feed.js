import React, { Component } from 'react';
import { Text, View } from 'react-native';

renderItem = ({ item: post}) => {
    return <PostCard post = {post} navigation={this.props.navigation}/> 
}

export default class Feed extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Feeds</Text>
            </View>
        )
    }
}