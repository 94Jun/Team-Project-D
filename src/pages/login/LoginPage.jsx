import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';



const LoginPage = () => {

  const [values, setValues] = React.useState({
    password: '',
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

    const Loginbasicstyle = {
      fontSize : '28px',
      fontweight: "bold",
      marginTop: '1em',
    };
  
    const btnbasicstyle = {
      backgroundColor :"#4a7eb2"
        };

    const btnbasicstyle2 = {
      border :"3px soild pink"
        };
  

  return ( <div className='login-w' style={{textAlign:'center'}}>


    <div className="login">
     <h1 style={Loginbasicstyle}>로그인</h1>
    <p style={{fontSize:'12px'}}> 서비스 시작을 위해 로그인을 해주세요 </p>
<form> 


        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-email">email</InputLabel>
          <Input
            id="standard-email"
            type="email"
            value={values.email} />
        </FormControl>

  <br></br>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-password">Password</InputLabel>
          <Input
            id="standard-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
  <div style={{textAlign:'right'}}>
  <Button style={{fontSize:'11px'}}> 아이디찾기</Button>  / 
  <Button style={{fontSize:'11px'}} >비밀번호 찾기</Button>  <br></br>
  </div>  <br></br>

  <Button variant="contained" style={btnbasicstyle}>로그인</Button><br></br>
or<br></br>
<Button variant="outlined" style={btnbasicstyle2}>google 계정으로 계속하기</Button><br></br>

</form>

</div>
  </div>
  )
}

export default LoginPage;
