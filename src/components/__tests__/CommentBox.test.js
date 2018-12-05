import React from 'react';
import { mount } from 'enzyme';

import CommentBox from './../CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

it('has a text area that usres can type in', () => {

});
