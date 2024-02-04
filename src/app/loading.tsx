import "./loading.css";
import BasePage from "@/components/BasePage";
const Loading = () => {
  return (
    //Can Also do without basepage
    <BasePage active="">
      <div className="flex items-center justify-center w-screen">
        <div className="typewriter">
          <div className="slide">
            <i />
          </div>
          <div className="paper" />
          <div className="keyboard" />
        </div>
      </div>
    </BasePage>
  );
};

export default Loading;
