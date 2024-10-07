import { mountSuspended } from '@nuxt/test-utils/runtime';
import { mount, flushPromises } from '@vue/test-utils';
import OptionsApiPage from '~/pages/options-api.vue';

describe('OptionsApiPage', () => {
  let wrapper;

  describe('Using mountSuspended', () => {
    beforeEach(async () => {
      wrapper = await mountSuspended(OptionsApiPage, {
        route: '/options-api',
      });
    });

    it('should render greeting in setup', () => {
      expect(wrapper.find('[data-testid="greeting-in-setup"]').text()).toBe(
        'greetingInSetup: Hello, setup!',
      );
    });

    it('should render greeting in asyncData', () => {
      expect(
        wrapper.find('[data-testid="greeting-in-async-data"]').text(),
      ).toBe('greetingInAsyncData: Hello, asyncData!');
    });

    it('should render greeting in data', () => {
      expect(wrapper.find('[data-testid="greeting-in-data"]').text()).toBe(
        'greetingInData: Hello, data!',
      );
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-computed"]').text()).toBe(
        'greetingInComputed: Hello, computed property!',
      );
    });
  });

  describe('Using mount', () => {
    beforeEach(async () => {
      const component = defineComponent({
        components: { OptionsApiPage },
        template: '<Suspense><OptionsApiPage /></Suspense>',
      });
      wrapper = mount(component);
      await flushPromises();
    });

    it('should render greeting in setup', () => {
      expect(wrapper.find('[data-testid="greeting-in-setup"]').text()).toBe(
        'greetingInSetup: Hello, setup!',
      );
    });

    it('should render greeting in asyncData', () => {
      expect(
        wrapper.find('[data-testid="greeting-in-async-data"]').text(),
      ).toBe('greetingInAsyncData: Hello, asyncData!');
    });

    it('should render greeting in data', () => {
      expect(wrapper.find('[data-testid="greeting-in-data"]').text()).toBe(
        'greetingInData: Hello, data!',
      );
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-computed"]').text()).toBe(
        'greetingInComputed: Hello, computed property!',
      );
    });
  });
});
