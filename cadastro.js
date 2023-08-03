const cadastro = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const date = document.getElementById("date").value;
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const gender = genderRadio ? genderRadio.value: '';
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (username.length < 3) {
        alert("nome invalido! O nome de usuario deve conter no minimo 3 caracteres.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Por favor, insira um email válido (exemplo@dominio.com).");
        return;
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!password.match(passwordPattern)) {
        alert("A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número e um caractere especial (por exemplo, !@#$%^&*).");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique se as senhas estão iguais.");
        return;
    }

    if (date === "") {
        alert("Por favor, insira a data de nascimento.");
        return;
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(datePattern)) {
        alert("Formato de data inválido. utilize o formato AAAA-MM-DD.");
        return;
    }

    const dataNascimento = new Date(date);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();

    const idadeMinima = 18;
    if (idade < idadeMinima) {
        alert("Você precisa ter no minimo 18 anos para se cadastrar.");
        return;
    }

    if (!genderRadio) {
        alert("Por favor, selecione uma opção de sexo.");
    }

    const usuario = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        date: date,
        gender: gender,
        peso: peso,
        altura: altura    
    }
     localStorage.setItem('usuario', JSON.stringify(usuario));
     alert("Usuario cadastrdo com sucesso!");
     return;
}