// tests/unit/ARManager.test.js

import React from 'react';
import { shallow } from 'enzyme';
import ARManager from '../../src/ARManager';

describe('ARManager', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ARManager />);
        expect(wrapper).toMatchSnapshot();
    });

    it('initializes AR scene correctly', () => {
        const wrapper = shallow(<ARManager />);
        const instance = wrapper.instance();
        instance.initARScene();
        expect(instance.arScene).toBeDefined();
    });

    it('handles marker detection correctly', () => {
        const wrapper = shallow(<ARManager />);
        const instance = wrapper.instance();
        const marker = { id: 'marker-1', type: 'image' };
        instance.onMarkerDetected(marker);
        expect(instance.detectedMarkers).toContainEqual(marker);
    });
});
