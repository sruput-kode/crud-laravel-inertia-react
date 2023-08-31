ini merupakan tutorial dari https://www.sruputkode.com/2023/08/membuat-crud-laravel-inertiajs-dan.html

petunjuk sobs-sobs

```git
git clone https://github.com/prasnov/crud-laravel-inertia-react.git
```

```composer
composer install
```

```npm
npm install
```

Kemudian silahkan buat database sobs-sobs bebas ya nama databasenya. kemudian edit file *.env* sesuaikan dengan pengaturan database sobs-sobs jika tidak ada file *.env* maka rename file *.env.example* menjadi *.env*

jalankan migration file database

```php
php artisan migrate
```

```php
php artisan storage:link
```

```php
php artisan key:generate
```

Kemudian jalankan dua perintah ini sekaligus dan jangan diberhentikan ya sobs.

```php
php artisan serve
```

```npm
npm run dev
```

Selesai sobs-sobs :smile:


