import { useState } from "react";
import Button from "../../../components/button/index";
import Input from "../../../components/input/index";
import { Link } from "react-router-dom";
import "./login.css";
import Header from "../../../components/header";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = () => {
    // Perform login logic here
  };

  const navigateToSpotifyAuthorization = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=4bc6414edcbb448c8b02535b79c69a71&redirect_uri=http://localhost:3000/homepage&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20playlist-modify-public%20playlist-modify-private%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`;
  };

  const handleFormSubmit = (data: LoginFormValues) => {
    console.log(data);
    handleLogin();
  };

  console.log(errors);

  return (
    <div className="main-container-login">
      <Header />

      <div className="sup-container-login">
        <div className="sub-container">
          <h1 className="heading-one">Login to Spotify</h1>
          <form className="butt-group" onSubmit={handleSubmit(handleFormSubmit)}>
            <Button onClick={navigateToSpotifyAuthorization} content={"Continue with Google"} />

            <div className="sep-one"></div>

            <Input
              type="text"
              label="Email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

            <Input
              type="password"
              label="Password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

            <span className="login-butt">
              <Button
                type="submit"
                content={"Log In"}
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
            Don't have an account? <Link to={"/signup"}>Sign up for Spotify</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
