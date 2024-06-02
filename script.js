document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.getElementById('aboutBtn');
    const servicesBtn = document.getElementById('servicesBtn');
    const productsBtn = document.getElementById('productsBtn');
    const contactBtn = document.getElementById('contactBtn');
    const moreBtn = document.getElementById('moreBtn');
    const subscribeBtn = document.getElementById('subscribeBtn');

    aboutBtn.addEventListener('click', () => {
        // Hakkımızda butonuna tıklandığında belirtilen metni içeren bir alert kutusu gösterir.
        alert('Sanat galeri sitesi kurulum sebebi Fatma hocamızdır.');
    });

    servicesBtn.addEventListener('click', () => {
        // Hizmetler butonuna tıklandığında bir bilgi mesajı gösterir.
        alert('Enes Arpalı hizmetinizdedir.');
    });

    productsBtn.addEventListener('click', () => {
        // Ürünler butonuna tıklandığında bir bilgi mesajı gösterir.
        alert('Ürünlerimiz Paris\'ten kaçak yollarla getirilecektir. Beklemede kalın.');
    });

    contactBtn.addEventListener('click', () => {
        // İletişim butonuna tıklandığında Instagram hesabını yeni bir pencerede açar.
        window.open('https://instagram.com/enes__arpl', '_blank');
    });

    moreBtn.addEventListener('click', () => {
        alert('Daha fazla bilgi yakında eklenecek!');
    });

    subscribeBtn.addEventListener('click', () => {
        const email = prompt('Lütfen email adresinizi girin:');
        if (email) {
            alert(`Teşekkürler! ${email} adresine abonelik onayı gönderildi.`);
        } else {
            alert('Email adresi girmediniz.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sonAkşamYemeğiBtn = document.getElementById('sonAkşamYemeğiBtn');
    const monaLisaBtn = document.getElementById('monaLisaBtn');
    const yildizliGeceBtn = document.getElementById('yildizliGeceBtn');

    sonAkşamYemeğiBtn.addEventListener('click', () => {
        alert('Son Akşam Yemeği ya da Son Yemek, 15. yüzyılda Milano\'da Leonardo da Vinci tarafından Duke Lodovico Sforza\'nın isteği üzerine yapılmış fresktir. Hristiyan inanışına göre, İsa Mesih\'in Romalı askerlerce tutuklanmasından bir gün önce havarileriyle yediği son akşam yemeğini ifade eder.');
    });

    monaLisaBtn.addEventListener('click', () => {
        alert('Mona Lisa, İtalya\'nın Floransa şehrindeki Rönesans sırasında Leonardo da Vinci tarafından kavak bir pano üzerine Sfumato tekniği ile resmedilmiş 16. yüzyıl yağlı boya portresidir. Resim hâlen Paris\'teki Louvre Müzesi\'nde Francesco del Giocondo\'nun karısı, Lisa Gherardini Portresi başlığı altında sergilenmektedir.');
    });

    yildizliGeceBtn.addEventListener('click', () => {
        alert('Yıldızlı Gece, Hollandalı art izlenimci ressam Vincent van Gogh tarafından yapılan yağlı boya tablo. Haziran 1889\'da yaptığı tabloda ressam, sanatoryumdaki odasının doğuya bakan pencereden görünen Saint-Rémy-de-Provence köyünün gün doğuşundan hemen önceki görünüşünü resmetmiştir.');
    });
});
