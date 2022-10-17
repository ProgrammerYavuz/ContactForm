function sendEmail() {
    Email.send({
      /* SecureToken: 'guvenliktokeni', */
      Host : "smtp.gmail.com",
      Username : "mailadresiniyaz@gmail.com",
      Password : "mailsifren",
      To : 'mailadresiniyaz@gmail.com',
      From : document.getElementById("email").value,
      Subject : document.getElementById("subject").value,
      Body : "İsim Soyisim: " + document.getElementById("name").value
             + "<br> Mail: " + document.getElementById("email").value
             + "<br> Telefon Numarası: " + document.getElementById("phone").value
             + "<br> Mesaj: " + document.getElementById("message").value
  }).then(
    message => alert("Mesajınız başarılı bir şekilde gönderilmiştir.")
  );
}