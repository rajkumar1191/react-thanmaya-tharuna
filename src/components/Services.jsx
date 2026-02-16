import style from "./Services.module.css";

const Services = ({ passData }) => {
  return (
    <>
      <h1>Services</h1>
      <button
        className={style.btn}
        onClick={() => passData("Data from services")}
      >
        Submit
      </button>
    </>
  );
};

export default Services;
