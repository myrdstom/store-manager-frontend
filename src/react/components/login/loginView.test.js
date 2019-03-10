import React from 'react';
import { LoginView } from './LoginView';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


describe('loginView', () => {
  let wrapper;
  const mockloginSuccessfn = jest.fn();
  const historyMock = { push: jest.fn() };

  afterEach(() => {
    mockloginSuccessfn.mock.calls = [];
  });
  describe('When form is submitted', () => {
    wrapper = shallow(
      <LoginView postLogin={mockloginSuccessfn} history={historyMock} />
    );

    it('Should log you in', () => {
      wrapper
        .find('#login')
        .simulate('change', { target: { username: 'paul' } });
      wrapper.find('form').simulate('submit', { preventDefault() {} });
      expect(mockloginSuccessfn.mock.calls.length).toBe(1);
    });
    it('should receive props', () => {
      wrapper.setProps({ success: true });
      expect(wrapper.state('success')).toEqual(true);
    });
  });
});
