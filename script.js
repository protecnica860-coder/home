const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const activateTab = (tab) => {
  tabs.forEach((item) => item.classList.remove("active"));
  panels.forEach((panel) => panel.classList.remove("active"));

  tab.classList.add("active");
  const target = document.getElementById(tab.dataset.tab);
  if (target) {
    target.classList.add("active");
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab));
});

let currentIndex = 0;
const cycleTabs = () => {
  currentIndex = (currentIndex + 1) % tabs.length;
  activateTab(tabs[currentIndex]);
};

setInterval(cycleTabs, 6000);
