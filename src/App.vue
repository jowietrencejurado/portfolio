<template>
	<v-app>
    <v-app-bar :elevation="2" density="compact">
			<v-layout class="overflow-visible" style="height: 56px;">
				<v-bottom-navigation
					v-model="model.tab"
					mode="shift">
					<v-btn class="text-uppercase" @click="() => { router.push({ name: 'home' }) }">
						<v-icon>mdi-home</v-icon>
	
						<span>Home</span>
					</v-btn>
	
					<v-btn class="text-uppercase" @click="() => { router.push({ name: 'about' }) }">
						<v-icon>mdi-account</v-icon>
	
						<span>About</span>
					</v-btn>

					<v-btn class="text-uppercase" @click="() => { router.push({ name: 'skills' }) }">
						<v-icon>mdi-xml</v-icon>
	
						<span>Skills</span>
					</v-btn>
	
					<v-btn class="text-uppercase" @click="() => { router.push({ name: 'work' }) }">
						<v-icon>mdi-xml</v-icon>
	
						<span>Work</span>
					</v-btn>
	
					<v-btn class="text-uppercase" @click="() => { router.push({ name: 'contact' }) }">
						<v-icon>mdi-phone</v-icon>
	
						<span>Contact</span>
					</v-btn>
				</v-bottom-navigation>
			</v-layout>
		</v-app-bar>

    <v-footer
      app
      height="44">
			<div class="d-flex w-100 justify-center align-center px-4 footer">
				<span>Copyright © 2023, Jowie Trence P. Jurado</span>
				<v-spacer></v-spacer>
				<v-btn
					v-for="icon in model.icons"
					:key="icon.name"
					class="mx-4"
					:icon="icon.name"
					variant="text"
					@click="openLink(icon)">
				</v-btn>
			</div>
		</v-footer>

    <v-main>
			<RouterView />
    </v-main>
	</v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { reactive } from "vue";
import { useRouter } from "vue-router";

const theme = useTheme();
const router = useRouter();

const model = reactive({
	tab: 0,
	icons: [{
		link: 'https://www.facebook.com/jowietrencepunzalanjurado',
		name: 'mdi-facebook'
	}, {
		link: 'https://github.com/jtjurado',
		name: 'mdi-github'
	}, {
		link: 'https://www.linkedin.com/in/juradojowietrence/',
		name: 'mdi-linkedin'
	}],
});

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const openLink = (icon) => {
	window.open(icon.link, '_blank')
}
</script>
