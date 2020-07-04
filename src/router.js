import VueRouter from "vue-router";
import Vue from "vue";
import voodooPlayable from "./components/voodoo/playable";
import voodooEndcard from "./components/voodoo/endcard";
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{ path: "/voodooplayable", component: voodooPlayable },
		{ path: "/voodooendcard", component: voodooEndcard },
	],
});
