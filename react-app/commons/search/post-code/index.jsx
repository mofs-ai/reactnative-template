import * as React from 'react';
import WebView from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <title>주소검색</title>
  </head>
  <body style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
    <div id="wrap" style="display:none;border:0px solid;width:100%;height:100%;margin:5px 0;position:relative">
    </div>
    <!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->
    <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script>
      function execDaumPostcode(element_wrap) {
        // 현재 scroll 위치를 저장해놓는다.
        var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function(data) {
                // ReactNaiveWebView 화면으로 이벤트 전달
                window.ReactNativeWebView.postMessage(JSON.stringify(data));

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_wrap.style.display = 'none';

                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll;
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size) {
                element_wrap.style.height = size.height+'px';
            },
            width : '100%',
            height : '100%'
        }).embed(element_wrap);

        // iframe을 넣은 element를 보이게 한다.
        element_wrap.style.display = 'block'; 
      }

      function initDaumPostcode(params) {
        // 우편번호 찾기 실행
        execDaumPostcode(document.getElementById('wrap'));
      }
    </script>
  </body>
</html>
`;
// embed( element, {q: '검색어', autoClose: '자동닫힘유무'} )

const RnPostCode = props => {
  const {jsOptions, onSelected, onError, style, ...otherProps} = props;

  const injectedJavaScript = React.useMemo(
    () => `initDaumPostcode(${JSON.stringify(jsOptions)});void(0);`,
    [jsOptions],
  );

  const onMessage = React.useCallback(
    ({nativeEvent}) => {
      try {
        // console.log('--->', JSON.parse(nativeEvent.data));
        nativeEvent.data &&
          onSelected &&
          onSelected(JSON.parse(nativeEvent.data));

        /*
        // example 1
        onSelected &&
        onSelected({
            postCode: (juso && juso.postCode) || null,
            address: (juso && juso.address) || null,
          });
        */
      } catch (e) {
        onError(e);
      }
    },
    [onSelected],
  );

  return (
    <WebView
      // style={{
      //   marginTop: 10,
      //   width: deviceWidth,
      //   height: deviceHeight,
      // }}
      mixedContentMode={'always'}
      originWhitelist={['*']}
      //
      source={{
        //iframe을 이용하여 레이어 띄우기
        html,
        baseUrl: 'https://postcode.map.daum.net',
      }}
      domStorageEnabled={true}
      javaScriptEnabled={true}
      onMessage={event => onMessage(event)}
      // scalesPageToFit={Platform.OS === 'android' ? true : false}
      automaticallyAdjustContentInsets={true}
      scrollEnabled={false}
      injectedJavaScript={injectedJavaScript}
    />
  );
};

RnPostCode.defaultProps = {
  jsOptions: {
    hideMapBtn: true,
  },
};

export default RnPostCode;

/*
[주소 파싱 방법 참고]  
// 각 주소의 노출 규칙에 따라 주소를 조합한다.
// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
var addr = ''; // 주소 변수
var extraAddr = ''; // 참고항목 변수

//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
    addr = data.roadAddress;
} else { // 사용자가 지번 주소를 선택했을 경우(J)
    addr = data.jibunAddress;
}

// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
if(data.userSelectedType === 'R'){
    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
        extraAddr += data.bname;
    }
    // 건물명이 있고, 공동주택일 경우 추가한다.
    if(data.buildingName !== '' && data.apartment === 'Y'){
        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
    }
    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    if(extraAddr !== ''){
        extraAddr = ' (' + extraAddr + ')';
    }
} else {
    extraAddr = '';
}
*/
