import React, { useState } from "react";

const Weather = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = () => setIsCelsius(!isCelsius);

  console.log(weather);
  return (
    <section className=" text-xl">
      <h2 className="text-center mb-4 font-bold text-2xl">
        {weather.name}, {weather.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-two">
        <article className=" bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-items-center items-center py-2 sm: px-2">
          <h3 className="capitalize col-start-1 col-end-3">
            {weather.weather[0].description}
          </h3>

          <h2 className="text-[45px] font-light sm:text-6xl">
            {isCelsius ? `${temp.celsius} ºC` : `${temp.fahrenheit} ºF`}
          </h2>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>

        <article className="bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch py-2 sm:grid-cols-1 sm:px-2 sm:py-0 ">
          <div className="flex gap-2 text-sm justify-center items-center">
            <div>
              <img src="/images/wind.png" alt="" />
            </div>
            <h5>{weather.wind.speed}m/s</h5>
          </div>

          <div className="flex gap-2 text-sm justify-center items-center">
            <div>
              <img src="/images/humidity.png" alt="" />
            </div>
            <h5>{weather.main.humidity}%</h5>
          </div>

          <div className="flex gap-2 text-sm justify-center items-center">
            <div>
              <img src="/images/pressure.png" alt="" />
            </div>
            <h5>{weather.main.pressure}hPa</h5>
          </div>
        </article>
      </section>
      <button
        onClick={changeUnitTemp}
        className="bg-cyan-600 py-2 px-6 text-white font-bo rounded-full hover:bg-sky-800 duration-200 text-sm block mx-auto mt-4"
      >
        {" "}
        Change ºC/ºF
      </button>
    </section>
  );
};

export default Weather;
