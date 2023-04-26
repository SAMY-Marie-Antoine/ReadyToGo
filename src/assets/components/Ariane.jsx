const Ariane = ({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
}) => {
  console.log("defaut", switch1);
  return (
    <section>
      <div>
        <span>
          <button
            onClick={() => {
              !switch1 && setSwitch1(!switch1);
              console.log("click ON", switch1);
            }}
          >
            <span className={switch1 ? "button" : "reset"}>ON</span>
          </button>
        </span>

        <span>
          <button
            onClick={() => {
              switch1 && setSwitch1(!switch1);
              console.log("click OFF", switch1);
            }}
          >
            <span className={switch1 ? "reset" : "button"}>OFF</span>
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              !switch2 && setSwitch2(!switch2);
              console.log("click ON", switch2);
            }}
          >
            <span className={switch2 ? "button" : "reset"}>ON</span>
          </button>

          <button
            onClick={() => {
              switch2 && setSwitch2(!switch2);
              console.log("click OFF", switch2);
            }}
          >
            <span className={switch2 ? "reset" : "button"}>OFF</span>
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              !switch3 && setSwitch3(!switch3);
              console.log("click ON", switch3);
            }}
          >
            <span className={switch3 ? "button" : "reset"}>ON</span>
          </button>

          <button
            onClick={() => {
              switch3 && setSwitch3(!switch3);
              console.log("click OFF", switch3);
            }}
          >
            <span className={switch3 ? "reset" : "button"}>OFF</span>
          </button>
        </span>
      </div>
      <span className="span">
        {switch1 && switch2 && switch3 ? (
          <span className={"go"}>GO !</span>
        ) : (
          <span className={"stop"}>No Way !</span>
        )}
      </span>

      {/* <span className={switch1 && switch2 && switch3 ? "go" : "stop"}>
        No Way !
      </span> */}
    </section>
  );
};
export default Ariane;
