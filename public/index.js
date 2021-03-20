'use strict';

// -------------------ADD SKILLS-------------------
const skillData = [
	{
		"name": "C/C++",
		"level": 80 
	},
	{
		"name": "html&css",
		"level": 85 
	},
	{
		"name": "javascript, jquery",
		"level": 75 
	},
	{
		"name": "bootsrap",
		"level": 75 
	},
	{
		"name": "NODE.JS",
		"level": 70 
	},
	{
		"name": "EXPRESS.JS",
		"level": 70 
	},
	{
		"name": "SQL, MONGODB",
		"level": 70
	},
	{
		"name": "EJS",
		"level": 70 
	},
	{
		"name": "Unix, Linux",
		"level": 75 
	},
	{
		"name": "Git, Gitflow",
		"level": 75 
	}
];

const skillHTML = `<div class="col-sm-6">
					<div class="skill">
						<div class="skill__item">
							<div class="skill__details">
								<span class="skill__name">$name</span>
								<span class="skill__progress">$level</span>
							</div>
							<div class="skill__bar">
								<div class="skill__bar-progress"></div>
							</div>
						</div>
					</div>
				</div>`

const addSkill = function() {
	const mySkillsBox = document.querySelector(".section-my-skills .row");

	skillData.forEach(el => {
		let currSkill = skillHTML.replace("$name", el.name);
		currSkill = currSkill.replace("$level", el.level + '%');
		mySkillsBox.insertAdjacentHTML("beforeend", currSkill);
	})
}

let mySkillsAnimated = false;
const addSkillAnimation = function() {
	let skillBar = document.querySelectorAll(".skill__bar-progress");

	// console.log("skill-test")
	mySkillsAnimated = true;
	for (let i = 0; i < skillBar.length; i++) {
		skillBar[i].style.width = skillData[i].level + '%';
	}
}

addSkill();

// -------------------FIXED NAVBAR-------------------

const navbar = document.querySelector(".navigation");
const navbar_ofstY = navbar.offsetTop;
const mySkillsOffsetY = document.querySelector(".section-my-skills").offsetTop;

window.onscroll = function() {offsets()};

function offsets() {
	let windowOffsetY = window.pageYOffset;

	if (windowOffsetY >= navbar_ofstY) {
		navbar.classList.add("navigation--fixed");
	}
	else {
		navbar.classList.remove("navigation--fixed");
	}
	if (windowOffsetY + window.innerHeight >= mySkillsOffsetY)
		addSkillAnimation();
}

// -------------------SIDEBAR ANIMATIONS------------------- 

const nav_expand_btn = document.querySelector(".navigation__icon");
const sb = document.querySelector(".sidebar");
const sb_close_btn = document.querySelector(".sidebar i");
const sb_lst_btn = document.querySelectorAll(".sidebar__nav a");

for (var i = 0; i < sb_lst_btn.length; i++) {
	sb_lst_btn[i].addEventListener("click", (e) => {
		const curr = document.querySelector(".sidebar__nav a.active")
		curr.className = curr.className.replace(" active", "")
		e.target.className += " active";	
	})
}

nav_expand_btn.addEventListener("click", () => {
	// console.log("test...")
	sb.classList.add("sidebar--slide-right")
})

sb_close_btn.addEventListener("click", () => {
	sb.classList.remove("sidebar--slide-right")
})
