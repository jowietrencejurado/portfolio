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
											<v-img :src="item.logo" height="70" class="mx-auto my-3"></v-img>
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
																	:src="subItem.image">
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
																	:src="subItem.image">
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
// Skills
import laravel from '@/assets/logo/laravel.png';
import php from '@/assets/logo/php.png';
import vuejs from '@/assets/logo/vuejs.png';
import nuxtjs from '@/assets/logo/nuxtjs.png';
import html from '@/assets/logo/html.png';
import css3 from '@/assets/logo/css3.png';
import cSharp from '@/assets/logo/c-sharp.png';
import aspnet from '@/assets/logo/aspnet.png';
import react from '@/assets/logo/react.png';
import javascript from '@/assets/logo/javascript.png';
import jquery from '@/assets/logo/jquery.png';
import vuetifyjs from '@/assets/logo/vuetifyjs.svg';
import tailwind from '@/assets/logo/tailwind.png';
import bootstrap from '@/assets/logo/bootstrap.png';
import uikit from '@/assets/logo/uikit.svg';
import headlessui from '@/assets/logo/headlessui.png';
import mysql from '@/assets/logo/mysql.png';
import mariadb from '@/assets/logo/mariadb.png';
import postgresql from '@/assets/logo/postgresql.png';
import microsoftSqlServer from '@/assets/logo/microsoft-sql-server.png';
import composer from '@/assets/logo/composer.png';
import git from '@/assets/logo/git.png';
import github from '@/assets/logo/github.png';
import gitlab from '@/assets/logo/gitlab.svg';
// Skills

// Tools
import nodejs from '@/assets/logo/nodejs.png';
import nvm from '@/assets/logo/nvm.png';
import vscode from '@/assets/logo/vscode.png';
import visualStudio from '@/assets/logo/visual-studio.png';
import sublimeText from '@/assets/logo/sublime-text.png';
import datagrip from '@/assets/logo/datagrip.png';
import ssms from '@/assets/logo/ssms.png';
import mysqlWorkbench from '@/assets/logo/mysql-workbench.png';
import xampp from '@/assets/logo/xampp.png';
import wamp from '@/assets/logo/wamp.png';
import vite from '@/assets/logo/vite.png';
import postman from '@/assets/logo/postman.svg';
import apache from '@/assets/logo/apache.png';
import clickup from '@/assets/logo/clickup.png';
import trello from '@/assets/logo/trello.png';
import airtable from '@/assets/logo/airtable.png';
import windows from '@/assets/logo/windows.png';
import ubuntu from '@/assets/logo/ubuntu.png';
import aws from '@/assets/logo/aws.png';
import iis from '@/assets/logo/iis.png';
import spatie from '@/assets/logo/spatie.png';
import npm from '@/assets/logo/npm.png';
// Tools

// SimpleVia Projects
import ais1 from '@/assets/projects/ais-1.png';
import ais2 from '@/assets/projects/ais-2.png';
import ais3 from '@/assets/projects/ais-3.png';
import ais4 from '@/assets/projects/ais-4.png';
import ais5 from '@/assets/projects/ais-5.png';
import esign1 from '@/assets/projects/esign-1.png';
import esign2 from '@/assets/projects/esign-2.png';
import esign3 from '@/assets/projects/esign-3.png';
import esign4 from '@/assets/projects/esign-4.png';
import esign5 from '@/assets/projects/esign-5.png';
import esign6 from '@/assets/projects/esign-6.png';
import lmiis1 from '@/assets/projects/lmiis-6.png';
import lmiis2 from '@/assets/projects/lmiis-6.png';
import lmiis3 from '@/assets/projects/lmiis-6.png';
import lmiis4 from '@/assets/projects/lmiis-6.png';
import lmiis5 from '@/assets/projects/lmiis-6.png';
import lmiis6 from '@/assets/projects/lmiis-6.png';
// SimpleVia Projects

// Revlv Projects
import archiving1 from '@/assets/projects/archiving-home.png';
import archiving2 from '@/assets/projects/archiving1.png';
import archiving3 from '@/assets/projects/archiving2.png';
import archiving4 from '@/assets/projects/archiving3.png';
import archiving5 from '@/assets/projects/archiving4.png';
import archiving6 from '@/assets/projects/archiving5.png';
import archiving7 from '@/assets/projects/archiving6.png';
import avlci1 from '@/assets/projects/avlci-1.png';
import avlci2 from '@/assets/projects/avlci-2.png';
import avlci3 from '@/assets/projects/avlci-3.png';
import avlci4 from '@/assets/projects/avlci-4.png';
import fis1 from '@/assets/projects/fis1.png';
import fis2 from '@/assets/projects/fis2.png';
import fis3 from '@/assets/projects/fis3.png';
import fis4 from '@/assets/projects/fis4.png';
import ristoken1 from '@/assets/projects/ristoken1.png';
import ristoken2 from '@/assets/projects/ristoken2.png';
import ristoken3 from '@/assets/projects/ristoken3.png';
import ristoken4 from '@/assets/projects/ristoken4.png';
// Revlv Projects

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
		logo: laravel,
		name: 'Laravel'
	}, {
		link: 'https://www.php.net/',
		logo: php,
		name: 'PHP'
	}, {
		link: 'https://vuejs.org/',
		logo: vuejs,
		name: 'VueJS'
	}, {
		link: 'https://nuxt.com/',
		logo: nuxtjs,
		name: 'NuxtJS'
	}, {
		link: 'https://www.tutorialspoint.com/html5/index.htm',
		logo: html,
		name: 'HTML5'
	}, {
		link: 'https://www.tutorialspoint.com/css/css3_tutorial.htm',
		logo: css3,
		name: 'CSS3'
	}, {
		link: 'https://dotnet.microsoft.com/en-us/learntocode',
		logo: cSharp,
		name: 'C#'
	}, {
		link: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
		logo: aspnet,
		name: 'ASP.Net'
	}, {
		link: 'https://react.dev/',
		logo: react,
		name: 'ReactJS'
	}, {
		link: 'https://www.w3schools.com/js/',
		logo: javascript,
		name: 'JavaScript'
	}, {
		link: 'https://jquery.com/',
		logo: jquery,
		name: 'jQuery'
	}, {
		link: 'https://vuetifyjs.com/en/',
		logo: vuetifyjs,
		name: 'VuetifyJS'
	}, {
		link: 'https://tailwindcss.com/',
		logo: tailwind,
		name: 'Tailwind CSS'
	}, {
		link: 'https://getbootstrap.com/',
		logo: bootstrap,
		name: 'Bootstrap'
	}, {
		link: 'https://getuikit.com/',
		logo: uikit,
		name: 'UIKit'
	}, {
		link: 'https://headlessui.com/',
		logo: headlessui,
		name: 'Headless UI'
	}, {
		link: 'https://www.mysql.com/',
		logo: mysql,
		name: 'MySQL'
	}, {
		link: 'https://mariadb.org/',
		logo: mariadb,
		name: 'MariaDB'
	}, {
		link: 'https://www.postgresql.org/',
		logo: postgresql,
		name: 'PostgreSQL'
	}, {
		link: 'https://learn.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver16/',
		logo: microsoftSqlServer,
		name: 'Microsoft SQL'
	}, {
		link: 'https://getcomposer.org/',
		logo: composer,
		name: 'Composer'
	}, {
		link: 'https://git-scm.com/',
		logo: git,
		name: 'Git'
	}, {
		link: 'https://github.com/',
		logo: github,
		name: 'GitHub'
	}, {
		link: 'https://about.gitlab.com/',
		logo: gitlab,
		name: 'GitLab'
	}
]);

const tools = reactive([
	{
		link: 'https://nodejs.org/en/about',
		logo: nodejs,
		name: 'Node.js'
	}, {
		link: 'https://github.com/nvm-sh/nvm',
		logo: nvm,
		name: 'NVM'
	}, {
		link: 'https://code.visualstudio.com/',
		logo: vscode,
		name: 'VSCode'
	}, {
		link: 'https://visualstudio.microsoft.com/',
		logo: visualStudio,
		name: 'Visual Studio'
	}, {
		link: 'https://www.sublimetext.com/',
		logo: sublimeText,
		name: 'Sublime Text'
	}, {
		link: 'https://www.jetbrains.com/datagrip/',
		logo: datagrip,
		name: 'DataGrip'
	}, {
		link: 'https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16',
		logo: ssms,
		name: 'SSMS'
	}, {
		link: 'https://www.mysql.com/products/workbench/',
		logo: mysqlWorkbench,
		name: 'MySQL WorkBench'
	}, {
		link: 'https://www.apachefriends.org/',
		logo:  xampp,
		name: 'XAMPP'
	}, {
		link: 'https://www.wampserver.com/en/',
		logo: wamp,
		name: 'WAMP'
	}, {
		link: 'https://vitejs.dev/',
		logo: vite,
		name: 'ViteJS'
	}, {
		link: 'https://www.postman.com/',
		logo: postman,
		name: 'Postman'
	}, {
		link: 'https://httpd.apache.org/',
		logo: apache,
		name: 'Apache'
	}, {
		link: 'https://clickup.com/',
		logo: clickup,
		name: 'ClickUp'
	}, {
		link: 'https://trello.com/',
		logo: trello,
		name: 'Trello'
	}, {
		link: 'https://www.airtable.com/',
		logo: airtable,
		name: 'AirTable'
	}, {
		link: 'https://www.microsoft.com/en-ph/windows',
		logo: windows,
		name: 'Windows'
	}, {
		link: 'https://ubuntu.com/',
		logo: ubuntu,
		name: 'Ubuntu'
	}, {
		link: 'https://aws.amazon.com/',
		logo: aws,
		name: 'AWS EC2'
	}, {
		link: 'https://www.iis.net/',
		logo: iis,
		name: 'IIS'
	}, {
		link: 'https://spatie.be/',
		logo: spatie,
		name: 'Spatie'
	}, {
		link: 'https://www.npmjs.com/',
		logo: npm,
		name: 'NPM'
	},
]);

const simpleviaProjects = reactive([
	{
		caption: 'Makati AIS (Accounting Information System)',
		image: ais1
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: ais2
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: ais3
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: ais4
	}, {
		caption: 'Makati AIS (Accounting Information System)',
		image: ais5
	}, {
		caption: 'Makati E-Sign',
		image: esign1
	}, {
		caption: 'Makati E-Sign',
		image: esign2
	}, {
		caption: 'Makati E-Sign',
		image: esign3
	}, {
		caption: 'Makati E-Sign',
		image: esign4
	}, {
		caption: 'Makati E-Sign',
		image: esign5
	}, {
		caption: 'Makati E-Sign',
		image: esign6
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis1
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis2
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis3
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis4
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis5
	}, {
		caption: 'LMIIS (Logistic Management Inventory and Information System)',
		image: lmiis6
	}
]);

const revlvProjects = reactive([
	{
		caption: 'Document Archiving',
		image:archiving1
	}, {
		caption: 'Document Archiving',
		image: archiving2
	}, {
		caption: 'Document Archiving',
		image: archiving3
	}, {
		caption: 'Document Archiving',
		image: archiving4
	}, {
		caption: 'Document Archiving',
		image: archiving5
	}, {
		caption: 'Document Archiving',
		image: archiving6
	}, {
		caption: 'Document Archiving',
		image: archiving7
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: avlci1
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: avlci2
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: avlci3
	}, {
		caption: 'AVLCI (Astoria Vacation & Leisure Club Inc. System)',
		image: avlci4
	}, {
		caption: 'Farmer Information System',
		image: fis1
	}, {
		caption: 'Farmer Information System',
		image: fis2
	}, {
		caption: 'Farmer Information System',
		image: fis3
	}, {
		caption: 'Farmer Information System',
		image: fis4
	}, {
		caption: 'RisToken',
		image: ristoken1
	}, {
		caption: 'RisToken',
		image: ristoken2
	}, {
		caption: 'RisToken',
		image: ristoken3
	}, {
		caption: 'RisToken',
		image: ristoken4
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
