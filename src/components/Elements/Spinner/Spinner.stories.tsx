import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: ComponentMeta<typeof Spinner> = {
  title: 'Components/Elements/Spinner',
  component: Spinner,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});

export default meta;
