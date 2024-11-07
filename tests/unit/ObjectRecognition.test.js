// tests/unit/ObjectRecognition.test.js

import React from 'react';
import { shallow } from 'enzyme';
import ObjectRecognition from '../../src/ObjectRecognition';

describe('ObjectRecognition', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ObjectRecognition />);
        expect(wrapper).toMatchSnapshot();
    });

    it('recognizes objects correctly', () => {
        const wrapper = shallow(<ObjectRecognition />);
        const instance = wrapper.instance();
        const image = new Image();
        image.src = 'path/to/image.jpg';
        instance.recognizeObject(image);
        expect(instance.recognizedObjects).toHaveLength(1);
    });

    it('handles object recognition errors correctly', () => {
        const wrapper = shallow(<ObjectRecognition />);
        const instance = wrapper.instance();
        const error = new Error('Object recognition failed');
        instance.onError(error);
        expect(instance.error).toBe(error);
    });
});
