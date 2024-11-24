import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./about.css"
import about_s2_1 from "../../assets/img/150A1986.webp"
import about_s2_2 from "../../assets/img/150A1934.png"
import {Helmet} from "react-helmet-async";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import about_header_1 from "../../assets/img/150A1934.png";
import about_header_2 from "../../assets/img/150A1957.webp";
import about_header_3 from "../../assets/img/150A1976.webp";

const About = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle counting for each count
    const startCounting = useCallback(() => {
        const timer1 = setInterval(() => {
            setCount1((prevCount) => {
                if (prevCount < 250) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer1);
                    return prevCount;
                }
            });
        }, 10);

        const timer2 = setInterval(() => {
            setCount2((prevCount) => {
                if (prevCount < 18) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer2);
                    return prevCount;
                }
            });
        }, 100);

        const timer3 = setInterval(() => {
            setCount3((prevCount) => {
                if (prevCount < 173) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer3);
                    return prevCount;
                }
            });
        }, 10);

        const timer4 = setInterval(() => {
            setCount4((prevCount) => {
                if (prevCount < 2) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer4);
                    return prevCount;
                }
            });
        }, 100);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
        };
    }, []);

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the section is visible
                }
            },
            {threshold: 0.1}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Start counting when the section becomes visible
    useEffect(() => {
        if (isVisible) {
            startCounting();
        }
    }, [isVisible, startCounting]);
    return (
        <>
            <Helmet>
                <title>О Нас - Hamkor Nur Savdo</title>
                <meta name="description"
                      content="Мы гордимся тем, что сочетаем традиционные методы обработки кожи с инновационными технологиями для создания продукции высочайшего качества."/>
                <meta name="keywords"
                      content="кожа, кожевенное производство, Hamkor Nur Savdo, обработка кожи, дубление, краска, контроль качества"/>
                <meta name="author" content="HAMKOR NUR SAVDO"/>
                <meta property="og:title" content="О Нас - Hamkor Nur Savdo"/>
                <meta property="og:description"
                      content="Мы гордимся тем, что сочетаем традиционные методы обработки кожи с инновационными технологиями для создания продукции высочайшего качества."/>
                <meta property="og:image" content={about_s2_1}/>
                <meta property="og:url" content="https://yourwebsite.com/about"/>
            </Helmet>
            <section className="about_header">
                <span className="opacity_about"></span>
                <div className="about_header_text">
                    <h1>О НАС</h1>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={about_header_1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={about_header_2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={about_header_3} alt="" /></SwiperSlide>
                </Swiper>
            </section>

            <section className={"about_s1 container "}>
                <div className="row justify-content-around">
                    <div className="col-lg-5">
                        <div className="about_s1_title">
                            <h2>КАЧЕСТВО, ПРОВЕРЕННОЕ ВРЕМЕНЕМ</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Мы гордимся тем, что сочетание традиционных методов обработки кожи с инновационными
                                технологиями позволяет нам создавать продукцию высочайшего качества, которая прослужит
                                вам долгие годы.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>МАСТЕРА СВОЕГО ДЕЛА</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Наши изделия — это не просто кожа, это результат многолетнего мастерства и внимания к
                                каждой детали, что делает их уникальными и неповторимыми.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about_s1_title">
                            <h2>ЭКОЛОГИЧНОСТЬ И ОТВЕТСТВЕННОСТЬ</h2>
                            <span></span>
                        </div>
                        <div className="about_s1_text">
                            <p>Мы стремимся к экологичности и ответственному подходу на каждом этапе производства,
                                обеспечивая безупречное качество и минимальное воздействие на окружающую среду</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s2 overflow-hidden container">
                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={about_s2_1} alt="" />
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>специалисты</p>

                            </div>
                            <h1>В нашем кожевенном производстве работает команда высококвалифицированных специалистов,
                                которые обладают многолетним опытом и настоящей страстью к своему делу. </h1>

                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="about_s2_text">
                            <div className="about_s2_text_title">
                                <p>специалисты</p>
                            </div>
                            <h1>СОВРЕМЕННОЕ ОБОРУДОВАНИЕ ДЛЯ БЕЗУПРЕЧНОГО КАЧЕСТВА</h1>

                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <img src={about_s2_2} alt="" />
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="about_s3">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 about_s3_left" data-aos="fade-up">
                            <h3><span></span> Наша работа</h3>
                            <h2>ПРЕВРАЩЕНИЕ КОЖИ В ИСКУССТВО</h2>
                        </div>
                        <div className="col-lg-6 about_s3_right" data-aos="fade-up">
                            <p> В нашем кожевенном производстве каждый процесс — это искусство, в котором сочетаются
                                традиции ремесленного мастерства и новейшие технологии. Мы тщательно подбираем сырьё и с
                                максимальным вниманием подходим к каждому этапу обработки кожи. От дубления до финишной
                                отделки — каждый этап нашей работы направлен на создание продукции, которая сочетает в
                                себе эстетическую красоту и исключительную прочность.</p>

                        </div>
                    </div>
                </section>
            </div>

            <section className='number' ref={sectionRef}>
                <span className="number_opacity"></span>
                <div className="number_box ">
                    <div className="row " data-aos="fade-right" style={{width: "100%"}}>
                        <div className="col-lg-3">
                            <p className='count'>{count1}</p>
                            <p className="last"> Виды кожи</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>{count2}</p>
                            <p className="last">Партнёры</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>{count3}</p>
                            <p className="last">Довольные клиенты</p>
                        </div>
                        <div className="col-lg-3">
                            <p className='count'>2</p>
                            <p className="last">Филиалы</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;