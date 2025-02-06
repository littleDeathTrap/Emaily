const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*$/;

const validateEmails = (emails) => {
  if (!emails) return false;
  const invalidEmails = emails
    .split(/,\s*/)
    .filter((email) => !emailRegex.test(email));

  return invalidEmails.length
    ? `Invalid email(s): ${invalidEmails.join(", ")}`
    : true;
};

export default validateEmails;
