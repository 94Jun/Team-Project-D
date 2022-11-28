import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {

    const [phone, setphone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [phoneError, setphoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangephone = (e) => {
        const phoneRegex = /^[0-9\b -]{0,13}$/; 
        // 값이 없거나 혹은 입력한 값이 있을때 맞다 - 문자만 필터 
        if ((!e.target.value || (phoneRegex.test(e.target.value)))) { 
            setphoneError(false);    }
        else  { setphoneError(true); 
        }setphone(e.target.value);
        // 문자 길이로 확인하여 그전에도 알림뜨기 
        if (e.target.value.length !== 13) { 
            setphoneError(true);
        }
    };

    useEffect(() => {
        if (phone.length === 10) {
          setphone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phone.length === 13) {
          setphone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
      }, [phone]);

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };


    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    

    
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

      const handleClickShowconfirmPassword = () => {
        setValues({
          ...values,
          showconfirmPassword: !values.showconfirmPassword,
        });
      };
    
      const handleMouseDownconfirmPassword = (event) => {
        event.preventDefault();
      };



    return ( <div style={{textAlign:'center'}}>


<div> 가입하기 </div>
<p style={{fontSize:"28"}}> 서비스 이용을 위해 필요한 필수 정보를 입력해주세요  </p> <br></br><br></br>

        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-email">email</InputLabel>
          <Input
            id="standard-email"
            type="email"
            placeholder="Email Address" value={email} onChange={onChangeEmail}/>
             {emailError && <div className="invalid-input" style={{fontSize:'11px', color:"#D73E3E"}} >  이메일 주소를 확인해주세요. </div>}
        </FormControl> <br></br>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-password">Password</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            id="standard-Password"
            maxLength={20} placeholder="Password"
            value={password} onChange={onChangePassword} 
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
          {passwordError && <div class="invalid-input"  style={{fontSize:'11px', color:"#D73E3E"}}>
          비밀번호는 8자리 이상, 영문+숫자로 입력해주세요 </div>}
        </FormControl> <br></br>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-password">Password Confirm</InputLabel>
          <Input
            id="standard-Password"
            type={values.showconfirmPassword ? 'text' : 'password'}
            maxLength={20} placeholder="Confirm Password"
            value={confirmPassword} onChange={onChangeConfirmPassword}
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowconfirmPassword}
                    onMouseDown={handleMouseDownconfirmPassword}
                  >
                    {values.showconfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
           {confirmPasswordError && <div class="invalid-input"  style={{fontSize:'11px', color:"#D73E3E"}}>비밀번호와 다릅니다.</div>}
        </FormControl> <br></br>


        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-name">이름/닉네임</InputLabel>
          <Input
            id="standard-name"
            type="name"
            placeholder="UserName" value={userName} onChange={onChangeUserName}/>
            {userNameError && <div class="invalid-input"  style={{fontSize:'11px', color:"#D73E3E"}}>닉네임/이름을 입력해주세요</div>}
        </FormControl> <br></br>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-phone">phone</InputLabel>
          <Input
            id="standard-phone"
            type="text"
            placeholder="phone" value={phone} onChange={onChangephone}/>
        {phoneError && <div class="invalid-input"  style={{fontSize:'11px', color:"#D73E3E"}}>정확한 폰 번호를 입력해주세요</div>}
        </FormControl> <br></br>
        


        <br></br>

<Button variant="contained">회원가입</Button><br></br>



    </div> );
}
 
export default Register;