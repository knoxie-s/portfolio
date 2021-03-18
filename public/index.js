// DEVELOP BRANCH
const nav_expand_btn = document.querySelector(".navigation__icon")
const sb = document.querySelector(".sidebar")
const sb_close_btn = document.querySelector(".sidebar i")
const sb_lst_btn = document.querySelectorAll(".sidebar__nav a")
var navbar = document.querySelector(".navigation");
var navbar_ofstY = navbar.offsetTop;
var mySkillsOffsetY = document.querySelector(".section-my-skills").offsetTop;
var mySkillsAnimated = false;
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

// -------------------ADD SKILLS-------------------

function addSkill() {
	const mySkillsBox = document.querySelector(".section-my-skills .row");

	skillData.forEach(el => {
		currSkill = skillHTML.replace("$name", el.name);
		currSkill = currSkill.replace("$level", el.level + '%');
		mySkillsBox.insertAdjacentHTML("beforeend", currSkill);
	})
}

function addSkillAnimation() {
	var skillBar = document.querySelectorAll(".skill__bar-progress");

	// console.log("skill-test")
	mySkillsAnimated = true;
	for (var i = 0; i < skillBar.length; i++) {
		skillBar[i].style.width = skillData[i].level + '%';
	}
}

addSkill();


// -------------------FIXED NAVBAR-------------------

window.onscroll = function() {offsets()};

function offsets() {
	var windowOffsetY = window.pageYOffset;

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

for (var i = 0; i < sb_lst_btn.length; i++) {
	sb_lst_btn[i].addEventListener("click", (e) => {
		var curr = document.querySelector(".sidebar__nav a.active")
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
