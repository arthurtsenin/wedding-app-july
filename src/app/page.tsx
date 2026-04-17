import Image from "next/image";

import mainBg from "$/decor.png";

export default function Home() {
  return (
    <>
      <section className="min-h-[100svh] w-full h-full flex flex-col justify-between items-center py-14  text-center font-semibold  ">
        <h1 className="uppercase">ПРиглашение на праздник любви</h1>

        <div className="font-secondary text-7xl font-light md:flex md:text-9xl gap-14 relative">
          <p className="absolute top-1/2 text-[180px] opacity-25 left-1/2 -translate-x-1/2 -translate-y-1/2">
            &
          </p>
          <p>Виталий</p>
          <p className="ms-14">Валерия</p>
        </div>

        <div>31 июля 2026 г.</div>
      </section>

      <div className=" border-4 p-1 rounded-4xl backdrop-blur-xs">
        <section className="w-full h-full flex flex-col justify-between gap-14 items-center py-24 text-center  p-4 font-semibold  border-2  rounded-3xl  ">
          <h2 className="uppercase font-bold">ДОРОГИЕ РОДНЫЕ И БЛИЗКИЕ!</h2>
          <div className="flex flex-col gap-10 text-xl">
            <p>В нашей жизни предстоят счастливые перемены!</p>
            <p>
              Мы хотим, чтобы в этот день рядом были самые близкие и дорогие для
              нас люди.
            </p>
            <p>
              Будем рады если вы станете частью официального дня рождения нашей
              семьи.
            </p>
          </div>
        </section>
      </div>

      <section className="flex flex-col justify-between gap-14 items-center py-24 text-center  p-4 font-semibold   border border-black/20  rounded-4xl backdrop-blur-xs">
        <div className="size-34 absolute top-0 left-1/2 -translate-1/2">
          <Image src={mainBg} className="w-full h-full" alt="" />
        </div>

        <h2 className="uppercase font-extrabold relative leading-6">
          Программа вечера
          <p className="font-secondary capitalize text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 text-black opacity-10">
            Timing
          </p>
        </h2>
        <div className="flex flex-col justify-center gap-10 text-xl">
          <p>
            Уважаемы гости, мы подготовили для Вас насыщенную программу,
            <br />
            котрая подарит незабываемы мгновения:
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

      <section className="w-full h-full flex flex-col justify-between gap-10 items-center py-24 text-center  p-4 font-semibold     ">
        <h2 className="uppercase font-extrabold relative leading-6">
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

      <section className=" flex flex-col justify-between gap-14 items-center py-24 text-center  p-6 font-semibold   border border-black/20  rounded-4xl backdrop-blur-xs">
        <div className="size-34 absolute top-0 left-1/2 -translate-1/2">
          <Image src={mainBg} className="w-full h-full" alt="" />
        </div>

        <h2 className="uppercase font-extrabold relative leading-6">
          Пожелания
          <p className="font-secondary capitalize text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 text-black opacity-10">
            wishes
          </p>
        </h2>
        <div className="flex flex-col justify-center gap-10 text-xl">
          <p>
            Мы догадываемся, что после получения приглашения у вас может
            появится ряд вопросов. Мы постарались ответить на некоторые
          </p>
          <ul className=" flex flex-col gap-15 ">
            <li>
              <div className="size-34 ">
                <Image src={mainBg} className="w-full h-full" alt="" />
              </div>
              <p>Сюрпризы</p>
              <p>
                Возьми с собой отличное настроение! Приветсвуются ваши
                поздравления, активное участие в интерактивах, творческие
                выступления! Вы можетеобратиться к нашему организатору для
                воплощения своих идей!
              </p>
            </li>

            <li>
              <div className="size-34 ">
                <Image src={mainBg} className="w-full h-full" alt="" />
              </div>
              <p>Цветы</p>
              <p>
                Наш праздник будет окружен изобилием цветов, поэтому приятным
                комплиментом для нас вместо букета будет бутылка вашего любимого
                крепкого алкоголя
              </p>
            </li>

            <li>
              <div className="size-34 ">
                <Image src={mainBg} className="w-full h-full" alt="" />
              </div>
              <p>Что дарить?</p>
              <p>
                В качестве подарка будем рады вкладу в бюджет нашей семьи. Он
                точно поможетвоплотитьнашу мечту в реальность!
              </p>
            </li>

            {/* <li>
              <div className="size-34 ">
                <Image src={mainBg} className="w-full h-full" alt="" />
              </div>
              <p>Маленькие гости</p>
              <p>
               Дорогие гости, мы будем благодарныБ если вы посвятите нашему дню все своевнимание и энергию, сможете по-настоящему отдохнуть и развлечься
              </p>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
