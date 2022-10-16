import {describe, expect, test} from '@jest/globals';
import fetchLogic from './fetch.data';

describe('fetch module', () => {
  it('fetch url', async () => {
    expect(
      await fetchLogic.getData('https://reqres.in/api/users/2').then(res => {
        console.log('[result]\n', res);
      }),
    ).not.toBeNull();
  });
});
