import TestScriptSetupPage from '~/pages/test-script-setup.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('TestScriptSetupPage', () => {
  it('should render', async () => {
    const wrapper = await mountSuspended(TestScriptSetupPage, {
      route: '/test-script-setup',
    });
    expect(wrapper.text()).toBe('greeting: Hello, world!');
  });
});
