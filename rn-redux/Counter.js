import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as counterAction from './actionCreators';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', this.props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                }}>
                <Button title='INC' onPress={this.props.inc} />
                <Text style={{ fontSize: 65 }}> {this.props.ctr} </Text>
                <Button title='INC' onPress={this.props.inc} />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        ctr: state.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inc: () => dispatch(counterAction.incrementActionCreator()),
        dec: () => dispatch(counterAction.decrementActionCreator()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);