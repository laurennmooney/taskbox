import type { Meta, StoryObj } from '@storybook/angular';

import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

import { TaskModule } from './task.module';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from '../state/task.state';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
