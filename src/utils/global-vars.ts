export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#_+/])[A-Za-z\d@$!%*?&^#_+/]{8,}$/;

export const mobileRegex = /^\+?\d{1,3}?\d{10}$/;

export const BaseUrl2 = import.meta.env.VITE_BASE_URL2;
