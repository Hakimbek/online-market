const company = () => {
    (document.getElementById('company') as HTMLElement).addEventListener('change', (e) => {
        localStorage.setItem('company', (e.target as HTMLSelectElement).value);
    });
}

export default company;