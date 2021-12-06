import * as React from 'react';
import { shallow } from 'enzyme';

import { Field } from '.';

describe('Field component', () => {
	it('should render successfully', () => {
		const tree = shallow(
			<Field
				onChange={(): jest.Mock => jest.fn()}
				type="email"
				name="email"
				label="Email Address"
				placeholder="someone@example.com"
			/>
		);

		expect(tree).toMatchSnapshot();
	});
});
