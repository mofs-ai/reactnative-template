import {httpClient} from '#apis';

const fetchLogic = {
  getData: async url => {
    return await httpClient.get(url).then(res => {
      console.log('[eeq]\n', res);
      return [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    });
  },
  onClickCount: params => {
    return params + 1;
  },
};

export default fetchLogic;
