import * as React from "react";
import styles from "./LoginPage.module.css";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // 비밀번호 아이콘 작동
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login_full}>
      <div className="login">
        <h1>로그인</h1>
        <div className={styles.textsm}>
          {" "}
          서비스 시작을 위해 로그인을 해주세요{" "}
        </div>
        <form>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-email">email</InputLabel>
            <Input
              id="standard-email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={onChangeEmail}
            />
            {emailError && (
              <div
                className="invalid-input"
                style={{ fontSize: "11px", color: "#D73E3E" }}
              >
                {" "}
                이메일 주소를 확인해주세요.{" "}
              </div>
            )}
          </FormControl>{" "}
          <br></br>
          <br></br>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-password">Password</InputLabel>
            <Input
              id="standard-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br></br>
          <div>
            <Button className={styles.textbtn}> 아이디찾기</Button> /
            <Button className={styles.textbtn}> 비밀번호 찾기</Button> <br></br>
          </div>{" "}
          <br></br>
          <Button className={styles.simplebtn}>로그인</Button>
          <br></br>
          <span style={{ fontSize: "12px", margin: "7px" }}> or </span>
          <br></br>
          <Button className={styles.simplebtn2}>
            {" "}
            <GoogleIcon /> 계정으로 계속하기
          </Button>
          <br></br>
          <div className={styles.textm}>
            {" "}
            계정이 없으시다면{" "}
            <span>
              <Link
                to="/register"
                className="text0"
                style={{ fontWeight: "bold" }}
              >
                회원가입
              </Link>
            </span>
            을 해주세요{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
