export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/;

export const mobileRegex = /^\+?\d{1,3}?\d{10}$/;

export const BaseUrl2 = import.meta.env.VITE_BASE_URL2;
