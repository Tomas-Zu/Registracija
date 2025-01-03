document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value.trim(), 10);
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    let isValid = true;

    if (!/^[a-zA-Z]{3,30}$/.test(name)) {
        document.getElementById("nameError").textContent = "Vardo ilgis turi būti nuo 3 iki 30 raidžių";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "El. paštas netinkamai įrašytas";
        isValid = false;
    }

    if (isNaN(age) || age < 18 || age > 120) {
        document.getElementById("ageError").textContent = "Amžius turi būti tarp 18 ir 120";
        isValid = false;
    }

    if (!/^\+(\d{3})(\d{3})(\d{5})$|^\+(\d{3})\s(\d{3})\s(\d{5})$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Telefonas netinkamai įrašytas (turėtų būti +XXX XXX XXXXX formatu)";
        isValid = false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}/.test(password)) {
        document.getElementById("passwordError").textContent = "Slaptažodis turėtų būti 8 simbolių ilgio, įskaitant didžiąsias, mažąsias raides, skaičius ir specialiuosius simbolius";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Slaptažodžiai nėra vienodi";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent = "Registracija sėkmingai įvykdyta!";
        const userData = {
            name,
            email,
            age,
            phone,
        };
        console.log("Vartotojo duomenys:", userData);
        document.getElementById("registrationForm").reset();
    } else {
        document.getElementById("successMessage").textContent = "";
    }
});
