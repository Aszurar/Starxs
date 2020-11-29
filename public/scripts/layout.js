const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

menuItems.forEach(item => {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }    
});