import React from 'react';
import { mount } from 'enzyme';

import Root from './../../Root';
import CommentBox from './../CommentBox';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'New comment'},
    });
    component.update();
  });

  it('has a text area that usres can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('New comment');
  });
  
  it('has an empty value once form is submitted', () => {
    expect(component.find('textarea').prop('value')).toEqual('New comment');
  
    component.find('form').simulate('submit');
    component.update();
  
    expect(component.find('textarea').prop('value')).toEqual('');
  });
})
