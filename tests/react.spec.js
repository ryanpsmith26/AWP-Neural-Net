import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Counter from '../client/Counter';

describe('Counter Component', () => {
	it('has result key on state', () => {
		const wrapper = mount(<Counter name="county" />);
		expect(wrapper).to.include.text('county');
	});
});

// this is not working
