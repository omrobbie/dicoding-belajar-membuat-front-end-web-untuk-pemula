# Bookshelf Web
Project ini adalah Submission dari materi [Belajar Membuat Front-End Web untuk Pemula](https://www.dicoding.com/academies/315).

### Preview
<img src="/screenshot/preview1.png" width=256>&nbsp;
<img src="/screenshot/preview2.png" width=256>&nbsp;
<img src="/screenshot/preview3.png" width=256>&nbsp;

## Submission
Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak.

Untuk lebih jelasnya, terdapat 5 kriteria utama pada Bookshelf Apps yang harus Anda buat.

### Kriteria 1: Mampu Menambahkan Data Buku
* Bookshelf Apps harus mampu menambahkan data buku baru.
* Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:
```js
{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}
```

Berikut contoh data riilnya:
```js
{
  id: 3657848524,
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K Rowling',
  year: 1997,
  isComplete: false,
}
```

> [!NOTE]
> Untuk id buku pada tiap buku yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().

### Kriteria 2: Memiliki Dua Rak Buku
* Bookshelf Apps harus **memiliki 2 Rak buku**. Yakni, “Belum selesai dibaca” dan “Selesai dibaca”.
* Rak buku "Belum selesai dibaca" hanya menyimpan buku jika properti `isComplete` bernilai false.
* Rak buku "Selesai dibaca" hanya menyimpan buku jika properti `isComplete` bernilai true.

### Kriteria 3: Dapat Memindahkan Buku antar Rak
* Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dipindahkan di antara keduanya**.

### Kriteria 4: Dapat Menghapus Data Buku
* Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dihapus**.

### Kriteria 5: Manfaatkan localStorage dalam Menyimpan Data Buku
* Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat bertahan walaupun halaman web ditutup**.
Dengan begitu, Anda **harus menyimpan data buku pada localStorage**.

### Referensi Proyek dan Project Starter Aplikasi Bookshelf Apps
Silakan untuk akses web aplikasi [Bookshelf Apps](https://bookshelfappsdicoding.netlify.app) berikut agar Anda memiliki bayangan seperti apa harus membuat proyek submission-nya.

Karena di kelas ini kita hanya berfokus pada JavaScript, Browser Object, DOM, Event, dan Web Storage, kami telah menyediakan starter project yang telah disediakan berkas HTML dan CSS yang serupa dengan proyek di atas.

Silakan unduh starter project pada tautan berikut.
* [Starter project Bookshelf Apps](https://github.com/dicodingacademy/a315-web-pemula-labs/raw/shared-files/bookshelf-apps.zip).

Anda bisa memanfaatkan starter project tersebut untuk pengerjaan submission. Namun, jika tidak ingin menggunakannya, tidak masalah. Justru, kami sangat mengapresiasi Anda untuk mengerjakan submission dengan tampilan sekreatif mungkin.

---

## Harap diperhatikan!
Bagi teman-teman yang masih mengikuti kelas dari dicoding, [Belajar Membuat Front-End Web untuk Pemula](https://www.dicoding.com/academies/315). Silahkan gunakan source ini sebagai bahan referensi, tapi TIDAK untuk disalin secara utuh tanpa tau cara implementasinya.

Ayolah kawan.. Kalian sudah bayar mahal untuk ikut kelas ini, kalian harus dapat ilmunya. Percuma kalian dapat sertifikat dari dicoding kalau di kemudian hari kalian tidak mendapatkan ilmunya dari sini.

Semangat kawan.. Perjalanan masih panjang. Lakukan yang terbaik yang kalian bisa. Silahkan tanya saya jika ada yang kurang dimengerti. Kalau saya bisa bantu, pasti saya dampingi.

Mari kita maju bersama-sama..
