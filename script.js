function validEmail(str) {
  if (!str) return false;

  const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}
const str = prompt("Enter an email address.");
alert(validEmail(str));
