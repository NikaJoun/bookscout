<template>
    <div>
      <h1 class="mb-4 text-center">BookScout</h1>
      
      <div class="alert alert-info">
        <h4 class="alert-heading">Добро пожаловать в приложение по поиску книг!</h4>
        <p>Для поиска книг введите название или имя автора в поле поиска выше. Вы можете искать по любым критериям.</p>
        <p>После того как вы найдете интересующую книгу, кликните на кнопку <strong>Подробнее</strong> для получения дополнительной информации, включая описание книги и ссылку для покупки.</p>
        <hr>
        <p class="mb-0">Надеемся, что вам будет приятно использовать наш сайт!</p>
      </div>
      
      <input
        type="text"
        v-model="searchQuery"
        class="form-control mb-4"
        placeholder="Поиск по книге или автору..."
      />
  
      <div class="row">
        <div 
          class="col-md-4 mb-4" 
          v-for="book in books" 
          :key="book.id"
        >
          <div class="card h-100">
            <img :src="book.imageLinks.thumbnail" class="card-img-top book-cover" alt="Обложка книги">
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text"><strong>Автор:</strong> {{ book.authors.join(', ') }}</p>
              <router-link :to="`/book/${book.id}`" class="btn btn-primary">
                Подробнее
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        books: []
      };
    },
    watch: {
      searchQuery(newQuery) {
        this.fetchBooks(newQuery);
      }
    },
    methods: {
      async fetchBooks(query) {
        if (!query) return;
  
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();
        this.books = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || ['Неизвестный автор'],
          imageLinks: item.volumeInfo.imageLinks || { thumbnail: 'https://via.placeholder.com/128x193' }
        }));
      }
    }
  };
  </script>
  
  <style scoped>
  .book-cover {
    height: 250px; 
    object-fit: cover;
    width: 100%;
  }
  </style>
  