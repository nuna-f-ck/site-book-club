const books = [
  {
    title: "Посёлок",
    author: "Кир Булычёв",
    genre: "Научная фантастика",
    description:
      "История о людях, которые после крушения космического корабля пытаются выжить на чужой планете и сохранить связь с человеческой цивилизацией.",
    status: "Прочитано в этом семестре"
  },
  {
    title: "Пикник на обочине",
    author: "Аркадий и Борис Стругацкие",
    genre: "Научная фантастика, философская проза",
    description:
      "Произведение о Зоне, сталкерах, человеческих желаниях и цене, которую человек готов заплатить за исполнение мечты.",
    status: "Прочитано в этом семестре"
  },
  {
    title: "Мы",
    author: "Евгений Замятин",
    genre: "Антиутопия",
    description:
      "Один из главных антиутопических романов о государстве, свободе личности, контроле и праве человека на индивидуальность.",
    status: "Прочитано в этом семестре"
  },
  {
    title: "Записки юного врача + Морфий",
    author: "Михаил Булгаков",
    genre: "Автобиографическая проза, драма",
    description:
      "Цикл рассказов о молодом враче, ответственности, страхе, профессиональном взрослении и тяжёлых нравственных ситуациях.",
    status: "Прочитано в этом семестре"
  },
  {
    title: "Кэрри",
    author: "Стивен Кинг",
    genre: "Хоррор, психологическая драма",
    description:
      "Роман о травле, одиночестве, скрытой силе и последствиях жестокости со стороны общества.",
    status: "Прочитано в этом семестре"
  },
  {
    title: "Овод",
    author: "Этель Лилиан Войнич",
    genre: "Исторический роман, драма",
    description:
      "История о революционной борьбе, личной трагедии, вере, предательстве и внутренней стойкости человека.",
    status: "В процессе чтения"
  }
];

const theatreEvents = [
  {
    title: "Красная Жизель",
    date: "26 мая 2026, 18:30",
    place: "Чувашский государственный театр оперы и балета",
    description:
      "Балет Бориса Эйфмана. Гастрольный спектакль Санкт-Петербургского государственного театра балета Бориса Эйфмана."
  },
  {
    title: "Красная Жизель",
    date: "27 мая 2026, 18:30",
    place: "Чувашский государственный театр оперы и балета",
    description:
      "Повторный показ балета Бориса Эйфмана на сцене театра «Волга Опера» в Чебоксарах."
  },
  {
    title: "Спящая красавица",
    date: "4 июня 2026, 18:30",
    place: "Чувашский государственный театр оперы и балета",
    description:
      "Классический балет в двух действиях на музыку Петра Чайковского."
  },
  {
    title: "Чиполлино",
    date: "7 июня 2026, 16:00",
    place: "Чувашский государственный театр оперы и балета",
    description:
      "Балет в двух действиях на музыку Карена Хачатуряна. Хороший вариант для лёгкого коллективного похода."
  },
  {
    title: "Анна Каренина",
    date: "25 июня 2026, 18:30",
    place: "Чувашский государственный театр оперы и балета",
    description:
      "Балет в двух действиях на музыку П. И. Чайковского и С. В. Рахманинова. Закрытие 66-го театрального сезона «Волга Балет»."
  }
];

const defaultReviews = [
  {
    id: "default-review-1",
    name: "Мария",
    title: "Пикник на обочине",
    rating: "5",
    text:
      "Книга понравилась атмосферой и тем, что после неё хочется обсуждать не только сюжет, но и вопросы выбора, риска и человеческих желаний.",
    date: "20.05.2026"
  },
  {
    id: "default-review-2",
    name: "Илья",
    title: "Мы",
    rating: "5",
    text:
      "Сильная антиутопия. Особенно интересно было сравнивать идеи Замятина с современными темами контроля и личной свободы.",
    date: "22.05.2026"
  }
];

const defaultRecommendations = [
  {
    id: "default-recommendation-1",
    name: "Алина",
    type: "Фильм",
    title: "Общество мёртвых поэтов",
    genre: "Драма",
    text:
      "Фильм хорошо подходит книжному клубу, потому что он про литературу, преподавателя, вдохновение и смелость думать самостоятельно.",
    date: "18.05.2026"
  },
  {
    id: "default-recommendation-2",
    name: "Даниил",
    type: "Книга",
    title: "451 градус по Фаренгейту",
    genre: "Антиутопия, фантастика",
    text:
      "Кажется хорошим вариантом после Замятина. Можно обсудить тему запрета книг, цензуры и роли чтения в обществе.",
    date: "21.05.2026"
  }
];

const REVIEWS_STORAGE_KEY = "singularityBookClubReviews";
const RECOMMENDATIONS_STORAGE_KEY = "singularityBookClubRecommendations";
const RECOMMENDATION_MONTH_KEY = "singularityBookClubRecommendationMonth";

const booksList = document.querySelector("#booksList");
const theatreList = document.querySelector("#theatreList");
const reviewsList = document.querySelector("#reviewsList");
const recommendationsList = document.querySelector("#recommendationsList");

const booksEmpty = document.querySelector("#booksEmpty");
const reviewsEmpty = document.querySelector("#reviewsEmpty");
const recommendationsEmpty = document.querySelector("#recommendationsEmpty");

const bookSearch = document.querySelector("#bookSearch");

const reviewForm = document.querySelector("#reviewForm");
const reviewName = document.querySelector("#reviewName");
const reviewTitle = document.querySelector("#reviewTitle");
const reviewRating = document.querySelector("#reviewRating");
const reviewText = document.querySelector("#reviewText");
const charCounter = document.querySelector("#charCounter");

const nameError = document.querySelector("#nameError");
const titleError = document.querySelector("#titleError");
const ratingError = document.querySelector("#ratingError");
const textError = document.querySelector("#textError");

const clearReviewsButton = document.querySelector("#clearReviewsButton");

const recommendationForm = document.querySelector("#recommendationForm");
const recommendationName = document.querySelector("#recommendationName");
const recommendationType = document.querySelector("#recommendationType");
const recommendationTitle = document.querySelector("#recommendationTitle");
const recommendationGenre = document.querySelector("#recommendationGenre");
const recommendationText = document.querySelector("#recommendationText");
const recommendationCharCounter = document.querySelector("#recommendationCharCounter");
const recommendationSubmitButton = document.querySelector("#recommendationSubmitButton");
const recommendationLimitNote = document.querySelector("#recommendationLimitNote");

const recommendationNameError = document.querySelector("#recommendationNameError");
const recommendationTypeError = document.querySelector("#recommendationTypeError");
const recommendationTitleError = document.querySelector("#recommendationTitleError");
const recommendationGenreError = document.querySelector("#recommendationGenreError");
const recommendationTextError = document.querySelector("#recommendationTextError");

const clearRecommendationsButton = document.querySelector("#clearRecommendationsButton");

const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function getCurrentMonthKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}`;
}

function renderBooks(items) {
  booksList.innerHTML = "";

  if (items.length === 0) {
    booksEmpty.classList.remove("hidden");
    return;
  }

  booksEmpty.classList.add("hidden");

  items.forEach((book) => {
    const card = createElement("article", "book-card");

    const title = createElement("h3", "", book.title);

    const meta = createElement("div", "card-meta");
    const author = createElement("span", "tag", book.author);
    const genre = createElement("span", "tag tag-light", book.genre);

    const description = createElement("p", "card-description", book.description);
    const status = createElement("p", "", book.status);

    const action = createElement("div", "card-action");
    const button = createElement("button", "small-button", "Добавить отзыв");
    button.type = "button";

    button.addEventListener("click", () => {
      reviewTitle.value = book.title;
      document.querySelector("#reviews").scrollIntoView({ behavior: "smooth" });
      reviewName.focus();
    });

    meta.append(author, genre);
    action.append(button);
    card.append(title, meta, description, status, action);

    booksList.append(card);
  });
}

function renderTheatreEvents() {
  theatreList.innerHTML = "";

  theatreEvents.forEach((event) => {
    const card = createElement("article", "event-card");

    const title = createElement("h3", "", event.title);

    const meta = createElement("div", "card-meta");
    const date = createElement("span", "tag", event.date);
    const place = createElement("span", "tag tag-light", event.place);

    const description = createElement("p", "card-description", event.description);

    meta.append(date, place);
    card.append(title, meta, description);

    theatreList.append(card);
  });
}

function getItemsFromStorage(storageKey, defaultItems) {
  const savedItems = localStorage.getItem(storageKey);

  if (!savedItems) {
    return defaultItems;
  }

  try {
    const parsedItems = JSON.parse(savedItems);

    if (Array.isArray(parsedItems)) {
      return parsedItems;
    }

    return defaultItems;
  } catch (error) {
    return defaultItems;
  }
}

function saveItemsToStorage(storageKey, items) {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function getRatingStars(rating) {
  const numberRating = Number(rating);
  return "★".repeat(numberRating) + "☆".repeat(5 - numberRating);
}

function renderReviews() {
  const reviews = getItemsFromStorage(REVIEWS_STORAGE_KEY, defaultReviews);
  reviewsList.innerHTML = "";

  if (reviews.length === 0) {
    reviewsEmpty.classList.remove("hidden");
    return;
  }

  reviewsEmpty.classList.add("hidden");

  reviews.forEach((review) => {
    const card = createElement("article", "review-card");

    const top = createElement("div", "item-top");

    const titleBlock = createElement("div");
    const name = createElement("h3", "", review.name);
    const title = createElement("p", "item-title", review.title);

    const rating = createElement("div", "rating", getRatingStars(review.rating));
    rating.setAttribute("aria-label", `Оценка: ${review.rating} из 5`);

    const text = createElement("p", "item-text", review.text);

    const footer = createElement("div", "item-footer");
    const date = createElement("span", "item-date", review.date);

    const deleteButton = createElement("button", "delete-item", "Удалить");
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => deleteReview(review.id));

    titleBlock.append(name, title);
    top.append(titleBlock, rating);
    footer.append(date, deleteButton);

    card.append(top, text, footer);
    reviewsList.append(card);
  });
}

function deleteReview(id) {
  const reviews = getItemsFromStorage(REVIEWS_STORAGE_KEY, defaultReviews);
  const updatedReviews = reviews.filter((review) => review.id !== id);

  saveItemsToStorage(REVIEWS_STORAGE_KEY, updatedReviews);
  renderReviews();
}

function clearAllReviews() {
  const hasReviews = getItemsFromStorage(REVIEWS_STORAGE_KEY, defaultReviews).length > 0;

  if (!hasReviews) {
    return;
  }

  const isConfirmed = confirm("Вы точно хотите удалить все отзывы?");

  if (isConfirmed) {
    saveItemsToStorage(REVIEWS_STORAGE_KEY, []);
    renderReviews();
  }
}

function clearReviewErrors() {
  nameError.textContent = "";
  titleError.textContent = "";
  ratingError.textContent = "";
  textError.textContent = "";
}

function validateReviewForm() {
  clearReviewErrors();

  let isValid = true;

  const name = reviewName.value.trim();
  const title = reviewTitle.value.trim();
  const rating = reviewRating.value;
  const text = reviewText.value.trim();

  if (name.length < 2) {
    nameError.textContent = "Введите имя минимум из 2 символов.";
    isValid = false;
  }

  if (title.length < 2) {
    titleError.textContent = "Введите название минимум из 2 символов.";
    isValid = false;
  }

  if (!rating) {
    ratingError.textContent = "Выберите оценку.";
    isValid = false;
  }

  if (text.length < 10) {
    textError.textContent = "Отзыв должен содержать минимум 10 символов.";
    isValid = false;
  }

  return isValid;
}

function addReview(event) {
  event.preventDefault();

  const isValid = validateReviewForm();

  if (!isValid) {
    return;
  }

  const reviews = getItemsFromStorage(REVIEWS_STORAGE_KEY, defaultReviews);

  const newReview = {
    id: `review-${Date.now()}`,
    name: reviewName.value.trim(),
    title: reviewTitle.value.trim(),
    rating: reviewRating.value,
    text: reviewText.value.trim(),
    date: new Date().toLocaleDateString("ru-RU")
  };

  const updatedReviews = [newReview, ...reviews];

  saveItemsToStorage(REVIEWS_STORAGE_KEY, updatedReviews);
  reviewForm.reset();
  updateReviewCharCounter();
  clearReviewErrors();
  renderReviews();
}

function renderRecommendations() {
  const recommendations = getItemsFromStorage(
    RECOMMENDATIONS_STORAGE_KEY,
    defaultRecommendations
  );

  recommendationsList.innerHTML = "";

  if (recommendations.length === 0) {
    recommendationsEmpty.classList.remove("hidden");
    return;
  }

  recommendationsEmpty.classList.add("hidden");

  recommendations.forEach((recommendation) => {
    const card = createElement("article", "recommendation-card");

    const top = createElement("div", "item-top");

    const titleBlock = createElement("div");
    const name = createElement("h3", "", recommendation.title);
    const author = createElement(
      "p",
      "item-title",
      `Предложил(а): ${recommendation.name}`
    );

    const type = createElement("span", "tag tag-success", recommendation.type);

    const meta = createElement("div", "card-meta");
    const genre = createElement("span", "tag tag-light", recommendation.genre);

    const text = createElement("p", "item-text", recommendation.text);

    const footer = createElement("div", "item-footer");
    const date = createElement("span", "item-date", recommendation.date);

    const deleteButton = createElement("button", "delete-item", "Удалить");
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => deleteRecommendation(recommendation.id));

    titleBlock.append(name, author);
    top.append(titleBlock, type);
    meta.append(genre);
    footer.append(date, deleteButton);

    card.append(top, meta, text, footer);
    recommendationsList.append(card);
  });
}

function deleteRecommendation(id) {
  const recommendations = getItemsFromStorage(
    RECOMMENDATIONS_STORAGE_KEY,
    defaultRecommendations
  );

  const updatedRecommendations = recommendations.filter(
    (recommendation) => recommendation.id !== id
  );

  saveItemsToStorage(RECOMMENDATIONS_STORAGE_KEY, updatedRecommendations);
  renderRecommendations();
}

function clearAllRecommendations() {
  const recommendations = getItemsFromStorage(
    RECOMMENDATIONS_STORAGE_KEY,
    defaultRecommendations
  );

  if (recommendations.length === 0) {
    return;
  }

  const isConfirmed = confirm("Вы точно хотите удалить все рекомендации?");

  if (isConfirmed) {
    saveItemsToStorage(RECOMMENDATIONS_STORAGE_KEY, []);
    renderRecommendations();
  }
}

function hasUsedMonthlyRecommendation() {
  const savedMonth = localStorage.getItem(RECOMMENDATION_MONTH_KEY);
  const currentMonth = getCurrentMonthKey();

  return savedMonth === currentMonth;
}

function updateRecommendationLimitState() {
  const isBlocked = hasUsedMonthlyRecommendation();

  if (isBlocked) {
    recommendationLimitNote.textContent =
      "Вы уже оставили рекомендацию в этом месяце. Следующую можно будет добавить в следующем месяце.";
    recommendationLimitNote.classList.add("is-blocked");
    recommendationSubmitButton.disabled = true;
  } else {
    recommendationLimitNote.textContent =
      "Вы можете оставить одну рекомендацию в этом месяце.";
    recommendationLimitNote.classList.remove("is-blocked");
    recommendationSubmitButton.disabled = false;
  }
}

function clearRecommendationErrors() {
  recommendationNameError.textContent = "";
  recommendationTypeError.textContent = "";
  recommendationTitleError.textContent = "";
  recommendationGenreError.textContent = "";
  recommendationTextError.textContent = "";
}

function validateRecommendationForm() {
  clearRecommendationErrors();

  let isValid = true;

  const name = recommendationName.value.trim();
  const type = recommendationType.value;
  const title = recommendationTitle.value.trim();
  const genre = recommendationGenre.value.trim();
  const text = recommendationText.value.trim();

  if (hasUsedMonthlyRecommendation()) {
    recommendationTextError.textContent =
      "В этом месяце рекомендация уже была отправлена с этого браузера.";
    return false;
  }

  if (name.length < 2) {
    recommendationNameError.textContent = "Введите имя минимум из 2 символов.";
    isValid = false;
  }

  if (!type) {
    recommendationTypeError.textContent = "Выберите тип рекомендации.";
    isValid = false;
  }

  if (title.length < 2) {
    recommendationTitleError.textContent = "Введите название минимум из 2 символов.";
    isValid = false;
  }

  if (genre.length < 3) {
    recommendationGenreError.textContent = "Введите жанр минимум из 3 символов.";
    isValid = false;
  }

  if (text.length < 10) {
    recommendationTextError.textContent =
      "Описание должно содержать минимум 10 символов.";
    isValid = false;
  }

  return isValid;
}

function addRecommendation(event) {
  event.preventDefault();

  const isValid = validateRecommendationForm();

  if (!isValid) {
    return;
  }

  const recommendations = getItemsFromStorage(
    RECOMMENDATIONS_STORAGE_KEY,
    defaultRecommendations
  );

  const newRecommendation = {
    id: `recommendation-${Date.now()}`,
    name: recommendationName.value.trim(),
    type: recommendationType.value,
    title: recommendationTitle.value.trim(),
    genre: recommendationGenre.value.trim(),
    text: recommendationText.value.trim(),
    date: new Date().toLocaleDateString("ru-RU")
  };

  const updatedRecommendations = [newRecommendation, ...recommendations];

  saveItemsToStorage(RECOMMENDATIONS_STORAGE_KEY, updatedRecommendations);
  localStorage.setItem(RECOMMENDATION_MONTH_KEY, getCurrentMonthKey());

  recommendationForm.reset();
  updateRecommendationCharCounter();
  clearRecommendationErrors();
  renderRecommendations();
  updateRecommendationLimitState();
}

function filterBooks() {
  const query = bookSearch.value.trim().toLowerCase();

  const filteredBooks = books.filter((book) => {
    const searchableText = `
      ${book.title}
      ${book.author}
      ${book.genre}
      ${book.description}
      ${book.status}
    `.toLowerCase();

    return searchableText.includes(query);
  });

  renderBooks(filteredBooks);
}

function updateReviewCharCounter() {
  const currentLength = reviewText.value.length;
  charCounter.textContent = `${currentLength} / 600`;
}

function updateRecommendationCharCounter() {
  const currentLength = recommendationText.value.length;
  recommendationCharCounter.textContent = `${currentLength} / 500`;
}

function toggleMenu() {
  mainNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open");

  const isOpen = mainNav.classList.contains("is-open");
  menuButton.textContent = isOpen ? "×" : "☰";
  menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
}

function closeMenuAfterClick(event) {
  if (event.target.tagName === "A") {
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Открыть меню");
  }
}

function initSite() {
  renderBooks(books);
  renderTheatreEvents();
  renderReviews();
  renderRecommendations();

  updateReviewCharCounter();
  updateRecommendationCharCounter();
  updateRecommendationLimitState();

  bookSearch.addEventListener("input", filterBooks);

  reviewForm.addEventListener("submit", addReview);
  reviewText.addEventListener("input", updateReviewCharCounter);
  clearReviewsButton.addEventListener("click", clearAllReviews);

  recommendationForm.addEventListener("submit", addRecommendation);
  recommendationText.addEventListener("input", updateRecommendationCharCounter);
  clearRecommendationsButton.addEventListener("click", clearAllRecommendations);

  menuButton.addEventListener("click", toggleMenu);
  mainNav.addEventListener("click", closeMenuAfterClick);
}

initSite();