// Rastgele sayılardan oluşan dizi
let dizi = [];
for (let i = 0; i < 10; i++) {
  dizi.push(Math.floor(Math.random() * 100)); // 0-99 arasında rastgele sayılar eklenir
}

// En büyük ve en küçük sayılar için değişkenler
let enBuyuk = dizi[0];
let enKucuk = dizi[0];

// Diziyi döngü ile kontrol etme
for (let sayi of dizi) {
  if (sayi > enBuyuk) {
    enBuyuk = sayi;
  }
  if (sayi < enKucuk) {
    enKucuk = sayi;
  }
}

// Sonuçları ekrana yazdırma
console.log("Dizi:", dizi);
console.log("En Büyük Sayı:", enBuyuk);
console.log("En Küçük Sayı:", enKucuk);



