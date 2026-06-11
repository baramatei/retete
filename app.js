// Application State (the 'recipes' array is loaded globally from recipes.js)
let currentCategory = "toate";
let searchQuery = "";
let favorites = JSON.parse(localStorage.getItem("recipe_favorites")) || [];
let onlyFavoritesMode = false;

// Modal State
let activeRecipe = null;
let currentMultiplier = 1;

// Theme State
let currentTheme = localStorage.getItem("app_theme") || "dark";

// DOM Elements
const recipesGrid = document.getElementById("recipesGrid");
const searchInput = document.getElementById("searchInput");
const filterTags = document.querySelectorAll(".filter-tag");
const favToggleBtn = document.getElementById("favToggleBtn");
const favBadge = document.getElementById("favBadge");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Modal DOM Elements
const modalOverlay = document.getElementById("recipeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalHeroImg = document.getElementById("modalHeroImg");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const specTime = document.getElementById("specTime");
const specDifficulty = document.getElementById("specDifficulty");
const servingsCount = document.getElementById("servingsCount");
const btnDecreaseServings = document.getElementById("decreaseServings");
const btnIncreaseServings = document.getElementById("increaseServings");
const ingredientsList = document.getElementById("ingredientsList");
const utensilsList = document.getElementById("utensilsList");
const stepsList = document.getElementById("stepsList");

// Initialize Application
function init() {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon();

    // Event Listeners
    searchInput.addEventListener("input", handleSearch);
    favToggleBtn.addEventListener("click", toggleFavoritesFilter);
    themeToggle.addEventListener("click", toggleTheme);
    
    // Category click handler
    filterTags.forEach(tag => {
        tag.addEventListener("click", (e) => {
            filterTags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            currentCategory = tag.getAttribute("data-category");
            renderRecipes();
        });
    });

    // Modal Events
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    btnDecreaseServings.addEventListener("click", () => adjustServings(-1));
    btnIncreaseServings.addEventListener("click", () => adjustServings(1));



    // Initial render
    updateFavoritesBadge();
    renderRecipes();
}

// Search Logic
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderRecipes();
}

// Render Recipe Cards
function renderRecipes() {
    recipesGrid.innerHTML = "";

    const filtered = recipes.filter(recipe => {
        // Filter by Category
        const matchesCategory = currentCategory === "toate" || recipe.category.toLowerCase() === currentCategory.toLowerCase();
        
        // Filter by Search Query (title or ingredients)
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery) || 
                              recipe.desc.toLowerCase().includes(searchQuery) ||
                              recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery));
        
        // Filter by Favorites
        const matchesFavorite = !onlyFavoritesMode || favorites.includes(recipe.id);

        return matchesCategory && matchesSearch && matchesFavorite;
    });

    if (filtered.length === 0) {
        recipesGrid.innerHTML = `
            <div class="empty-state">
                <i class="far fa-sad-tear"></i>
                <h3>Nicio rețetă găsită</h3>
                <p>Încearcă să schimbi filtrele sau să cauți altceva.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(recipe => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.setAttribute("data-id", recipe.id);
        
        card.innerHTML = `
            <div class="recipe-img-container">
                <img class="recipe-img" src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <button class="fav-btn ${isFav ? 'is-fav' : ''}" aria-label="Adaugă la favorite">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="recipe-card-content">
                <div class="recipe-card-meta">
                    <span class="meta-category">${recipe.category}</span>
                    <span class="meta-difficulty">${recipe.difficulty}</span>
                </div>
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-desc">${recipe.desc}</p>
                <div class="recipe-card-footer">
                    <div class="footer-item">
                        <i class="far fa-clock"></i>
                        <span>${recipe.duration} min</span>
                    </div>
                    <div class="footer-item">
                        <i class="fas fa-utensils"></i>
                        <span>${recipe.ingredients.length} ingrediente</span>
                    </div>
                </div>
            </div>
        `;

        // Card Click opens details (except when clicking the favorite heart button)
        card.addEventListener("click", (e) => {
            if (e.target.closest(".fav-btn")) {
                toggleFavorite(recipe.id, e.target.closest(".fav-btn"));
            } else {
                openModal(recipe);
            }
        });

        recipesGrid.appendChild(card);
    });
}

// Favorite Toggle Logic
function toggleFavorite(recipeId, btnElement) {
    const index = favorites.indexOf(recipeId);
    if (index === -1) {
        favorites.push(recipeId);
        btnElement.classList.add("is-fav");
        btnElement.querySelector("i").className = "fas fa-heart";
        
        // Micro-animation for favorite addition
        btnElement.style.transform = "scale(1.3)";
        setTimeout(() => btnElement.style.transform = "", 200);
    } else {
        favorites.splice(index, 1);
        btnElement.classList.remove("is-fav");
        btnElement.querySelector("i").className = "far fa-heart";
    }

    localStorage.setItem("recipe_favorites", JSON.stringify(favorites));
    updateFavoritesBadge();

    // If we are in favorites only mode, we re-render immediately to update list
    if (onlyFavoritesMode) {
        renderRecipes();
    }
}

function updateFavoritesBadge() {
    favBadge.textContent = favorites.length;
    if (favorites.length > 0) {
        favBadge.style.display = "flex";
    } else {
        favBadge.style.display = "none";
    }
}

function toggleFavoritesFilter() {
    onlyFavoritesMode = !onlyFavoritesMode;
    favToggleBtn.classList.toggle("active", onlyFavoritesMode);
    
    // Update filter tags styling to reflect we're focusing on favorites
    if (onlyFavoritesMode) {
        filterTags.forEach(t => t.classList.remove("active"));
        document.querySelector('[data-category="toate"]').classList.add("active");
        currentCategory = "toate";
    }
    
    renderRecipes();
}

// Theme Switching
function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("app_theme", currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    if (currentTheme === "light") {
        themeIcon.className = "fas fa-moon";
    } else {
        themeIcon.className = "fas fa-sun";
    }
}

// Modal Details Logic
function openModal(recipe) {
    activeRecipe = recipe;
    currentMultiplier = 1;
    
    modalHeroImg.src = recipe.image;
    modalHeroImg.alt = recipe.title;
    modalCategory.textContent = recipe.category;
    modalTitle.textContent = recipe.title;
    modalDesc.textContent = recipe.desc;
    
    specTime.textContent = `${recipe.duration} min`;
    specDifficulty.textContent = recipe.difficulty;
    servingsCount.textContent = recipe.servings;
    
    renderIngredients();
    renderUtensils();
    renderSteps();

    // Disable body scroll when modal is active
    document.body.style.overflow = "hidden";
    modalOverlay.classList.add("active");
}

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    activeRecipe = null;
}

// Adjust servings dynamically and scale ingredients
function adjustServings(delta) {
    if (!activeRecipe) return;
    
    const newServings = activeRecipe.servings * currentMultiplier + delta;
    // Allow between 1 and 24 servings
    if (newServings >= 1 && newServings <= 24) {
        currentMultiplier = newServings / activeRecipe.servings;
        servingsCount.textContent = newServings;
        renderIngredients();
    }
}

// Helper to format ingredient quantities cleanly
function formatQuantity(value) {
    if (value === null) return "";
    
    // Round to 2 decimal places to avoid floating point issues (e.g. 0.33333)
    const rounded = Math.round(value * 100) / 100;
    
    // Return fractions for small numbers if helpful (optional)
    if (rounded === 0.5) return "½";
    if (rounded === 0.25) return "¼";
    if (rounded === 0.75) return "¾";
    
    return rounded;
}

// Render dynamic ingredients list
function renderIngredients() {
    if (!activeRecipe) return;
    
    ingredientsList.innerHTML = "";
    
    activeRecipe.ingredients.forEach(ing => {
        const li = document.createElement("li");
        li.className = "interactive-item";
        
        let qtyText = "";
        if (ing.value !== null) {
            const scaledQty = ing.value * currentMultiplier;
            qtyText = `<span class="ingredient-qty">${formatQuantity(scaledQty)}</span> ${ing.unit}`;
        }
        
        li.innerHTML = `
            <span class="checkbox-custom"><i class="fas fa-check"></i></span>
            <span class="item-text">${qtyText} ${ing.name}</span>
        `;
        
        // Click toggles checkmark
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
        });
        
        ingredientsList.appendChild(li);
    });
}

// Render utensils list
function renderUtensils() {
    if (!activeRecipe) return;
    
    utensilsList.innerHTML = "";
    
    activeRecipe.utensils.forEach(utensil => {
        const li = document.createElement("li");
        li.className = "interactive-item";
        li.innerHTML = `
            <span class="checkbox-custom"><i class="fas fa-check"></i></span>
            <span class="item-text">${utensil}</span>
        `;
        
        // Click toggles checkmark
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
        });
        
        utensilsList.appendChild(li);
    });
}

// Render step-by-step instructions
function renderSteps() {
    if (!activeRecipe) return;
    
    stepsList.innerHTML = "";
    
    activeRecipe.steps.forEach((step, idx) => {
        const div = document.createElement("div");
        div.className = "step-card";
        
        div.innerHTML = `
            <div class="step-number">${idx + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.text}</p>
            </div>
        `;
        
        // Click marks the entire step card as done
        div.addEventListener("click", () => {
            div.classList.toggle("completed");
        });
        
        stepsList.appendChild(div);
    });
}

// Launch app
document.addEventListener("DOMContentLoaded", init);
