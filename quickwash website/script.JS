// قائمة الموبايل
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// إغلاق القائمة بعد اختيار صفحة
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// تحديث السنة
document.getElementById("year").textContent =
    new Date().getFullYear();

// الاشتراكات
const duration = document.getElementById("duration");
const washes = document.getElementById("washes");
const packageResult = document.getElementById("packageResult");
const subscriptionBtn = document.getElementById("subscriptionBtn");

function updatePackage() {
    const selectedDuration = duration.value;
    const selectedWashes = washes.value;

    packageResult.innerHTML = `
        <h3>باقة ${selectedDuration}</h3>
        <p>عدد الغسلات المختار: ${selectedWashes}</p>
        <p>تواصل معنا لمعرفة السعر وتفاصيل الاشتراك.</p>
    `;

    const message =
        أهلاً Quick Wash، عايز استفسر عن اشتراك لمدة ${selectedDuration} وعدد الغسلات ${selectedWashes}.;

    subscriptionBtn.href =
        "https://wa.me/201023217686?text=" +
        encodeURIComponent(message);
}

duration.addEventListener("change", updatePackage);
washes.addEventListener("change", updatePackage);

updatePackage();

// تقييم النجوم
const stars = document.querySelectorAll(".stars button");
const ratingMessage = document.getElementById("ratingMessage");

stars.forEach(function(star) {
    star.addEventListener("click", function() {
        const rating = Number(star.dataset.rating);

        stars.forEach(function(item) {
            const itemRating = Number(item.dataset.rating);
            item.classList.toggle("active", itemRating <= rating);
        });

        ratingMessage.textContent =
            شكراً ليك! اخترت ${rating} من 5 نجوم.;
    });
});