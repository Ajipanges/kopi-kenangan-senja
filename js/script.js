//toogle class active//
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () =>{

    navbarNav.classlist.toggle('active');
}

//untulk menghilanhkan nav//
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListner('click', (e) => { }); {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classlist.remove('active');
    }
    
};