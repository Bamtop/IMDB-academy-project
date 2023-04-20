import SelectFilter  from "@/components/SelectFilter.vue";
import { mount } from "@vue/test-utils";
import {test, expect, describe} from "vitest";
import { getDataTestSelector } from "@/store/utils";

describe("SelectFilter", () => {
    test('renders correctly', () => {
        const wrapper = mount(SelectFilter);
        expect(wrapper.exists()).toBe(true);
    });
    test('display correct label', () => {
        const wrapper = mount(SelectFilter)
        const element = wrapper.get(getDataTestSelector('selectFilter_label'))
        expect(element.text()).toBe('Genres');
    });
    test('default option should be "---"', () => {
        const wrapper = mount(SelectFilter)
        const element = wrapper.get(getDataTestSelector('selectFilter_defaultValue'))
        expect(wrapper.find('option').text()).toBe('---');
    });


});