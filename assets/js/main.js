const sideNavEle = document.querySelector('.sidenav');
const collapsibleEle = document.querySelector('.collapsible');
new M.Sidenav(sideNavEle);
new M.Collapsible(collapsibleEle);

$(function() {
    

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
});