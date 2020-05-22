function toggleNavbar(){
    let responsiveMenu = document.querySelector('.li-items').classList;
    responsiveMenu.contains('show')?
    responsiveMenu.remove('show'):
    responsiveMenu.add('show')
    
}