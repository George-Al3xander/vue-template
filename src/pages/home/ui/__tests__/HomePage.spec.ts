import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";

describe("HomePage", () => {
    it("mounts renders properly", () => {
        const wrapper = mount(HomePage);
        expect(wrapper.text()).toContain("Vue Template");
    });
});
