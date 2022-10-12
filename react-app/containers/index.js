import React from 'react';
/* =========================================================================================================== */
// defined naviation : https://reactnavigation.org/
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
/* =========================================================================================================== */
// containers
import EntryStackNavigator from './nav';
/* =========================================================================================================== */

const AppContainer = React.forwardRef((props, ref) => {
  const navRef = useNavigationContainerRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navRef} linking={null}>
        {/* {!isLoading && <EntryStackNavigator />} */}
        <EntryStackNavigator />
        {/*====================================================================================================  */}
        {/* background enable	 */}
        {/* <FirebaseContainer /> */}
        {/*====================================================================================================  */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

export default React.memo(AppContainer);
