import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import("@/pages/Index.vue");
const About = () => import("@/pages/About.vue");
const Skills = () => import("@/pages/Skills.vue");
const Work = () => import("@/pages/Work.vue");
const Contact = () => import("@/pages/Contact.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/skills",
			name: "skills",
			component: Skills,
		},
		{
			path: "/work",
			name: "work",
			component: Work,
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact,
		},
  ]
})

export default router
