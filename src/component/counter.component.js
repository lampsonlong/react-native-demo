import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View } from 'react-native';
import {Button, WingBlank, WhiteSpace, Flex} from '@ant-design/react-native';

export default class CounterComponent extends Component {
  static propTypes = {
    decrementFn: PropTypes.func.isRequired,
    incrementFn: PropTypes.func.isRequired,
  };

  render() {
    const { decrementFn, incrementFn, counter } = this.props;
    return (
          <Flex>
              <Flex.Item>
                  <Button onPress={decrementFn}>减</Button>
              </Flex.Item>
              <Flex.Item>
                  <Text style={styles.counterText}>{counter}</Text>
              </Flex.Item>
              <Flex.Item>
                  <Button onPress={incrementFn}>加</Button>
              </Flex.Item>
          </Flex>
    )
  }
}

const styles = StyleSheet.create({
    counterText: {
        textAlign: 'center',
    }
});
