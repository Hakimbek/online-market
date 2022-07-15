import category from "./category";

const clearLocalStorage = () => {
    (document.getElementById('clearLocalStorage') as HTMLElement).addEventListener('click', (e) => {
        localStorage.clear();

        localStorage.setItem('searchInput', '');
        localStorage.setItem('category', 'all');
        localStorage.setItem('company', 'all');
        localStorage.setItem('amountLeftValue', '0');
        localStorage.setItem('amountRightValue', '100');
        localStorage.setItem('yearLeftValue', '0');
        localStorage.setItem('yearRightValue', '100');
        localStorage.setItem('sort', 'nameAsc');

        document.location.reload();
    })
}

export default clearLocalStorage;