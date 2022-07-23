import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Elements/Button',
  component: Button,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};
export default meta;

export const Inverse = Template.bind({});
Inverse.args = {
  children: 'Inverse Button',
  variant: 'inverse',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
};

export const PrimaryLoding = Template.bind({});
PrimaryLoding.args = {
  children: 'Button',
  isLoading: true,
  variant: 'primary',
};
