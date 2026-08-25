const products = [
    {
        id: 1,
        name: "رواية رجال في الشمس",
        category: "fiction",
        price: 19,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YJ9w10XJEjBrcxektTxvO2_EZ0GzVhrxfPSaAp8aLZva9oopoVEHmAE&s=10"
    },

    {
        id: 2,
        name: "دليل البرمجة الاحترافيه",
        category: "tech",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf5yviIb4JK3_wuXAULIUsGNc4sqrHhaHFns2o8VqpeDfNMp8nN0D9ds&s=10"
    },

    {
        id: 3,
        name: "تاريخ عصر الاندلس",
        category: "history",
        price: 25,
        image: "https://media.zid.store/fe383165-6e0a-4ae0-b974-3e5cff958567/d256d17c-ddb3-47ad-85cb-21bb49f9d94c.jpg"
    },

    {
        id: 4,
        name: "تعلم الذكاء الاصطناعي",
        category: "tech",
        price: 40,
        image: "https://ak-asset.jarir.com/akeneo-prod/asset/0/c/3/7/0c37a65da38f196a41abe64371f409f016607bda_606917.jpg"
    },

     {
        id: 5,
        name: "سيرة خالد بن الوليد (رضي الله عنه)",
        category: "history",
        price: 22,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfLhenVAooi0QXuGqRHZpj9XTrYK_MFGnJtKTOojFm24ESGrgQ0PzinE&s=10"
    },
     {
        id: 6,
        name: "رواية أرض النفاق",
        category: "fiction",
        price: 18,
        image: "https://ibharbooks.com/cdn/shop/files/IMG-3177.jpg?v=1747731686&width=2473"
    },
     {
        id: 7,
        name: "مختصر رياض الصالحين",
        category: "islamic",
        price: 9,
        image: "https://cdn.salla.sa/DDpXV/5150b3ef-a850-4703-a006-20f96a4a7ade-1000x1000-P00jJmCzveYqozJX3bzIOMoj7uWlYnZm8EJlfTyy.jpg"
     },
     {
        id: 8,
        name: "مختصر قي تفسير القران",
        category: "islamic",
        price: 13,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0H5hc8oLTYUVSOJLCMcw2BbVLTsdlRZf_4XzK5jUi-AAm0d_Wo4fGFM&s=10"
     },
     {
        id: 9,
        name: "الداء والدواء",
        category: "islamic",
        price: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAFu1S9t-2hCj9g1OvLtO2E6k7rr2F7AAxs_DXLB9o-Wvn4NPjGU4ZYw&s=10"
     }
];

const productContainer = document.getElementById("productContainer");
function displayProducts(items) {
    productContainer.innerHTML = "";
    items.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
            >
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">
                اضافة للسلة
            </button>
        `;
        productContainer.appendChild(card);
    });
}

displayProducts(products);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(function(product) {
            return product.name
                .toLowerCase()
                .includes(searchText);
        }
    );
    displayProducts(filteredProducts);
});

const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.addEventListener("change", function() {
    const category = categoryFilter.value;
    if (category === "all") {
        displayProducts(products);
        return;
    }

    const filteredProducts = products.filter(function(product) {
            return product.category === category;
    });
    displayProducts(filteredProducts);
});

let cartCount = 0;
function addToCart(productId) {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
}

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");
        if (!name || !email || !message) {
            formMessage.textContent =
                "Please fill in all fields.";
            return;
        }
        formMessage.textContent =
            "Message sent successfully!";
        contactForm.reset();
    }
);