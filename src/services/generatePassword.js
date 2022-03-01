const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyzç';
const availableNumbers = '0123456789';
const availableSymbols = '!@#$%&*()_+-=[]{};:.,';

const chosenOptions = ({
  uppercase, lowercase, numbers, symbols,
}) => {
  const options = [];

  if (uppercase) {
    options.push(uppercaseCharacters);
  }

  if (lowercase) {
    options.push(lowercaseCharacters);
  }

  if (numbers) {
    options.push(availableNumbers);
  }

  if (symbols) {
    options.push(availableSymbols);
  }

  return options;
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generatePassword = (length, options) => {
  const allOptions = chosenOptions(options);
  const remainingOptions = [...allOptions];

  let password = '';

  for (let i = 0; i < length; i += 1) {
    if (remainingOptions.length > 0) {
      const index = random(0, remainingOptions.length - 1);
      const chosenOption = remainingOptions[index];
      const randomCharacter = chosenOption[random(0, chosenOption.length - 1)];

      password += randomCharacter;
      remainingOptions.splice(index, 1);
    } else {
      const index = random(0, allOptions.length - 1);
      const chosenOption = allOptions[index];
      const randomCharacter = chosenOption[random(0, chosenOption.length - 1)];

      password += randomCharacter;
    }
  }

  return password;
};

export default generatePassword;
