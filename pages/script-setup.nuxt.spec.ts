import ScriptSetupPage from '~/pages/script-setup.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('ScriptSetupPage', () => {
  it('should render', async () => {
    const wrapper = await mountSuspended(ScriptSetupPage, {
      route: '/script-setup',
    });
    expect(wrapper.text()).toBe('greeting: Hello, world!');
  });
});
