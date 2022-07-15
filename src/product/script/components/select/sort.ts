const sort = () => {
    (document.getElementById('sort') as HTMLElement).addEventListener('change', (e) => {
        localStorage.setItem('sort', (e.target as HTMLSelectElement).value);
    });
}

export default sort;