import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: 'Testing',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: 'Testing',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    // Specific test
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
    // General test
    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('Increment the counter value when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text: 'Testing',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('Decrement the counter value when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
        text: 'Testing',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const [, btnDecrement] = wrapper.findAll('button');

    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
