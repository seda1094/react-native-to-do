import React from 'react'
import { View, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { AppTextBold } from './AppTextBold'
import { theme } from '../../theme'

export const AppButton = ({children, onPress, color = theme.dark_color}) =>
{
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color, ...children.style}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.ligther_color
  }

})
