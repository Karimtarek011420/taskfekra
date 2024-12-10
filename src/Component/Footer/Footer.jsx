import "./footer.css";
import footer from "../../assets/images/foot.png";
import Capa_1 from "../../assets/images/Capa_1.png";
import Vector from "../../assets/images/Vector.png";
import GPlay from "../../assets/images/G Play.png";
import APPStore from "../../assets/images/APP Store.png";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div className=" container-fluid px-3">
          <div className=" row justify-content-center  align-items-center">
            <div className="col-md-4">
              <div className="footer-section d-flex">
                <img src={footer} width={75} height={75} alt="" />
                <div>
                  <h3 className=" fs-3 ">شركة تجوال العالم للتجارة</h3>
                  <p>
                    هي أول شركة سعودية مسجلة متخصصه في بيع شرائح التجوال
                    الالكترونية في السعودية، و مرخصة بالسجل التجاري رقم
                    7041398541.
                  </p>
                  <div className="app-buttons">
                    <img src={Capa_1} width={40} height={20} alt="App Store" />
                    <img
                      src={Vector}
                      width={40}
                      height={20}
                      alt="Google Play"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section qr-codes">
                <h4>حمل التطبيق</h4>
                <div className="qr-container">
                  <img src={GPlay} alt="QR Code Apple" />
                  <img src={APPStore} alt="QR Code Android" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section">
                <h4>خريطة الموقع</h4>
                <ul>
                  <li>
                    <a href="#">الرئيسية</a>
                  </li>
                  <li>
                    <a href="#">خدمات</a>
                  </li>
                  <li>
                    <a href="#">اتصل بنا</a>
                  </li>
                  <li>
                    <a href="#">الأسئلة الشائعة</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottom-bar p-3  text-white d-flex  justify-content-evenly"
          style={{ backgroundColor: "#626E7B" }}
        >
          <p> © جميع الحقوق محفوظة : شركة توصيل</p>
          <p> سياسة الخصوصية سياسة الاستخدام </p>
          <p></p>
        </div>
      </footer>
    </>
  );
}
