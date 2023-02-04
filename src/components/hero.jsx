import { default as blob } from "../assets/blob.svg";

const Hero = () => {
  var code = `let button_menu = document.querySelector(".header_button");
let float_menu  = document.querySelector(".header_menu--float");
let line_top   = document.querySelector(".header_button_line--top");
let line_under = document.querySelector(".header_button_line--bottom");

button_menu.isSelected = false;

function addEffectWriting(element, time) {
  let element_array = element.innerText.split("");

  element.count     = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
      setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
      element.count     = 0;
      element.innerText = "";

      writeSymbols();
    }
  }
  writeSymbols();
} 
`;
  return (
    <div className="mx-auto flex flex-col justify-center gap-2 p-4 md:flex-row md:items-center md:justify-between lg:max-w-7xl">
      <div className="p-5 md:w-1/2 md:flex-col md:p-0">
        <h1 className="py-1 text-5xl font-black text-primary">Youmna Jaza</h1>
        <h2 className="py-1 text-3xl font-bold">Software Engineer</h2>
        <p className="py-1 text-xl">
          Frontend developer looking for ideas and projects for himself and
          others
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="relative whitespace-pre text-[.50rem] text-primary text-opacity-30 md:text-base">
          {code}
          <img
            className="absolute top-0 left-0 w-full "
            src={blob}
            alt="blob"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
