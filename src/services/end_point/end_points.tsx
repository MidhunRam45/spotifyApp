interface EndPoint {
  url?: string;
  list?: string;
  add?: string;
  edit?: string;
  delete?: string;
  service?: string;
}

export const end_points: Record<string, EndPoint> = {
  // Authentication
  login: { url: '/v1/auth/login', service: 'ms1' },
  signUpOtp: { url: '/v1/auth/user-register/signup/otp', service: 'ms1' },

};
