import "./Phone.css";
import layer1 from "../../assets/images/1.png";
import layer2 from "../../assets/images/2.png";
import layer3 from "../../assets/images/3.png";
import layer4 from "../../assets/images/4.png";
export default function Phone() {
  return (
    <>
      <div className=" container py-5 phone">
        <h2 style={{ color: "#626E7B" }} className=" py-4 fw-bold">
          كيف تستخدم “تجوال”
        </h2>
        <div className="row  gy-5">
          <div className="col-md-3">
            <img src={layer1} className=" w-100" alt="" />
            <h4
              className="text-center  py-2 fw-bolder"
              style={{ color: "#626E7B" }}
            >
              {" "}
              حمل التطبيق
            </h4>
          </div>
          <div className="col-md-3">
            <img src={layer2} className=" w-100" alt="" />
            <h4
              className="text-center  py-2 fw-bolder"
              style={{ color: "#626E7B" }}
            >
              اختر الوجهة والباقة{" "}
            </h4>
          </div>
          <div className="col-md-3">
            <img src={layer3} className=" w-100" alt="" />
            <h4
              className="text-center  py-2 fw-bolder"
              style={{ color: "#626E7B" }}
            >
              {" "}
              ثبت الشريحة
            </h4>
          </div>
          <div className="col-md-3">
            <img src={layer4} className=" w-100" alt="" />
            <h4
              className="text-center  py-2 fw-bolder"
              style={{ color: "#626E7B" }}
            >
              {" "}
              استمتع بالباقة
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
