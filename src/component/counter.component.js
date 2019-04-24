import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {Button, Flex} from '@ant-design/react-native';

const propTypes = {
    counterActions: PropTypes.object,
    counter: PropTypes.object.isRequired
};

class CounterComponent extends Component {
    render() {
        const {counterActions, counter} = this.props;
        return (
            <Flex>
                <Flex.Item>
                    <Button onPress={counterActions.decrement}>减</Button>
                </Flex.Item>
                <Flex.Item>
                    <Text style={styles.counterText}>{counter.count}</Text>
                </Flex.Item>
                <Flex.Item>
                    <Button onPress={counterActions.increment}>加</Button>
                </Flex.Item>
            </Flex>
        );
    }
}

const styles = StyleSheet.create({
    counterText: {
        textAlign: 'center',
    }
});

CounterComponent.propTypes = propTypes;

export default CounterComponent;
