import VueRouter from "vue-router";
import Vue from "vue";
import voodooPlayable from "./components/voodoo/playable";
import voodooEndcard from "./components/voodoo/endcard";
import psd2ui from "./components/psd2ui"

Vue.use(VueRouter);

export default new VueRouter({
	routes: [{
			path: "/voodooplayable",
			component: voodooPlayable
		},
		{
			path: "/voodooendcard",
			component: voodooEndcard
		},
		{
			path: "/psd2ui",
			component: psd2ui
		}
	],
});