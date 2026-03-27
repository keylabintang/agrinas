function generateAboutSidebar() {
    const currentPage = window.location.pathname.split('/').pop() || 'company-profile.html';

    const items = [
        { href: './company-profile.html', label: 'Company Profile', page: 'company-profile.html' },
        { href: './history.html', label: 'History', page: 'history.html' },
        { href: './vision-mission.html', label: 'Vision & Mission', page: 'vision-mission.html' },
        { href: './organizational-structure.html', label: 'Organizational Structure', page: 'organizational-structure.html' },
        { href: './company-structure.html', label: 'Company Structure', page: 'company-structure.html' }
    ];

    const navItems = items.map((item) => {
        const isActive = item.page === currentPage;
        const itemClass = isActive
            ? 'font-manrope font-semibold text-sm text-[#775a00] font-bold border-l-4 border-[#775a00] pl-4 transition-all duration-200 py-2 w-full block'
            : 'font-manrope font-semibold text-sm text-[#143C38] dark:text-[#fbfaf0] pl-4 opacity-60 hover:bg-[#e4e3da] dark:hover:bg-[#2c2d24] transition-all duration-200 py-2 w-full block';

        return `<a class="${itemClass}" href="${item.href}">${item.label}</a>`;
    }).join('');

    return `
    <div class="sticky top-24 bg-[#f5f4eb] dark:bg-[#1b1c17] rounded-xl overflow-hidden">
        <div class="p-6 bg-[#e4e3da] dark:bg-[#25261d]">
            <h2 class="font-headline font-extrabold text-[#143C38] uppercase tracking-tighter">About Us</h2>
            <p class="text-[10px] uppercase tracking-widest text-secondary font-bold">The Earth's Architect</p>
        </div>
        <nav class="flex flex-row overflow-x-auto md:flex-col items-start gap-4 p-6 w-full">
            ${navItems}
        </nav>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebarContainer = document.getElementById('about-sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = generateAboutSidebar();
    }
});
