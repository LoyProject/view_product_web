
// Note: This file is used for demo purposes only
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// Reference to the Product Grid Container
const products = [
    { id: 1, title: "Product 1", description: "Description for product 1", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL-110926-Injector-Cleaner-Diesel-1L_png.png&w=1080&q=75" },
    { id: 2, title: "Product 2", description: "Description for product 2", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 3, title: "Product 3", description: "Description for product 3", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 4, title: "Product 4", description: "Description for product 4", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 5, title: "Product 5", description: "Description for product 5", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 6, title: "Product 6", description: "Description for product 6", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 7, title: "Product 7", description: "Description for product 7", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 8, title: "Product 8", description: "Description for product 8", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
    { id: 9, title: "Product 9", description: "Description for product 9", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL-110926-Injector-Cleaner-Diesel-1L_png.png&w=1080&q=75" },
    { id: 1, title: "Product 10", description: "Description for product 10", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 2, title: "Product 11", description: "Description for product 11", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112828_AUTO%2520COOL%2520ESSENTIAL%25204X5L_png.png&w=1080&q=75" },
    { id: 3, title: "Product 12", description: "Description for product 12", image: "https://www.motul.com/_next/image?url=https%3A%2F%2Fazupim01.motul.com%2Fmedia%2FmotulData%2FIM%2Fbigweb%2FMOTUL_112650_AUTO%2520COOL%2520G12%2520EVO%2520-37%25C2%25B0C%252012X1L_png.png&w=1080&q=75" },
];

// Reference to the Product Grid Container
const productsPerPage = 8;
let currentPage = 1;


const productGrid = document.getElementById('productGrid');
if (productGrid) {
    fetchProducts(currentPage);
}

// Function to fetch products based on the current page
function fetchProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    if (paginatedProducts.length > 0) {
        displayProducts(paginatedProducts);
    } else {
        productGrid.innerHTML = '<p>No products available.</p>';
    }
}

// Function to display products in the grid
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

// Function to navigate to the next or previous page
function goToPage(page) {
    currentPage = page;
    fetchProducts(page);
}

// Function to navigate to the next or previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchProducts(currentPage);
    }
}

// Function to navigate to the next or previous page
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

// Function to Fetch Product Details
function changeBgColor(element) {
    // Reset background color for all pagination buttons
    const buttons = document.querySelectorAll('#pagination li');
    buttons.forEach(button => {
        button.classList.remove('bg-blue-500', 'text-white');
        button.classList.add('bg-gray-100', 'text-gray-800');
    });

    // Set background color for the clicked button
    element.classList.remove('bg-gray-100', 'text-gray-800');
    element.classList.add('bg-blue-500', 'text-white');
}

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    // If product is found, update the product detail page
    if (product) {
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productImage').src = product.image;
    } else {
        document.getElementById('productDetail').innerHTML = '<p>Product not found.</p>';
    }
});

//const modal = document.getElementById('contactModal');
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
}

// Close the modal when the user clicks outside of the modal
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    toggleModal('contactModal');
});

// Mobile menu toggle function
function onToggleMenu(e) {
    const navLinks = document.querySelector('.nav-links');
    const icon = e.querySelector('ion-icon');
    icon.name = icon.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
}
