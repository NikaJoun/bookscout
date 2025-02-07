<template>
    <div v-if="book" class="container mt-4">
      <div class="row">
        <div class="col-md-4">
          <img :src="book.imageLinks.thumbnail" alt="Обложка книги" class="img-fluid rounded">
        </div>
        <div class="col-md-8">
          <h1>{{ book.title }}</h1>
          <h4 class="text-muted">Автор: {{ book.authors.join(', ') }}</h4>
          <p><strong>Издатель:</strong> {{ book.publisher }}</p>
          <p><strong>Дата публикации:</strong> {{ book.publishedDate }}</p>
          <p><strong>Описание:</strong> {{ book.description }}</p>
          <a :href="book.buyLink" class="btn btn-primary mt-3" target="_blank">Купить</a>
          <button class="btn btn-secondary mt-3" @click="goBack">Назад</button>
        </div>
      </div>
    </div>
  
    <div v-else class="container mt-4">
      <p>Загружаем данные...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        book: null
      };
    },
    mounted() {
      this.fetchBookDetails(this.id);
    },
    methods: {
      async fetchBookDetails(bookId) {
        try {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
          const data = await res.json();
          if (data.volumeInfo) {
            this.book = {
              title: data.volumeInfo.title,
              authors: data.volumeInfo.authors || ['Неизвестный автор'],
              description: data.volumeInfo.description || 'Описание не доступно.',
              publisher: data.volumeInfo.publisher,
              publishedDate: data.volumeInfo.publishedDate,
              imageLinks: data.volumeInfo.imageLinks || { large: 'https://via.placeholder.com/300x450' },
              buyLink: data.saleInfo.buyLink || '#'
            };
          }
        } catch (error) {
          console.error('Ошибка при получении данных книги:', error);
        }
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  img {
    min-width: 90%;
    height: auto;
  }
  .container {
    max-width: 1200px;
  }
  </style>
  