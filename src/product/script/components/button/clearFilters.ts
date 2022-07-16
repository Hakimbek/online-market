const clearFilters = () => {
    (document.getElementById('clearFilters') as HTMLElement).addEventListener('click', () => {
        localStorage.setItem('searchInput', '');
        localStorage.setItem('category', 'all');
        localStorage.setItem('company', 'all');
        localStorage.setItem('amountLeftValue', '0');
        localStorage.setItem('amountRightValue', '100');
        localStorage.setItem('yearLeftValue', '0');
        localStorage.setItem('yearRightValue', '100');
        localStorage.setItem('isClicked', 'false');
        localStorage.setItem('isPopular', 'false');

        document.location.reload();
    })
}

export default clearFilters;