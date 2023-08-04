export default function generateRandomInvoiceId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  // Generate a random 2-letter string using characters
  let randomString = '';
  for (let i = 0; i < 2; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Generate a random 4-digit number
  let randomNumber = '';
  for (let i = 0; i < 4; i++) {
    randomNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  // Combine the random string and number to form the ID
  const randomId = `${randomString}${randomNumber}`;

  return randomId;
}
