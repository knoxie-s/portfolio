const sb = document.querySelector(".sidebar")
const sb_btn = document.querySelector(".expand-sidebar")
const sb_close_btn = document.querySelector(".sidebar i")
const sb_lst_btn = document.querySelectorAll(".menu ul li a")

for (var i = 0; i < sb_lst_btn.length; i++) {
	sb_lst_btn[i].addEventListener("click", (e) => {
		var curr = document.querySelector(".menu ul li a.active")
		curr.className = curr.className.replace(" active", "")
		e.target.className += " active";	
	})
}

sb_btn.addEventListener("click", () => {
	sb.classList.add("slide-right")
})

sb_close_btn.addEventListener("click", () => {
	sb.classList.remove("slide-right")
})
