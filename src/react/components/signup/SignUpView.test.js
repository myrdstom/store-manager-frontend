import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { SignUpView } from './SignUpView';
import { postSignup } from '../../../redux/actions/signup/singupAction';

const middlewares = [thunk];
describe('signupView', () => {
  let wrapper;
  const mockSignupSuccessfn = jest.fn();
  const historyMock = { push: jest.fn() };

  afterEach(()=>{
      mockSignupSuccessfn.mock.calls = []
  });
  describe('When form is submitted', () =>{
      wrapper = shallow(
          <SignUpView postSignup = {mockSignupSuccessfn} history={historyMock} />

      );
      it('Should sign you up', () =>{
          wrapper.find('#email').simulate('change', { target: { username: 'paul' } });
          wrapper.find('form').simulate('submit', { preventDefault() {} });
          expect(mockSignupSuccessfn.mock.calls.length).toBe(1)
      });
      it('should receive props', ()=>{
          wrapper.setProps({success: true});
          expect(wrapper.state('success')).toEqual(true)
      })
  })
});
