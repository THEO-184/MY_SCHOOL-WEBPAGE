const navLinks = [
	{
		id: "1",
		links: [
			"Who we are",
			"Administration",
			"Registrars office",
			"Vice chancellor",
		],
	},
	{
		id: "2",
		links: [
			"schools",
			"Academic services",
			"department",
			"affiliate institutions",
			"academic calendar",
			"students financial report",
			"Registeration guideline",
		],
	},
	{
		id: "3",
		links: ["perspectives"],
	},
	{
		id: "4",
		links: ["Research institute", "office of graduation"],
	},
	{
		id: "5",
		links: ["Campus life", "freshers guide", "department", "documents", "fees"],
	},
	{
		id: "6",
		links: [
			"all staff documents",
			"casual leave",
			"uenr teaching staff",
			"annual leave",
		],
	},
	{
		id: "7",
		links: ["social media", "Broadcast"],
	},
];

let counter = 0;

const firstMenuLinks = document.querySelectorAll(".first-menu ul h5");

getNavLinks();

const firstMenu = document.querySelector(".first-menu");
// SLIDE NAV
const slideMenu = document.querySelectorAll(".slide-menu");
slideMenu.forEach((slide, index) => {
	slide.style.right = `${index * -100}%`;
});

function getNavLinks() {
	firstMenuLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			const id = e.currentTarget.dataset.id;
			firstMenu.style.transform = `translateX(${-100}%)`;

			const linksContainer = navLinks.filter((links) => {
				if (links.id === id) {
					return links;
				}
			});
			const linksObject = linksContainer[counter];
			const linksArray = linksObject.links;
			// create div and ul Elemnet

			const slideEl = document.createElement("div");
			slideEl.classList.add("slide-menu");
			// create Ul container
			const listContainer = document.createElement("ul");
			// create h5 and ul and li element for each link
			linksArray.forEach((link) => {
				// h5 element
				const hfiveEl = document.createElement("h5");
				hfiveEl.textContent = link;
				// li element
				const liEl = document.createElement("li");
				// append h5 to li
				liEl.appendChild(hfiveEl);
				listContainer.appendChild(liEl);
			});
			// add lists to Ul

			// add UL to slide-menu container
			slideEl.appendChild(listContainer);
			sideMenu.appendChild(slideEl);

			slideEl.style.transform = `translateX(${-100}%)`;
			// left arrow btn
			const leftArrowBtn = document.querySelector(".left-arrow-btn");
			leftArrowBtn.addEventListener("click", (e) => {
				firstMenu.style.transform = `translateX(${0 * -100}%)`;
				slideEl.style.transform = `translateX(${-1 * -100}%)`;
			});
		});
	});
}

// DROPDOWNS
const dropdowns = document.querySelectorAll(".dropD");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".second-nav");

dropdowns.forEach((dropdown) =>
	dropdown.addEventListener("mouseenter", () => {
		dropdown.classList.add("trigger-enter");
		setTimeout(() => {
			dropdown.classList.contains("trigger-enter") &&
				dropdown.classList.add("trigger-enter-active");
		}, 150);

		background.classList.add("open");

		const hiddenElement = dropdown.querySelector(".hidden");
		const hiddenCoords = hiddenElement.getBoundingClientRect();
		const navCoords = nav.getBoundingClientRect();

		const coords = {
			height: hiddenCoords.height,
			width: hiddenCoords.width,
			top: hiddenCoords.top - navCoords.top,
			left: hiddenCoords.left - navCoords.left,
		};

		background.style.height = `${coords.height}px`;
		background.style.width = `${coords.width}px`;
		background.style.transform = `translate(${coords.left}px,${coords.top}px)`;
		console.log("ENTER");
	})
);

dropdowns.forEach((dropdown) =>
	dropdown.addEventListener("mouseleave", () => {
		dropdown.classList.remove("trigger-enter", "trigger-enter-active");
		background.classList.remove("open");
		console.log("LEAVE");
	})
);

// FIXED NAV
const firstNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");

window.addEventListener("scroll", fixedNav);
function fixedNav() {
	const windowHeight = window.pageYOffset;
	const secondNavHeight = secondNav.offsetTop;
	if (windowHeight > secondNavHeight) {
		firstNav.classList.add("hide");
		secondNav.classList.add("fixed", "shadow");
	} else {
		firstNav.classList.remove("hide");
		secondNav.classList.remove("fixed", "shadow");
	}
}

// SIDE MENU
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
	sideMenu.classList.add("show-menu");
	overlay.classList.add("dim-background");
});

closeBtn.addEventListener("click", () => {
	sideMenu.classList.remove("show-menu");
	overlay.classList.remove("dim-background");
	console.log("CLOSE BTN");
});

// DISPLAY FORM
const sidebarBtn = document.querySelector(".side-nav");
const form = document.querySelector("#form");
const closeForm = document.querySelector(".close-form");

sidebarBtn.addEventListener("click", () => {
	form.classList.toggle("show-form");
});

closeForm.addEventListener("click", () => {
	form.classList.remove("show-form");
});
