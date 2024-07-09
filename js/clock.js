let username = prompt("Adınızı giriniz");

const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false // 24 saat formatında göstermek için
};

const NOW = new Date();
const dateString = new Intl.DateTimeFormat('tr-TR', options).format(NOW);

document.querySelector("#myName").innerText = username;

function showTime() {
    const now = new Date();
    let dayOfWeek = now.getDay(); // Haftanın günü (0'dan Pazar, 1'den Pazartesi gibi)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Haftanın günü isimlerini içeren bir dizi
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = daysOfWeek[dayOfWeek]; // Haftanın gününün ismini al

    // Zamanı ayrı parçalar halinde göstermek için ":" ekledim
    document.querySelector("#myClock").innerText = `${hours}:${minutes}:${seconds} ${dayName}`;

    setTimeout(showTime, 1000);
}

showTime()
