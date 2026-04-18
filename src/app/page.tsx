import Image from "next/image";

import decor from "$/decor.webp";
import decor2 from "$/decor2.webp";

import alco from "$/alcohol.webp";
import emotional from "$/emotional.webp";
import money from "$/money.webp";

const OPEN_GRAPH = {
  openGraph: {
    title: "Приглашение на праздник любви",
    description:
      "С огромной радостью и волнением приглашаем вас разделить с нами один из самых важных и значимых дней в нашей жизни — день нашей свадьбы. Этот день для нас символизирует начало нового этапа, наполненного любовью, счастьем и совместными мечтами.",

    siteName: "Приглашение на праздник любви",
    images: [
      {
        url: "https://ia600604.us.archive.org/26/items/2026-04-18-14.20.17/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-18%20%D0%B2%2014.20.17.png",
      },
    ],
  },
};

export const BASE_METADATA = {
  ...OPEN_GRAPH,
  applicationName: "Приглашение на праздник любви",
  robots: "follow, index",
};

export const metadata = {
  ...BASE_METADATA,
  title: "Приглашение на праздник любви",
  description:
    "С огромной радостью и волнением приглашаем вас разделить с нами один из самых важных и значимых дней в нашей жизни — день нашей свадьбы. Этот день для нас символизирует начало нового этапа, наполненного любовью, счастьем и совместными мечтами.",
};

export default function Home() {
  return (
    <>
      <section className="wrapper section-p min-h-screen w-full h-full flex flex-col justify-between items-center  text-center font-semibold  ">
        <h1 className="uppercase">Приглашение на праздник любви</h1>

        <div className="font-secondary text-7xl font-light lg:flex md:text-9xl gap-14 relative">
          <p className="absolute top-1/2 text-[180px] opacity-25 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8  lg:text-[280px]">
            &
          </p>
          <p>Виталий</p>
          <p className="ms-14">Валерия</p>
        </div>

        <div>31 июля 2026 г.</div>
      </section>

      <section className="wrapper border-2 p-1 rounded-4xl backdrop-blur-xs">
        <div className="section-p w-full h-full flex flex-col justify-between gap-14 items-center  text-center  p-4 font-semibold  border  rounded-3xl  shadow-2xl ">
          <h2 className="uppercase font-bold">ДОРОГИЕ РОДНЫЕ И БЛИЗКИЕ!</h2>
          <div className="flex flex-col gap-8 text-xl">
            <p>В нашей жизни предстоят счастливые перемены!</p>
            <p>
              Мы хотим, чтобы в этот день рядом были самые близкие и дорогие для
              нас люди.
            </p>
            <p>
              Будем рады, если вы станете частью официального дня рождения нашей
              семьи.
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper section-p flex flex-col justify-between gap-14 items-center  text-center  p-4 font-semibold   border border-black/20  rounded-4xl backdrop-blur-xs  shadow-2xl">
        <div className="size-34 absolute top-0 left-1/2 -translate-1/2">
          <Image src={decor} className="w-full h-full" alt="" />
        </div>

        <h2 className="uppercase font-extrabold relative leading-6">
          Программа вечера
          <p className="font-secondary capitalize text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 text-black opacity-10">
            Timing
          </p>
        </h2>
        <div className="flex flex-col justify-center gap-10 text-xl">
          <p>
            Уважаемые гости, мы подготовили для Вас насыщенную программу,
            <br />
            которая подарит незабываемые мгновения:
          </p>
          <div className=" flex-col gap-6 text-4xl lg:p-4 font-bold lg:max-w-10/12 self-center grid grid-cols-[auto_1fr] ">
            {/* <li className="   items-center grid grid-cols-[auto_1fr]  "> */}
            <span className="text-taupe-500 ">16:00</span>
            <p className="uppercase text-2xl text-start">сбор гостей</p>
            {/* </li>
            <li className="  items-center  grid grid-cols-[auto_1fr]"> */}
            <span className="text-taupe-500 text-start">16:30</span>
            <p className="uppercase text-2xl text-start">
              торжественная церемония
            </p>
            {/* </li>
            <li className="  items-start  grid grid-cols-[auto_1fr]"> */}
            <span className="text-taupe-500 ">18:00</span>
            <div className="h-fit">
              <p className="uppercase text-2xl text-start">начало банкета</p>
              <p className="text-[18px] text-start">
                самое время для вкусной еды, веселья и танцев
              </p>
            </div>
            {/* </li> */}
          </div>
        </div>
      </section>

      <section className="wrapper section-p w-full h-full flex flex-col justify-between gap-10 items-center  text-center  p-4 font-semibold     ">
        <h2 className="uppercase font-extrabold relative">
          Место встречи
          <p className="font-secondary capitalize text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 z-10 text-black opacity-10">
            Location
          </p>
        </h2>
        <div className="flex flex-col gap-10 text-xl">
          <p className="text-3xl">Банкетный зал «Три поколения»</p>
          <p>г.Лида ,улица Жукова 6 корп.5</p>
        </div>
      </section>

      <section className="wrapper section-p flex flex-col justify-between gap-14 items-center  text-center  p-6 font-semibold   border border-black/20  rounded-4xl backdrop-blur-xs  ">
        <div className="size-34 absolute top-0 left-1/2 -translate-1/2">
          <Image src={decor2} className="w-full h-full" alt="" />
        </div>

        <h2 className="uppercase font-extrabold relative leading-6">
          Пожелания
          <p className="font-secondary capitalize text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 text-black opacity-10">
            Wishes
          </p>
        </h2>
        <div className="flex flex-col justify-center gap-10 text-xl">
          <p>
            Мы догадываемся, что после получения приглашения у вас может
            появиться ряд вопросов мы постарались ответить на некоторые.
          </p>
          <ul className=" flex flex-col gap-15  lg:flex-row">
            <li className="flex flex-col items-center gap-3">
              <div className="size-30 ">
                <Image src={emotional} className="w-full h-full" alt="" />
              </div>
              <p className="text-taupe-600  uppercase text-3xl">
                Что взять с собой?
              </p>
              <p>
                Хорошее настроение! Веселитесь, танцуйте, побольше
                фотографируйте и переживайте самые счастливые моменты вместе с
                нами!
              </p>
            </li>

            <li className="flex flex-col items-center  gap-3">
              <div className="size-30 ">
                <Image src={money} className="w-full h-full" alt="" />
              </div>
              <p className="text-taupe-600  uppercase text-3xl">Что дарить?</p>
              <p>
                В качестве подарка будем рады вкладу в бюджет нашей семьи.Он
                точно поможет воплотить нашу мечту в реальность!
              </p>
            </li>

            <li className="flex flex-col items-center  gap-3">
              <div className="size-30 ">
                <Image src={alco} className="w-full h-full" alt="" />
              </div>
              <p className="text-taupe-600  uppercase text-3xl">Цветы</p>
              <p>
                Наш праздник будет окружен изобилием цветов, поэтому приятным
                комплиментом для нас вместо букета будет бутылка вашего любимого
                алкоголя.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <h3 className="text-5xl text-center text-taupe-700">С нетерпением ждем Вас!</h3>
    </>
  );
}
