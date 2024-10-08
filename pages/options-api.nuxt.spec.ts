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
        'Hello, setup',
      );
    });

    it('should render greeting in data and asyncData', () => {
      expect(wrapper.find('[data-testid="greeting-in-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(wrapper.find('[data-testid="greeting-in-data2"]').text()).toBe(
        'Hello, overwritten by asyncData',
      );
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-computed"]').text()).toBe(
        'Hello, computed property',
      );
      expect(wrapper.find('[data-testid="computed-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(
        wrapper.find('[data-testid="computed-greeting-in-methods"]').text(),
      ).toBe('Hello, method');
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-methods"]').text()).toBe(
        'Hello, method',
      );
      expect(wrapper.find('[data-testid="return-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(wrapper.find('[data-testid="return-computed-data1"]').text()).toBe(
        'Hello, data1',
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
        'Hello, setup',
      );
    });

    it('should render greeting in data and asyncData', () => {
      expect(wrapper.find('[data-testid="greeting-in-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(wrapper.find('[data-testid="greeting-in-data2"]').text()).toBe(
        'Hello, overwritten by asyncData',
      );
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-computed"]').text()).toBe(
        'Hello, computed property',
      );
      expect(wrapper.find('[data-testid="computed-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(
        wrapper.find('[data-testid="computed-greeting-in-methods"]').text(),
      ).toBe('Hello, method');
    });

    it('should render greeting in computed', () => {
      expect(wrapper.find('[data-testid="greeting-in-methods"]').text()).toBe(
        'Hello, method',
      );
      expect(wrapper.find('[data-testid="return-data1"]').text()).toBe(
        'Hello, data1',
      );
      expect(wrapper.find('[data-testid="return-computed-data1"]').text()).toBe(
        'Hello, data1',
      );
    });
  });
});
