// Generate navbar with correct routing
function generateNavbar() {
    const path = window.location.pathname;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const isAboutSection = path.includes('/about/');
    const isSubSectionPage =
        isAboutSection ||
        path.includes('/product/') ||
        path.includes('/news-gallery/') ||
        path.includes('/public-documents/') ||
        path.includes('/contact/');

    let basePath = './';
    let upPath = './';
    let aboutPath = './about/';

    if (isAboutSection) {
        basePath = '../';
        upPath = '../';
        aboutPath = './';
    } else if (isSubSectionPage) {
        basePath = '../';
        upPath = '../';
        aboutPath = '../about/';
    }
    
    // Determine active page for About dropdown
    const aboutPages = ['company-profile.html', 'history.html', 'vision-mission.html', 'organizational-structure.html', 'company-structure.html'];
    const isAboutPage = aboutPages.includes(currentPage);
    const activeAboutPage = isAboutPage ? currentPage : '';
    const isHomePage = currentPage === 'index.html' && !path.includes('/about/') && !path.includes('/product/') && !path.includes('/news-gallery/') && !path.includes('/public-documents/') && !path.includes('/contact/');
    const isProductPage = path.includes('/product/');
    const isNewsPage = path.includes('/news-gallery/');
    const isPublicDocumentsPage = path.includes('/public-documents/');
    const isContactPage = path.includes('/contact/');

    const getNavLinkClass = (isActive) => {
        if (isActive) {
            return "font-['Manrope'] font-bold tracking-tight text-xs uppercase text-[#C49C34] dark:text-[#C49C34] border-b-2 border-[#C49C34] pb-1";
        }

        return "font-['Manrope'] font-bold tracking-tight text-xs uppercase text-[#143C38] dark:text-[#EEEDE4] hover:text-[#C49C34] transition-colors";
    };
    
    const navbar = `
    <!-- Top Navigation Bar -->
    <header class="w-full top-0 sticky z-50 bg-[#EEEDE4] dark:bg-[#143C38] shadow-sm">
    <div class="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
    <div class="flex items-center">
        <a href="${upPath}">
            <img alt="PT AGRINAS PANGAN NUSANTARA Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uiDH3M0X_scpS3mzIngRW5r7H_4bNRo6QSxOxq-PxAnpY8Sgzu_XUuxgCrskD8RP6kfi8M6m6Tl5qlDMMTlUFKi_gwnFFg52_ZQacA05mTMYt5J55f0FEDWcxMQBezt-R_iWBfCSXFS019Am8RuT0YJDncoiHUK4i0arNdk6rwU2oJ3JDppUmKXRbYLPpj3Zh1Mj15fB-17145TwCFZyXuC7fvw1D4epWKIheTswXNaQ8ycYvQ2I8HRlzdZGRqyw7DCHBk2uq_tKw"/>
        </a>
    </div>
    <nav class="hidden lg:flex items-center space-x-6">
        <a class="${getNavLinkClass(isHomePage)}" href="${upPath}">Home</a>
        <div class="group relative" onmouseover="this.setAttribute('data-open', 'true')" onmouseout="this.removeAttribute('data-open')">
            <button class="flex items-center gap-1 font-['Manrope'] font-bold tracking-tight text-xs uppercase ${isAboutPage ? 'text-[#C49C34] border-b-2 border-[#C49C34] pb-1' : 'text-[#143C38] dark:text-[#EEEDE4] hover:text-[#C49C34]'} transition-colors pointer-events-auto" type="button">
                About Us
                <span class="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div class="absolute top-full left-0 mt-0 pt-1 w-48 z-50 pointer-events-none group-hover:pointer-events-auto" onmouseover="this.parentElement.setAttribute('data-open', 'true')" onmouseout="this.parentElement.removeAttribute('data-open')">
                <div class="bg-white dark:bg-[#143C38] shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-outline-variant/20 pointer-events-auto group-data-[open=true]:opacity-100 group-data-[open=true]:visible">
                <a class="block px-4 py-2 text-xs font-bold ${activeAboutPage === 'company-profile.html' ? 'text-[#C49C34] bg-[#EEEDE4] dark:bg-[#143C38]' : 'text-[#143C38] dark:text-[#EEEDE4] hover:bg-[#EEEDE4] dark:hover:bg-[#143C38]'} transition-colors" href="${aboutPath}company-profile.html">Company Profile</a>
                <a class="block px-4 py-2 text-xs font-bold ${activeAboutPage === 'history.html' ? 'text-[#C49C34] bg-[#EEEDE4] dark:bg-[#143C38]' : 'text-[#143C38] dark:text-[#EEEDE4] hover:bg-[#EEEDE4] dark:hover:bg-[#143C38]'} transition-colors" href="${aboutPath}history.html">History</a>
                <a class="block px-4 py-2 text-xs font-bold ${activeAboutPage === 'vision-mission.html' ? 'text-[#C49C34] bg-[#EEEDE4] dark:bg-[#143C38]' : 'text-[#143C38] dark:text-[#EEEDE4] hover:bg-[#EEEDE4] dark:hover:bg-[#143C38]'} transition-colors" href="${aboutPath}vision-mission.html">Vision &amp; Mission</a>
                <a class="block px-4 py-2 text-xs font-bold ${activeAboutPage === 'organizational-structure.html' ? 'text-[#C49C34] bg-[#EEEDE4] dark:bg-[#143C38]' : 'text-[#143C38] dark:text-[#EEEDE4] hover:bg-[#EEEDE4] dark:hover:bg-[#143C38]'} transition-colors" href="${aboutPath}organizational-structure.html">Organizational Structure</a>
                <a class="block px-4 py-2 text-xs font-bold ${activeAboutPage === 'company-structure.html' ? 'text-[#C49C34] bg-[#EEEDE4] dark:bg-[#143C38]' : 'text-[#143C38] dark:text-[#EEEDE4] hover:bg-[#EEEDE4] dark:hover:bg-[#143C38]'} transition-colors" href="${aboutPath}company-structure.html">Company Structure</a>
                </div>
            </div>
        </div>
        <a class="${getNavLinkClass(isProductPage)}" href="${basePath}product/">Product</a>
        <a class="${getNavLinkClass(isNewsPage)}" href="${basePath}news-gallery/">News &amp; Gallery</a>
        <a class="${getNavLinkClass(isPublicDocumentsPage)}" href="${basePath}public-documents/">Public Document</a>
        <a class="${getNavLinkClass(isContactPage)}" href="${basePath}contact/">Contact Us</a>
    </nav>
    <div class="flex items-center space-x-6">
        <div class="flex items-center gap-2 text-xs font-bold text-primary">
            <span class="opacity-40 cursor-pointer hover:opacity-100">ID</span>
            <span class="opacity-20">|</span>
            <span class="cursor-pointer">EN</span>
        </div>
        <button class="lg:hidden text-[#143C38] dark:text-[#EEEDE4]">
            <span class="material-symbols-outlined">menu</span>
        </button>
    </div>
    </div>
    </header>
    `;
    
    return navbar;
}

// Insert navbar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        navContainer.innerHTML = generateNavbar();
    }
});
