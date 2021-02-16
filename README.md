# Tugas_Besar_PBO
Program ini dibuat untuk memenuhi Tugas Besar Mata Kuliah Pemrograman Berorientasi Objek
# Program Parkir
## Pemrograman Berorientasi Objek - Kelompok 2
Anggota
- 18104007 Dimas Amran A
- 19104009 Pramita Cintiari D
- 19104067 Alaik Haikal Alfaizi
### Latar Belakang
Lahan parkiran saat ini nyatanya bisa menghasilkan pundi-pundi rupiah. Lahan parkir resmi atau tidak resmi pun bisa menciptakan lapangan kerja. Pasalnya, perputaran uang yang berada di atas lahan parkir sangat besar. Bukan hanya ratusan ribu melainkan uang yang berputar di sana bisa mencapai puluhan juga hingga ratusan juta per bulannya. Bahkan ada orang yang nekat ingin membeli lahan parkir dengan nilai cukup besar. Tak heran banyak pihak yang berebut lahan parkir hingga terlibat baku hantam. Oleh karena itu, sistem parkir yang berbasis digital sangat dibutuhkan untuk menjamin keamanan dan kenyamanan dari pengguna maupun pemilik lahan parkir itu sendiri.
### Tujuan
Program yang kami ciptakan pada dasarnya ditujukan untuk mempermudah penghitungan jumlah kendaraan yang masuk dan keluar dalam suatu lahan parkir secara efisien. Selain itu, program ini juga mengurangi kemungkinan parkir liar dengan tarif yang tidak masuk akal
### Fitur
1. Data Kendaraan: meliputi jam masuk dan jam keluar kendaraan
2. Kendaraan Masuk: mendata kendaraan yang baru masuk
3. Kendaraan Keluar: mendata kendaraan yang keluar
### Class Diagram
![PBO](https://user-images.githubusercontent.com/55581387/108008224-75163f00-7032-11eb-8a76-f41309350227.png)
### Installation
Install node.js terlebih dahulu
#### Ubuntu
Untuk menginstall **node.js**, ikuti langkah berikut:
```
$ sudo apt install nodejs
```
Setelah terinstall, verifikasi node version dengan perintah
```
$ node -v||-version
```
Setelah itu, install **Node Package Manager (NPM)**
```
$ sudo apt install npm
```
Setelah terinstal, verifikasi NPM version dengan perintah
```
$ npm -v||-version
```
### Demo App
Untuk menjalankan program
- Unduh kode
- Buka Terminal
- Ubah alamat direktori ke lokasi direktori unduhan
- Kemudian jalankan perintah:
```
$ node main.js
```
atau dapat langsung menggunakan online IDE pada link [ini](https://repl.it/join/rslszwuc-alaikhaikal).
### Screenshot App
`Note: Input jam keluar hanya bisa dilakukan pada jam yang sama pada jam masuk`  
#### Example  
Jam masuk : 06:00  
Jam keluar : 06:30 :heavy_check_mark:  
Jam masuk : 06:00  
Jam keluar : 07:30 :x:  

![gt1](https://user-images.githubusercontent.com/55581387/108008937-181b8880-7034-11eb-8470-07bb7302437a.png)
![gt2](https://user-images.githubusercontent.com/55581387/108008962-22d61d80-7034-11eb-9435-23d19b4607c2.png)
![gt3](https://user-images.githubusercontent.com/55581387/108008977-29649500-7034-11eb-92e7-38314959b628.png)
![gt4](https://user-images.githubusercontent.com/55581387/108008988-31243980-7034-11eb-9388-f88b0a0be1de.png)
#### Youtube Presentation Link
https://youtu.be/yfk_vEOMmrA
