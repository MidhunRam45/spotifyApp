import * as Yup from "yup";

export const emailMaxLength = 20;
export const passwordMaxLength = 20;

export const emailSchema = Yup.string()
  .required("Email is required")
  .max(emailMaxLength, `Email must not exceed ${emailMaxLength} characters`)
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email format"
  );

export const passwordSchema = Yup.string()
  .required("Password is required")
  .min(8, "Password must contain at least 8 characters")
  .max(
    passwordMaxLength,
    `Password must not exceed ${passwordMaxLength} characters`
  )
  .matches(
    /^(?=.*[0-9])(?=.*[@$!%*#?&])[\w@$!%*#?&]+$/,
    "Password must contain at least one special character and one number"
  );

export const spotifyAuthorization = `https://accounts.spotify.com/authorize?client_id=4bc6414edcbb448c8b02535b79c69a71&redirect_uri=http://localhost:3000/homepage&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20playlist-modify-public%20playlist-modify-private%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`;
