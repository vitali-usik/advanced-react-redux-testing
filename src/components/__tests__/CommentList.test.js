import React from 'react';
import { mount } from 'enzyme';

import Root from './../../Root';
import CommentList from './../CommentList';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment1', 'Comment2'],
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('create one li per element', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('Comment1');
  expect(component.render().text()).toContain('Comment2');
});
