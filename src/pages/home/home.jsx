import React from 'react';
import "./home.css";
import home_s3_1 from "../../assets/img/natural-leather-animal-fur-texture.jpg"
import home_s3_2 from "../../assets/img/150A1861.jpg"
import home_s3_3 from "../../assets/img/150A1967.jpg"
import home_s3_4 from "../../assets/img/150A1786.jpg"
import home_s3_5 from "../../assets/img/150A1942.jpg"
import home_s3_6 from "../../assets/img/150A1934.jpg"

import home_s4_1 from "../../assets/icon/koja.png"
import home_s4_2 from "../../assets/icon/assartiment.png"
import home_s4_3 from "../../assets/icon/podxod.png"
import home_s4_4 from "../../assets/icon/eco.png"
import home_s4_5 from "../../assets/icon/opit.png"
import home_s4_6 from "../../assets/icon/reputatsiya.png"

import home_s5 from "../../assets/img/150A1795.jpg"

import home_s5_1 from "../../assets/img/150A0757.jpg"
import home_s5_2 from "../../assets/img/150A0765.jpg"

import home_header_1 from "../../assets/img/DGH_86.jpg"
import home_header_2 from "../../assets/img/DGH_232.jpg"
import home_header_3 from "../../assets/img/150A0704.jpg"

import success from "../../assets/icon/success.png"

import {Helmet} from "react-helmet-async";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {Link} from "react-router-dom";
import {ArrowRightOutlined, EyeOutlined} from "@ant-design/icons";
import {Image} from "antd";
import {CONTACT, PRODUCTION} from "../../utils/const.jsx";

const Home = () => {
    return (
        <>
            <Helmet>
                {/* Sahifa sarlavhasi */}
                <title>HAMKOR NUR SAVDO - Мастера кожевенного ремесла</title>
                {/* Umumiy meta teglar */}
                <meta name="description"
                      content="HAMKOR NUR SAVDO — мастера кожевенного ремесла: от сырья до совершенства. Высокое качество, широкий ассортимент, экологичность и индивидуальный подход."/>
                <meta name="keywords"
                      content="кожа, кожевенное производство, Hamkor Nur Savdo, обработка кожи, дубление, краска, контроль качества"/>
                <meta name="author" content="HAMKOR NUR SAVDO"/>
            </Helmet>
            <div className="Home">
                <span className={"opacity_container"}></span>
                <div className="home_box container">
                    <h1 data-aos="fade-up">ОТ СЫРЬЯ ДО СОВЕРШЕНСТВА</h1>
                    <p data-aos="fade-up">кожевенное производство для ценителей качества</p>
                    <Link to={CONTACT} data-aos="fade-up">Свяжитесь с нами</Link>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={home_header_1} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_2} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={home_header_3} alt=""/></SwiperSlide>
                </Swiper>
            </div>
            <div className="container">
                <section className="home_section2">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 home_section2_left" data-aos="fade-up">
                            <h3><span></span> Кожевенное производство</h3>
                            <h2>СИЛА, ЭЛЕГАНТНОСТЬ И СТИЛЬ - ВСЁ НАЧИНАЕТСЯ С КОЖИ</h2>

                        </div>
                        <div className="col-lg-6 home_section2_right" data-aos="fade-up">
                            <h3>о компании</h3>
                            <p>Компания «Hamkor Nur Savdo» была основана в 2007 году и с тех пор зарекомендовала себя
                                как надежный производитель и поставщик высококачественной кожи. Деятельность предприятия
                                заключается в переработке крупного рогатого скота. Мы не только удовлетворяем
                                потребности внутреннего рынка, но и активно экспортируем нашу продукцию в Китай, Турцию,
                                Россию , Италию и Индию.
                            </p>
                            <p>
                                В 2012 году, став участником Ангренской экономической зоны, мы открыли
                                новый производственный завод в Охангароне, что позволило значительно расширить
                                производственные мощности.
                                Основная производственная линия принадлежит брендам Италии: RIZZI, MOSTARDINI, BARNINI
                                ,PAJUSCO, ESCOMAR и BERGI.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="home_section3">
                <div className="container">
                    <div className="home_section4_title" style={{marginBottom: "100px"}} data-aos="fade-up">
                        <h1>Производство</h1>
                        <span></span>
                    </div>
                    <div className="row  justify-content-around align-items-center">
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_1} alt="ДОБЫЧА И ПОДГОТОВКА СЫРЬЯ"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}/>
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>ДОБЫЧА И ПОДГОТОВКА СЫРЬЯ</h2>
                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>
                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_2} alt="КРАСКА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>КРАСКА</h2>

                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_3} alt="ДУБЛЕНИЕ"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>ДУБЛЕНИЕ</h2>

                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_4} alt="ОБРАБОТКА И ОТДЕЛКА" style={{objectFit: "cover"}}
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>ОБРАБОТКА И ОТДЕЛКА</h2>

                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_5} alt="МЕХАНИЧЕСКАЯ ОБРАБОТКА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}
                                    />
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>МЕХАНИЧЕСКАЯ ОБРАБОТКА</h2>
                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                            <div className="home_section3_item" data-aos="fade-up">
                                <div className="home_section3_item_icon">
                                    <ArrowRightOutlined/>
                                </div>
                                <div className="home_section3_item_img">
                                    <Image src={home_s3_6} alt="КОНТРОЛЬ КАЧЕСТВА"
                                           preview={{
                                               mask: <div className={"preview_box"}><EyeOutlined/> <span>Открыть</span>
                                               </div>
                                           }}
                                           style={{objectFit: "cover"}}/>
                                </div>
                                <div className="home_section3_item_text">
                                    <h2>КОНТРОЛЬ КАЧЕСТВА</h2>
                                    <Link to={PRODUCTION}>Подробно <ArrowRightOutlined/></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container d-flex justify-content-center align-items-center">
                <section className={"home_section4"}>
                    <div className="home_section4_title" data-aos="fade-up">
                        <h1>ПОЧЕМУ МЫ - ВАШ ЛУЧШИЙ ВЫБОР?</h1>
                        <span></span>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_1} alt=""/>
                                </div>
                                <h3>Высокое качество кожи</h3>
                                <p>Кожа, которую мы производим, отличается долговечностью, эластичностью и
                                    износостойкостью.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_2} alt=""/>
                                </div>
                                <h3>Широкий ассортимент</h3>
                                <p>Мы производим продукцию для самых разных сфер: от роскошной обуви и  кожгалантерии.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_3} alt=""/>
                                </div>
                                <h3>Индивидуальный подход к каждому клиенту</h3>
                                <p>Мы ценим уникальность каждого заказа. Наши специалисты готовы разработать решения,
                                    идеально соответствующие вашим потребностям, будь то особый цвет, текстура или
                                    функциональные характеристики.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_4} alt=""/>
                                </div>
                                <h3>Экологичность и безопасность</h3>
                                <p>Все наши изделия соответствуют международным стандартам безопасности и охраны
                                    окружающей среды.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_5} alt=""/>
                                </div>
                                <h3>Опыт и профессионализм</h3>
                                <p>Более 18 лет на рынке кожевенного производства. За это время мы накопили опыт,
                                    который позволяет нам не только удовлетворять, но и предвосхищать потребности наших
                                    клиентов.</p>
                            </div>
                            <div className="home_section4_item" data-aos="fade-up">
                                <div className="home_section4_item_img">
                                    <img src={home_s4_6} alt=""/>
                                </div>
                                <h3>Безупречная репутация</h3>
                                <p>Наши клиенты доверяют нам, потому что мы гарантируем качество на каждом этапе — от
                                    разработки до поставки готовой продукции. Мы гордимся своей репутацией надежного
                                    партнера.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="home_section5 d-flex justify-content-center align-items-center overflow-hidden">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={home_s5} alt=""/>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="home_section5_text">
                            <div className="home_section5_text_title">
                                <h1>НАШИ ПРЕИМУЩЕСТВА:</h1>
                                <span></span>
                            </div>
                            <p>
                                <ul>
                                    <li><img src={success} alt=""/>Исключительное качество материалов</li>
                                    <li><img src={success} alt=""/>Долговечность</li>
                                    <li><img src={success} alt=""/>Индивидуальный подход</li>
                                    <li><img src={success} alt=""/>Стабильность</li>
                                    <li><img src={success} alt=""/>Ответственность</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_section_box_info"}>
                <div className="container">
                    <div className="home_section_box_info_box">
                        <div className="home_section_box_info_item">
                                <span className={"home_section_box_info_item_i"} data-aos="fade-right">
                                    <span className="home_section_box_info_item_opacity"></span>
                                   <h1> ИННОВАЦИОННЫЕ ПОДХОДЫ В КОЖАНОЙ ОБРАБОТКЕ</h1>
                                </span>

                        </div>
                        <div className="home_section_box_info_item">
                            <span className={"home_section_box_info_item_i"} data-aos="fade-up">
                                  <span className="home_section_box_info_item_opacity"></span>
                                <h1>АКТИВНО ВНЕДРЯЕМ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ И МЕТОДЫ</h1>

                            </span>

                        </div>
                        <div className="home_section_box_info_item">
                            <span className={"home_section_box_info_item_i"} data-aos="fade-right">
                                <span className="home_section_box_info_item_opacity"></span>
                                <h1>ИЗУЧАЕМ НОВЫЕ СПОСОБЫ УЛУЧШЕНИЯ ТЕКСТУРЫ, ПРОЧНОСТИ И ДОЛГОВЕЧНОСТИ</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home_section7">
                <span className="home_section7_opacity"></span>
            </section>


        </>

    );
};

export default Home;
