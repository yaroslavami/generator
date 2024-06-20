function startLotery() {
  const participants = document.getElementById('participants').value;
  const winners = document.getElementById('winners').value;
  const resultElement = document.getElementById('result');

  const url = `https://www.random.org/integers/?num=${winners}&min=1&max=${participants}&col=1&base=10&format=plain&rnd=new`;
  
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const winnersArray = data.trim().split('\n');
      resultElement.innerHTML = winnersArray.map(winner => `<li>${winner}</li>`).join('');
    })
    .catch(error => console.error('Error fetching data from random.org', error));
}

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeUppercase = document.getElementById('uppercase').checked;
  const passwordElement = document.getElementById('password');

  let charSet = '';
  if (includeNumbers) charSet += '0123456789';
  if (includeLowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomPoz, randomPoz + 1);
  }
  passwordElement.innerText = password;
}
