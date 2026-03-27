function getFooterPageLevel() {
    const path = window.location.pathname;
    const segments = path.split('/').filter((segment) => segment);
    return segments.length;
}

function generateFooter() {
    const level = getFooterPageLevel();
    const path = window.location.pathname;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    let basePath = './';
    let upPath = './';
    let aboutPath = './about/';

    if (level === 2) {
        basePath = '../';
        upPath = '../';
        aboutPath = '../about/';
    }

    const isHomePage = currentPage === 'index.html' && !path.includes('/about/') && !path.includes('/product/') && !path.includes('/news-gallery/') && !path.includes('/public-documents/') && !path.includes('/contact/');
    const isAboutPage = path.includes('/about/');
    const isProductPage = path.includes('/product/');
    const isNewsPage = path.includes('/news-gallery/');
    const isPublicDocumentsPage = path.includes('/public-documents/');
    const isContactPage = path.includes('/contact/');

    const getFooterLinkClass = (isActive) => {
        if (isActive) {
            return 'text-secondary font-semibold';
        }

        return 'text-white/65 hover:text-white transition-colors';
    };

    return `
    <footer class="bg-[#143C38] text-[#EEEDE4] pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
                <div class="space-y-5">
                    <a class="inline-flex items-center" href="${upPath}">
                        <img alt="PT Agrinas Pangan Nusantara Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uiDH3M0X_scpS3mzIngRW5r7H_4bNRo6QSxOxq-PxAnpY8Sgzu_XUuxgCrskD8RP6kfi8M6m6Tl5qlDMMTlUFKi_gwnFFg52_ZQacA05mTMYt5J55f0FEDWcxMQBezt-R_iWBfCSXFS019Am8RuT0YJDncoiHUK4i0arNdk6rwU2oJ3JDppUmKXRbYLPpj3Zh1Mj15fB-17145TwCFZyXuC7fvw1D4epWKIheTswXNaQ8ycYvQ2I8HRlzdZGRqyw7DCHBk2uq_tKw"/>
                    </a>
                    <p class="max-w-sm text-sm leading-relaxed text-white/65">
                        Membangun ketahanan pangan nasional melalui integrasi distribusi, inovasi pertanian, dan penguatan ekosistem agribisnis yang berkelanjutan.
                    </p>
                    <div class="flex gap-3">
                        <a class="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white hover:border-secondary transition-all" href="#">
                            <span class="material-symbols-outlined text-base">language</span>
                        </a>
                        <a class="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white hover:border-secondary transition-all" href="mailto:info@agrinas.co.id">
                            <span class="material-symbols-outlined text-base">mail</span>
                        </a>
                        <a class="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white hover:border-secondary transition-all" href="${basePath}contact/">
                            <span class="material-symbols-outlined text-base">call</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-[0.28em] text-secondary mb-6">Quick Links</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a class="${getFooterLinkClass(isHomePage)}" href="${upPath}">Home</a></li>
                        <li><a class="${getFooterLinkClass(isAboutPage)}" href="${aboutPath}company-profile.html">About Us</a></li>
                        <li><a class="${getFooterLinkClass(isProductPage)}" href="${basePath}product/">Product</a></li>
                        <li><a class="${getFooterLinkClass(isNewsPage)}" href="${basePath}news-gallery/">News &amp; Gallery</a></li>
                        <li><a class="${getFooterLinkClass(isPublicDocumentsPage)}" href="${basePath}public-documents/">Public Document</a></li>
                        <li><a class="${getFooterLinkClass(isContactPage)}" href="${basePath}contact/">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-[0.28em] text-secondary mb-6">Corporate</h4>
                    <ul class="space-y-4 text-sm text-white/65">
                        <li><a class="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Sustainability Report</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Whistleblowing System</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase tracking-[0.28em] text-secondary mb-6">Office</h4>
                    <div class="space-y-4 text-sm text-white/65 leading-relaxed">
                        <p>
                            PT Agrinas Pangan Nusantara<br/>
                            Jakarta, Indonesia
                        </p>
                        <p>
                            info@agrinas.co.id<br/>
                            +62 21 0000 0000
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-xs uppercase tracking-[0.22em] text-white/35 text-center md:text-left">
                    © 2024 PT Agrinas Pangan Nusantara. All Rights Reserved.
                </p>
                <div class="flex items-center gap-6 text-[10px] uppercase tracking-[0.24em] text-white/30">
                    <span>Integrity</span>
                    <span class="hidden sm:inline">|</span>
                    <span>Innovation</span>
                    <span class="hidden sm:inline">|</span>
                    <span>Sustainability</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = generateFooter();
    }
});
