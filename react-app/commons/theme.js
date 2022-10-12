import {StyleSheet} from 'react-native';
import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/*
  제플린 또는 피그마 참조하여 값 정의
*/
const colors = {
  /** defaultBackground: 'rgb(255 255 255)', */
  defaultBackground: '#ffffff',
  /** Colors */
  darker: Colors.black,
  lighter: Colors.lighter,
  white: Colors.white,
  black: Colors.black,
};

const fonts = StyleSheet.create({
  /** 일반 기준 텍스트 */
  DEFAULT_NORMAL: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 82,
    letterSpacing: 0,
  },
});

const styles = StyleSheet.create({
  defaultPadding: {
    padding: 0,
  },
});

const theme = {
  colors,
  fonts,
  styles,
};

export default theme;
