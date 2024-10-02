import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/button/index";
import Input from "../../../components/input/index";
import { Link } from "react-router-dom";
import "./login.css";
import Header from "../../../components/header";
import { LoginSchema, spotifyAuthorization } from "../../../utils/patterns/regex.pattern";

type LoginFormValues = {
  email: string;
  password: string;
};


function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur" 
  });

  const handleLogin = () => {
  };

  const navigateToSpotifyAuthorization = () => {
    window.location.href = spotifyAuthorization
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
              type="email"
              label="Email"
              placeholder="Email"
              register={register("email")}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>} 

            <Input
              type="password"
              label="Password"
              placeholder="Password"
              register={register("password")}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>} 

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
