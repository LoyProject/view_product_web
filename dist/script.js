function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// Product data
const products = [
    { id: 1, title: "Product 1", description: "Description for product 1", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL-110926-Injector-Cleaner-Diesel-1L_png.png&w=1080&q=75" },
    { id: 2, title: "Product 2", description: "Description for product 2", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 3, title: "Product 3", description: "Description for product 3", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 4, title: "Product 4", description: "Description for product 4", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 5, title: "Product 5", description: "Description for product 5", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 6, title: "Product 6", description: "Description for product 6", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 7, title: "Product 7", description: "Description for product 7", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 8, title: "Product 8", description: "Description for product 8", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 1, title: "Product 1", description: "Description for product 1", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL-110926-Injector-Cleaner-Diesel-1L_png.png&w=1080&q=75" },
    { id: 2, title: "Product 2", description: "Description for product 2", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 3, title: "Product 3", description: "Description for product 3", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 4, title: "Product 4", description: "Description for product 4", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
];

// Reference to the Product Grid Container
const productsPerPage = 4;
let currentPage = 1;

const productGrid = document.getElementById('productGrid');
if (productGrid) {
    fetchProducts(currentPage);
}

function fetchProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    displayProducts(paginatedProducts);
}

function displayProducts(products) {
    const productHTML = products.map(product => `
        <a href="product-detail.html?id=${product.id}" class="block max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img class="w-full h-80 object-contain" src="${product.image}" alt="${product.title}">
            <div class="p-5">
                <h2 class="text-xl font-semibold text-gray-800">${product.title}</h2>
                <p class="text-gray-600 mt-2">${product.description}</p>
            </div>
        </a>
    `).join('');
    productGrid.innerHTML = productHTML;
}

function goToPage(page) {
    currentPage = page;
    fetchProducts(page);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchProducts(currentPage);
    }
}

function nextPage() {
    if (currentPage * productsPerPage < products.length) {
        currentPage++;
        fetchProducts(currentPage);
    }
}

// Function to Fetch Product ID from URL
function getProductId() { 
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// Function to Display Product Details
function displayProductDetails() {
    const productId = getProductId();
    const product = products.find(p => p.id === productId);
    const productDetailContainer = document.getElementById('productDetail');

    if (product && productDetailContainer) {
        productDetailContainer.innerHTML = `
            <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div class="px-2 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src="${product.image}" alt="${product.title}" class="w-1/2 rounded object-cover mx-auto" />
                            <button type="button" class="absolute top-4 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" class="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="lg:col-span-2 flex flex-col justify-between">
                        <h2 class="text-2xl font-extrabold">${product.title}</h2>
                        <p class="mt-4 text-sm text-gray-600 break-words max-h-32 overflow-auto">${product.description}</p>
                        <div class="flex flex-wrap gap-4 mt-8">
                            <button type="button" class="min-w-[200px] px-4 py-3 bg-gray-600 hover:bg-red-700 text-white text-sm font-semibold rounded">Back to Product List</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (productDetailContainer) {
        productDetailContainer.innerHTML = `<p class="text-center text-red-500">Product not found!</p>`;
    }
}

// Initialize Product Detail Display (Only on Product Detail Page)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productDetail')) {
        displayProductDetails();
    }
});



// Mobile menu toggle function
function onToggleMenu(e) {
    const navLinks = document.querySelector('.nav-links');
    const icon = e.querySelector('ion-icon');
    icon.name = icon.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
}
