import * as React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import RnPostCode from '#commons/search/post-code';

const PostCodeScreen = props => {
  const [state, setState] = React.useState({data: 'no data', isView: false});

  const onSelected = params => {
    // console.log('---->', params);
    setState(prev => {
      return {
        ...prev,
        isView: false,
        data: params || {},
      };
    });
  };

  // @ts-ignore
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Text>{(state?.data && JSON.stringify(state?.data)) || 'no data'}</Text>
      <Button
        onPress={() => {
          setState(prev => {
            return {
              ...prev,
              isView: !prev.isView,
              data: 'no data',
            };
          });
        }}
        title="Address More"
        color="#841584"
        accessibilityLabel="Address more about this purple button"
      />
      {state?.isView && (
        <RnPostCode
          onSelected={onSelected}
          style={{width: '100%', height: '100%'}}
        />
      )}
    </SafeAreaView>
  );
};

export default PostCodeScreen;
