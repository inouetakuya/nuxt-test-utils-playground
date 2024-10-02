import TestScriptSetupPage from '~/pages/script-setup.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('ScriptSetupPage', () => {
  it('should render', async () => {
    const wrapper = await mountSuspended(TestScriptSetupPage, {
      route: '/script-setup',
    });
    expect(wrapper.text()).toBe('greeting: Hello, world!');
  });
});
