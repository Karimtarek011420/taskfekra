import "./Login.css";
import { useState } from "react";
import Walking from "../../assets/images/Walking.png";
import lo from "../../assets/images/5.png";
import lo2 from "../../assets/images/6.png";
import lo3 from "../../assets/images/7.png";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="py-5">
        <div className=" d-flex justify-content-center a">
          <img src={Walking} width={300} alt="" />
        </div>
        <div className=" d-flex justify-content-center   ">
          <div className="  py-5 my-5 login">
            <div className="tabs">
              <button className="tab active">دخول</button>
              <button className="tab">تسجيل</button>
            </div>
            <form className="login-form">
              <input
                type="text"
                placeholder="رقم الجوال"
                className="input-field"
              />
              <div className=" mb-2 position-relative  ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input-field"
                  placeholder="الرقم السرى"
                />
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#aaa",
                  }}
                  aria-label="Toggle Password Visibility"
                ></i>
              </div>
              <div className=" d-flex justify-content-end">
                <a href="#" className="forgot-password ">
                  نسيت الرقم السري؟
                </a>
              </div>

              <div className=" d-flex justify-content-center  align-items-center">
                <button type="submit" className="login-button">
                  دخول
                </button>
              </div>
            </form>
            <div className="social-login">
              <p>المتابعة باستخدام</p>
              <div className="social-icons">
                <img src={lo} alt="" />
                <img src={lo2} alt="" />
                <img src={lo3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
