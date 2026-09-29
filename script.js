// ==========================================
// CODEGYM CAREER - JAVASCRIPT
// ==========================================

// Đóng menu mobile sau khi click link

$(".navbar-nav a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// Xử lý form đăng ký

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");

      return;
    }

    alert("Cảm ơn " + name + " đã đăng ký tư vấn CodeGym Career!");

    this.reset();
  });

// Hiệu ứng khi cuộn trang

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
  }
});
