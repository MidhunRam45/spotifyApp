import parsePhoneNumberFromString from 'libphonenumber-js';

export const alphaNumeric = /^[a-zA-Z0-9 ]+$/;
export const onlyAlphabet = /^[A-Za-z\s]+$/;
export const onlyNumber = /^[0-9]/;
export const userNameRegex = /^[a-zA-Z0-9@. ]+$/;
export const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
export const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%^&*()\-_=+\{\}\[\]|\\;:"<>,./?]).{5,10}$/;
export const addressMaxLength = 100;
export const nameMaxLength = 30;
export const userNameMinLength = 5;
export const emailMaxLength = 30;
export const passwordMinLength = 5;
export const passwordMaxLength = 10;
export const pincodeMaxLength = 6;
export const aadharMaxLength = 12;
export const registerNoMaxLength = 10;
export const chiefComplaintLength = 200;
export const kioskCodeMaxLength = 10;

// message
export const validMessage = {
  onlyAlphabet: 'Only alphabets and spaces are allowed',
  nameMaxLength: 'Maximum characters reached',
  email: 'Please enter your valid email address',
};

export const validatePhoneNumber = (value: string) => {
  if (!value.startsWith('+')) {
    value = `+${value}`;
  }
  const phoneNumber = parsePhoneNumberFromString(value);
  return phoneNumber ? phoneNumber.isValid() : false;
};
