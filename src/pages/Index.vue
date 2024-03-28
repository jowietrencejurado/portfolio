<template>
	<v-app>
		<v-app-bar :elevation="2" density="compact">
			<v-layout class="overflow-visible" style="height: 56px;">
				<v-bottom-navigation v-model="model.tab" mode="shift">
					<v-btn value="home" class="text-uppercase" @click="openTab('home')">
						<v-icon>mdi-home</v-icon>

						<span>Home</span>
					</v-btn>

					<v-btn value="about" class="text-uppercase" @click="openTab('about')">
						<v-icon>mdi-account</v-icon>

						<span>About</span>
					</v-btn>

					<v-btn value="skills" class="text-uppercase" @click="openTab('skills')">
						<v-icon>mdi-code-tags</v-icon>

						<span>Skills</span>
					</v-btn>

					<v-btn value="work" class="text-uppercase" @click="openTab('work')">
						<v-icon>mdi-briefcase</v-icon>

						<span>Work</span>
					</v-btn>
				</v-bottom-navigation>
			</v-layout>
		</v-app-bar>
		<v-main>
			<v-container fluid class="fill-height">
				<v-row v-if="model.tab === 'home'" justify="center" class="align-center">
					<v-col cols="auto" class="text-center">
						<span class="name">Jowie Trence P. Jurado</span>
						<hr>
						<span class="position">Full Stack Web Developer</span><br>
					</v-col>
				</v-row>
				<v-row v-if="model.tab === 'about'" justify="center" class="align-center">
					<v-col cols="6" class="text-center">
						<span class="name">About</span>
						<p class="about text-justify">
							Hi there! My name is Jowie Trence P. Jurado, and I'm a full stack web developer from the Philippines.
							I graduated from University of Caloocan City with a Bachelor of Science in Information
							Technology and have three years of commercial experience.
							<br>
							<br>
							I design and develop user-friendly, small to large scale web applications, optimized websites using best
							practices in the industry.
							<br>
							<br>
							I'm devoted to remaining current with the newest technologies and market trends as a full stack web
							developer.I approach every project
							with passion, originality, and a commitment to providing a superior final result that satisfies the
							client's particular objectives.
						</p>
					</v-col>
				</v-row>
				<v-row v-if="model.tab === 'skills'" justify="center" class="align-center">
					<v-col cols="12" class="text-center">
						<span class="name">Skills & Dev Tools</span>
					</v-col>
					<v-col cols="12">
						<v-carousel hide-delimiters show-arrows height="50%">
							<template v-slot:prev="{ props }">
								<v-btn variant="plain" class="bg-transparent" size="xxx-large" rounded @click="props.onClick">
									<v-icon size="xxx-large">
										mdi-chevron-left
									</v-icon>
								</v-btn>
							</template>
							<template v-slot:next="{ props }">
								<v-btn variant="plain" class="bg-transparent" size="xxx-large" rounded @click="props.onClick">
									<v-icon size="xxx-large">
										mdi-chevron-right
									</v-icon>
								</v-btn>
							</template>
							<v-carousel-item>
								<v-row justify="center" class="align-center mx-16 px-16">
									<v-col v-for="item in skills" cols="2">
										<v-card class="mx-auto py-2" max-height="150" :href="item.link" target="_blank" rel="noopener"
											variant="tonal" elevation="2">
											<v-img :src="item.logo" height="70" class="mx-auto my-3"></v-img>
											<v-card-title class="text-center skill-title">{{ item.name }}</v-card-title>
										</v-card>
									</v-col>
								</v-row>
							</v-carousel-item>
							<v-carousel-item>
								<v-row justify="center" class="align-center mx-16 px-16">
									<v-col v-for="item in tools" cols="2">
										<v-card class="mx-auto py-2" max-height="150" :href="item.link" target="_blank" rel="noopener"
											variant="tonal" elevation="2">
											<v-img :src="getImage(item.logo, 'logo')" height="70" class="mx-auto my-3"></v-img>
											<v-card-title class="text-center skill-title">{{ item.name }}</v-card-title>
										</v-card>
									</v-col>
								</v-row>
							</v-carousel-item>
						</v-carousel>
					</v-col>
				</v-row>
				<v-row v-if="model.tab === 'work'" justify="center" class="align-center">
					<v-col cols="auto" class="text-center">
						<span class="name">Work</span>
					</v-col>
					<v-col cols="12">
						<v-timeline align="start">
							<v-timeline-item
								v-for="(item, i) in works"
								:key="i"
								:dot-color="item.color"
								:icon="item.icon"
								fill-dot>
								<v-card>
									<v-card-title :class="['text-h6', `bg-${item.color}`]">
										{{ item.jobTitle }}
									</v-card-title>
									<v-card-text class="bg-white text--primary">
										<p class="py-5">{{ item.jobDescription }}</p>
										<div>
											<v-dialog
												v-model="model.dialog[i]"
												max-width="900">
												<template v-slot:activator="{ props: activatorProps }">
													<v-btn v-bind="activatorProps">
														view projects
													</v-btn>
												</template>

												<v-card>
													<v-card-text>
														<v-carousel
															v-if="i === 0"
															show-arrows="hover"
															hide-delimiters>
															<template v-for="subItem in revlvProjects">
																<v-carousel-item
																	:src="getImage(subItem.image, 'projects')">
																	<div class="d-flex fill-height justify-start align-end">
																		<div class="text-h6">
																			{{ subItem.caption }}
																		</div>
																	</div>
																</v-carousel-item>
															</template>
														</v-carousel>
														<v-carousel
															v-if="i === 1"
															show-arrows="hover"
															hide-delimiters>
															<template v-for="subItem in simpleviaProjects">
																<v-carousel-item
																	:src="getImage(subItem.image, 'projects')">
																	<div class="d-flex fill-height justify-start align-end">
																		<div class="text-h6">
																			{{ subItem.caption }}
																		</div>
																	</div>
																</v-carousel-item>
															</template>
														</v-carousel>
													</v-card-text>
												</v-card>
											</v-dialog>
										</div>
									</v-card-text>
								</v-card>
							</v-timeline-item>
						</v-timeline>

					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount } from 'vue';
import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';
// import airtableLogo from '@/assets/logo/airtable.png';

const theme = useTheme();
const router = useRouter();
const route = useRoute();

const model = reactive({
	dialog: [
		false,
		false
	],
	tab: 'home',
	icons: [{
		link: 'https://www.facebook.com/jowietrencepunzalanjurado',
		name: 'mdi-facebook'
	}, {
		link: 'https://github.com/jtjurado',
		name: 'mdi-github'
	}, {
		link: 'https://www.linkedin.com/in/juradojowietrence/',
		name: 'mdi-linkedin'
	}, {
		link: 'https://www.gmail.com/',
		name: 'mdi-gmail'
	}],
});

const skills = reactive([
	{
		link: 'https://laravel.com/',
		logo: airtableLogo,
		name: 'Laravel'
	}, {
		link: 'https://www.php.net/',
		logo: 'php.png',
		name: 'PHP'
	}, {
		link: 'https://vuejs.org/',
		logo: 'vuejs.png',
		name: 'VueJS'
	}, {
		link: 'https://nuxt.com/',
		logo: 'nuxtjs.png',
		name: 'NuxtJS'
	}, {
		link: 'https://www.tutorialspoint.com/html5/index.htm',
		logo: 'html.png',
		name: 'HTML5'
	}, {
		link: 'https://www.tutorialspoint.com/css/css3_tutorial.htm',
		logo: 'css3.png',
		name: 'CSS3'
	}, {
		link: 'https://dotnet.microsoft.com/en-us/learntocode',
		logo: 'c-sharp.png',
		name: 'C#'
	}, {
		link: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
		logo: 'aspnet.png',
		name: 'ASP.Net'
	}, {
		link: 'https://react.dev/',
		logo: 'react.png',
		name: 'ReactJS'
	}, {
		link: 'https://www.w3schools.com/js/',
		logo: 'javascript.png',
		name: 'JavaScript'
	}, {
		link: 'https://jquery.com/',
		logo: 'jquery.png',
		name: 'jQuery'
	}, {
		link: 'https://vuetifyjs.com/en/',
		logo: 'vuetifyjs.svg',
		name: 'VuetifyJS'
	}, {
		link: 'https://tailwindcss.com/',
		logo: 'tailwind.png',
		name: 'Tailwind CSS'
	}, {
		link: 'https://getbootstrap.com/',
		logo: 'bootstrap.png',
		name: 'Bootstrap'
	}, {
		link: 'https://getuikit.com/',
		logo: 'uikit.svg',
		name: 'UIKit'
	}, {
		link: 'https://headlessui.com/',
		logo: 'headlessui.png',
		name: 'Headless UI'
	}, {
		link: 'https://www.mysql.com/',
		logo: 'mysql.png',
		name: 'MySQL'
	}, {
		link: 'https://mariadb.org/',
		logo: 'mariadb.png',
		name: 'MariaDB'
	}, {
		link: 'https://www.postgresql.org/',
		logo: 'postgresql.png',
		name: 'PostgreSQL'
	}, {
		link: 'https://learn.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver16/',
		logo: 'microsoft-sql-server.png',
		name: 'Microsoft SQL'
	}, {
		link: 'https://getcomposer.org/',
		logo: 'composer.png',
		name: 'Composer'
	}, {
		link: 'https://git-scm.com/',
		logo: 'git.png',
		name: 'Git'
	}, {
		link: 'https://github.com/',
		logo: 'github.png',
		name: 'GitHub'
	}, {
		link: 'https://about.gitlab.com/',
		logo: 'gitlab.svg',
		name: 'GitLab'
	}
]);

const tools = reactive([
	{
		link: 'https://nodejs.org/en/about',
		logo: 'nodejs.png',
		name: 'Node.js'
	}, {
		link: 'https://github.com/nvm-sh/nvm',
		logo: 'nvm.png',
		name: 'NVM'
	}, {
		link: 'https://code.visualstudio.com/',
		logo: 'vscode.png',
		name: 'VSCode'
	}, {
		link: 'https://visualstudio.microsoft.com/',
		logo: 'visual-studio.png',
		name: 'Visual Studio'
	}, {
		link: 'https://www.sublimetext.com/',
		logo: 'sublime-text.png',
		name: 'Sublime Text'
	}, {
		link: 'https://www.jetbrains.com/datagrip/',
		logo: 'datagrip.png',
		name: 'DataGrip'
	}, {
		link: 'https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16',
		logo: 'ssms.png',
		name: 'SSMS'
	}, {
		link: 'https://www.mysql.com/products/workbench/',
		logo: 'mysql-workbench.png',
		name: 'MySQL WorkBench'
	}, {
		link: 'https://www.apachefriends.org/',
		logo: 'xampp.png',
		name: 'XAMPP'
	}, {
		link: 'https://www.wampserver.com/en/',
		logo: 'wamp.png',
		name: 'WAMP'
	}, {
		link: 'https://vitejs.dev/',
		logo: 'vite.png',
		name: 'ViteJS'
	}, {
		link: 'https://www.postman.com/',
		logo: 'postman.svg',
		name: 'Postman'
	}, {
		link: 'https://httpd.apache.org/',
		logo: 'apache.png',
		name: 'Apache'
	}, {
		link: 'https://clickup.com/',
		logo: 'clickup.png',
		name: 'ClickUp'
	}, {
		link: 'https://trello.com/',
		logo: 'trello.png',
		name: 'Trello'
	}, {
		link: 'https://www.airtable.com/',
		logo: 'airtable.png',
		name: 'AirTable'
	}, {
		link: 'https://www.microsoft.com/en-ph/windows',
		logo: 'windows.png',
		name: 'Windows'
	}, {
		link: 'https://ubuntu.com/',
		logo: 'ubuntu.png',
		name: 'Ubuntu'
	}, {
		link: 'https://aws.amazon.com/',
		logo: 'aws.png',
		name: 'AWS EC2'
	}, {
		link: 'https://www.iis.net/',
		logo: 'iis.png',
		name: 'IIS'
	}, {
		link: 'https://spatie.be/',
		logo: 'spatie.png',
		name: 'Spatie'
	}, {
		link: 'https://www.npmjs.com/',
		logo: 'npm.png',
		name: 'NPM'
	},
]);

const simpleviaProjects = reactive([
	{
		caption: 'Makati AIS (Accounting Information System)',
		image: 'ais-1.png'
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: 'ais-2.png'
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: 'ais-3.png'
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: 'ais-4.png'
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: 'ais-5.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-1.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-2.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-3.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-4.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-5.png'
	}, {
		caption: 'Makati E-Sign',
		image: 'esign-6.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-1.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-2.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-3.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-4.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-5.png'
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: 'lmiis-6.png'
	}
]);

const revlvProjects = reactive([
	{
		caption: 'Document Archiving',
		image: 'archiving-home.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving1.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving2.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving3.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving4.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving5.png'
	}, {
		caption: 'Document Archiving',
		image: 'archiving6.png'
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: 'avlci-1.png'
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: 'avlci-2.png'
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: 'avlci-3.png'
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: 'avlci-4.png'
	}, {
		caption: 'Farmer Information System',
		image: 'fis1.png'
	}, {
		caption: 'Farmer Information System',
		image: 'fis2.png'
	}, {
		caption: 'Farmer Information System',
		image: 'fis3.png'
	}, {
		caption: 'Farmer Information System',
		image: 'fis4.png'
	}, {
		caption: 'RisToken',
		image: 'ristoken1.png'
	}, {
		caption: 'RisToken',
		image: 'ristoken2.png'
	}, {
		caption: 'RisToken',
		image: 'ristoken3.png'
	}, {
		caption: 'RisToken',
		image: 'ristoken4.png'
	}
]);

const works = reactive([
	{
		jobDescription: `Five projects have been successfully managed and maintained. 
			I've worked in a four-person team to install and create custom web apps for clients 
			of the company.Develop, test, deploy, and update web applications on servers on a daily basis.
			Provide understandable code, flowcharts, layouts, diagrams, code comments, and documentation.`,
		jobTitle: 'Junior Software Developer I'
	}, {
		jobDescription: `Maintained and deployed two projects. Collaborate with business analysts, 
			users, and other relevant parties to ascertain requirements that take into consideration user preferences, business requirements, 
			and legal compliance. Introduce junior software developers to industry best practices and the importance of staying up to date on developing technologies.`,
		jobTitle: 'Intermediate Software Engineer'
	}
]);

const getImage = (imageName, type) => {
	let url = '';
	if (type === 'logo') {
		url = `/src/assets/logo/${imageName}`;
	}

	if (type === 'projects') {
		url = `/src/assets/projects/${imageName}`;
	}
	const imgUrl = new URL(url, import.meta.url).href;
	return imgUrl;
}

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const openLink = (icon) => {
	window.open(icon.link, '_blank')
}

const openTab = (tab) => {
	model.tab = tab
}
</script>
