const clearLocalStorage = () => {
    (document.getElementById('clearLocalStorage') as HTMLElement).addEventListener('click', () => {
        localStorage.clear();

        localStorage.setItem('searchInput', '');
        localStorage.setItem('category', 'all');
        localStorage.setItem('company', 'all');
        localStorage.setItem('amountLeftValue', '0');
        localStorage.setItem('amountRightValue', '100');
        localStorage.setItem('yearLeftValue', '0');
        localStorage.setItem('yearRightValue', '100');
        localStorage.setItem('sort', 'nameAsc');
        localStorage.setItem('isPopular', 'false');

        document.location.reload();
    })
}

export default clearLocalStorage;