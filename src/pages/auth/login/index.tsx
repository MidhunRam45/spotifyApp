import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/button/index";
import Input from "../../../components/input/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../../../components/header";
import {
  emailSchema,
  passwordSchema,
  spotifyAuthorization,
} from "../../../utils/patterns/regex.pattern";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../../../components/spinner";

const LoginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

type LoginFormValues = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const [loading, setLoading] = useState<boolean>();
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSpotifyAuthorization = () => {
    window.location.href = spotifyAuthorization;
  };

  const handleFormSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    const email = data?.email;
    const password = data?.password;
    if (location.pathname.includes("singup")) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User signed up:", user);
        if (user) {
          toast.success("Signup successfull");
          navigate("/login");
        }
      } catch (error: any) {
        console.error("Error signing up:", error);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already in use. Please use a different email"
          );
        }
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User logged in:", user);
        if (user) {
          toast.success("Login successful");
          setTimeout(() => {
            navigateToSpotifyAuthorization();
          }, 1000);
        }
      } catch (error: any) {
        if ((error.code = "auth/user-not-found")) {
          toast.error("No user found with this email. Please sign up.");
        } else {
          toast.error("Invalid login credentials");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="main-container-login">
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <div className="sup-container-login">
          <div className="sub-container">
            <h1 className="heading-one">
              {location?.pathname.includes("login")
                ? "Login to Spotify"
                : "Signup to Spotify"}
            </h1>
            <form
              className="butt-group text-center"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <Button
                type="button"
                onClick={navigateToSpotifyAuthorization}
                content={"Continue with Google"}
              />

              <div className="sep-one"></div>

              <Input
                type="email"
                label="Email"
                placeholder="Email"
                register={register("email")}
              />
              {errors.email && (
                <p className="text-start" style={{ color: "red" }}>
                  {errors.email.message}
                </p>
              )}

              <Input
                type="password"
                label="Password"
                placeholder="Password"
                register={register("password")}
              />
              {errors.password && (
                <p className="text-start" style={{ color: "red" }}>
                  {errors.password.message}
                </p>
              )}

              <span className="login-butt">
                <Button
                  type="submit"
                  content={
                    location.pathname.includes("login") ? "Login" : "Sign up"
                  }
                  backgroundColor="#1fdf64"
                  color="white"
                  fontSize="18px"
                />
              </span>

              <div className="forgot-link">
                <Link to="#">Forgot your password?</Link>
              </div>
              <div className="sep-two"></div>
            </form>

            <span className="span-signup">
              {location.pathname.includes("login")
                ? "Dont have an account?"
                : "Already have an account?"}
              {location.pathname.includes("login") ? (
                <Link to="/signup">Sign up for Spotify</Link>
              ) : (
                <Link to="/login">Login to Spotify</Link>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
