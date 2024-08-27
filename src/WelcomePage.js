
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const WelcomePage = () => {
  // Use shared values for animated positions
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Animate translateX and translateY values to create bouncing effect
    translateX.value = withRepeat(
      withTiming(width - 100, {
        duration: 2000,
        easing: Easing.bounce,
      }),
      -1,
      true
    );

    translateY.value = withRepeat(
      withTiming(height - 200, {
        duration: 2000,
        easing: Easing.bounce,
      }),
      -1,
      true
    );
  }, []);

  // Animated style to be applied on the CD component
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      {/* Animated CD Disk */}
      <Animated.View style={[styles.diskContainer, animatedStyle]}>
        <Svg height="100" width="100">
          <Circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2.5" fill="#CDDC39" />
          <Circle cx="50" cy="50" r="25" stroke="black" strokeWidth="2.5" fill="#8BC34A" />
          <Circle cx="50" cy="50" r="5" fill="black" />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diskContainer: {
    position: 'absolute',
  },
});

export default WelcomePage;
