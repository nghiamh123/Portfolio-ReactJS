import React, { useEffect, useState } from "react";

const Home =() => {
    const [isActive, setIsActive] = useState(false)
    const SrollTop = event => {
        console.log("hello");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    useEffect(() => {
        var srollTopBtn = document.querySelector('.social-icons')
        window.addEventListener("scroll", function () {
            srollTopBtn.classList.toggle("active", this.window.scrollY > 800);
        })
    });
    return(
        <div id="main">
            {/* header */}
            <div className="container_header">
                <div className="content">
                    <p>I'M</p>
                    <h1>NGHIA DANG</h1>
                    <h3>nothing is impossible</h3>
                </div>
                <div className='social-icons active' onClick={SrollTop}>
                    <i className="fas fa-chevron-circle-up" />
                </div>
                <div className="content_small">
                    <img
                        src="./assets/images/header_img.jpg"
                        alt="Avt"
                        className="content_small-img"
                    />
                    <h1 className="content_small-heading">Dang Nghia</h1>
                    <h3 className="content_small-text">
                        nothing is impossible
                    </h3>
                    <div className="content_small-social">
                        <i className="fab fa-instagram" />
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-youtube" />
                    </div>
                    <div className="content_small-btn">
                        <button className="btn content_small-btn-detail">more about me</button>
                        <button className="btn content_small-btn-detail">My portfolio</button>
                    </div>
                </div>
            </div>
            {/* about */}
            <div id="about" className="grid grid_mobile">
                <div className="first_content">
                    <img className="first_content-img" src="./assets/images/about.jpg" alt="" />
                    <div className="first_content-text">
                        <h1 className="first_content-heading">About Me</h1>
                        <span className="first_content-detail">
                        I graduated from TDT University in 2022 with a degree in Software
                        Engineering. My interests are in Front End Engineering and I love to
                        create beautiful and performant products with delightful user
                        experiences.
                        </span>
                        <div className="first_content-more-detail">
                            <div className="first_content-more-detail-col1">
                                <ul className="more-detail-col1_list">
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">Name: </span>
                                    <span className="more-detail-col1_item-detail">Dang Hoang Dai Nghia</span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">Birthdate: </span>
                                    <span className="more-detail-col1_item-detail">
                                    March 15th 2000
                                    </span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">Address: </span>
                                    <span className="more-detail-col1_item-detail">
                                    HCM City, VietNam
                                    </span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">
                                    Experience:{" "}
                                    </span>
                                    <span className="more-detail-col1_item-detail">Senior</span>
                                </li>
                                </ul>
                                <ul className="more-detail-col1_list">
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">Phone: </span>
                                    <span className="more-detail-col1_item-detail">
                                    +84853783578
                                    </span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">E-mail: </span>
                                    <span className="more-detail-col1_item-detail">
                                    nghia12a319@gmail.com
                                    </span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">
                                    University:{" "}
                                    </span>
                                    <span className="more-detail-col1_item-detail">
                                    Ton Duc Thang
                                    </span>
                                </li>
                                <li className="more-detail-col1_item">
                                    <span className="more-detail-col1_item-label">website: </span>
                                    <span className="more-detail-col1_item-detail">
                                    happyshop.vn
                                    </span>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="first_content-btn">
                            <button className="first_content-view">View Full Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* photos */}
            <div id="photos" className="wrap_second-content">
                <div className="second_content">
                <h1
                    className="first_content-heading heading_style"
                    style={{ paddingBottom: 16 }}
                >
                    Photos
                </h1>
                <div className="second_content-detail">
                    <div className="grid">
                    <div className="grid_row">
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo1.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo2.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo3.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo4.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo5.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                        <div className="grid_column-3">
                        <a href="#" className="photos_link">
                            <div className="wrap_img">
                            <img
                                className="second_content-img"
                                src="./assets/images/photo6.jpg"
                                alt="Photos"
                            />
                            <div className="second_content-overlay2" />
                            <div className="second_content-text">
                                <span />
                                <span />
                                <span />
                                <span />
                                <h2>Image overlay text</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="second_content-btn">
                    <button className="second_content-view">View More Photos</button>
                </div>
                </div>
            </div>
            {/* my services */}
            <div className="grid grid_mobile">
                <div id="services" className="my_services">
                <div className="grid_row">
                    <div
                    className="first_content-heading heading_style"
                    style={{ color: "var(--text-color)" }}
                    >
                    My Services
                    </div>
                    <div className="grid_column-3">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fas fa-code" />
                        <h3 className="my_services-item-label">WEB DEVELOPMENT</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fab fa-html5" />
                        <h3 className="my_services-item-label">WEB DESIGN</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fas fa-paint-brush" />
                        <h3 className="my_services-item-label">GRAPHIC DESIGN</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fas fa-mobile-alt" />
                        <h3 className="my_services-item-label">RESPONSIVE DESIGN</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3 service_mobile">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fas fa-poll" />
                        <h3 className="my_services-item-label">MEDIA MAKETING</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3 service_mobile">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fab fa-intercom" />
                        <h3 className="my_services-item-label">EASY TO CUSTOMIZE</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3 service_mobile">
                    <div className="my_services-item">
                        <i className="my_services-item-logo fas fa-palette" />
                        <h3 className="my_services-item-label">UNLIMITED COLOR</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3 service_mobile">
                    <div className="my_services-item">
                        <i className="my_services-item-logo far fa-file-code" />
                        <h3 className="my_services-item-label">UNIQUE DESIGN</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <div className="grid_column-3 service_mobile">
                    <div className="my_services-item">
                        <i className="my_services-item-logo far fa-handshake" />
                        <h3 className="my_services-item-label">LIFE TIME SUPORT</h3>
                        <span className="my_services-item-content">
                        There are many variations of passages of but the majority have
                        suffered alterration
                        </span>
                    </div>
                    </div>
                    <button className="btn service_mobile-btn">View More Mervice</button>
                </div>
                </div>
            </div>
            {/* Myblogs */}
            <div id="blogs" className="my_blogs">
                <div className="grid">
                <div className="grid_row">
                    <h1 className="first_content-heading heading_style">My Blogs</h1>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog1.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Bằng Lăng Tím - NHA | Lyrics Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Apr 1, 2021</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">5,092 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a
                            href="https://www.youtube.com/watch?v=Wjx3sj6Rdhk&ab_channel=MeanZMusic"
                            className="my_blogs-item-more"
                            >
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog2.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Đường Về Nhà | Zephyr | Lyrics Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Feb 4, 2021</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">141 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a
                            href="https://www.youtube.com/watch?v=AZWbnJDfwUc&ab_channel=MeanZMusic"
                            className="my_blogs-item-more"
                            >
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog3.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Chim sẻ Dâu tây | Wowy x Dế Choắt | Lyrics Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Nov 15, 2020</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">90,939 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a
                            href="https://www.youtube.com/watch?v=OYXiQNlK57s&ab_channel=MeanZMusic"
                            className="my_blogs-item-more"
                            >
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog4.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Những Gì Anh Nói - BOZITT | Lyrics Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Aug 16, 2020</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">273 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a
                            href="https://www.youtube.com/watch?v=k_2MJw9EVl8&ab_channel=MeanZMusic"
                            className="my_blogs-item-more"
                            >
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog5.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Bật Nhạc Lên | HIEUTHUHAI ft ft. Harmonie | Lyric Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Aug 5, 2020</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">695 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a href="" className="my_blogs-item-more">
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-3">
                    <div className="my_blogs-item">
                        <div className="my_blogs-item-wrap-img">
                        <img
                            className="my_blogs-item-img"
                            src="./assets/images/blog6.jpg"
                            alt="Blog picture"
                        />
                        </div>
                        <div className="my_blogs-item-body">
                        <h3 className="my_blogs-item-label">
                            Mãi mãi không phải anh | Thanh Bình | Lyrics Video
                        </h3>
                        <div className="my_blogs-item-status">
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon fas fa-calendar-alt" />
                            <span className="my_blogs-item-detail">Jul 10, 2020</span>
                            </div>
                            <div className="my_blogs-item-item">
                            <i className="my_blogs-item-icon far fa-eye" />
                            <span className="my_blogs-item-detail">47,780 views</span>
                            </div>
                        </div>
                        <span className="my_blogs-item-dsc">
                            There are many variations of passages of Lorem Ipsum avaiable,
                            but the majority have suffered alteration in some form.
                        </span>
                        <div className="my_blogs-item-footer">
                            <a
                            href="https://www.youtube.com/watch?v=vzVh0a96DmM&ab_channel=MeanZMusic"
                            className="my_blogs-item-more"
                            >
                            READ MORE &gt;&gt;
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* contact */}
            <div id="contact" className="contact_me ">
                <div className="grid ">
                <div className="grid_row">
                    <h1
                    className="first_content-heading heading_style"
                    style={{ color: "var(--text-color)" }}
                    >
                    Contact Me
                    </h1>
                    {/* contact header */}
                    <div className="grid_column-2 grid_full">
                    <div className="contact_heading">
                        <div className="contact_heading-item">
                        <i className="contact_heading-item-icon fas fa-map-marker-alt" />
                        <div className="contact_heading-item-content">
                            <h3 className="contact_heading-item-heading">My address</h3>
                            <span className="contact_heading-item-detail">
                            97 Le Loi, Kien Tuong, Long An
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-2 grid_full">
                    <div className="contact_heading">
                        <div className="contact_heading-item">
                        <i className="contact_heading-item-icon fas fa-phone" />
                        <div className="contact_heading-item-content">
                            <h3 className="contact_heading-item-heading">Call me</h3>
                            <span className="contact_heading-item-detail">
                            +84 85 378 35 78
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-2 grid_full">
                    <div className="contact_heading">
                        <div className="contact_heading-item">
                        <i className="contact_heading-item-icon fas fa-envelope" />
                        <div className="contact_heading-item-content">
                            <h3 className="contact_heading-item-heading">email me</h3>
                            <span className="contact_heading-item-detail">
                            nghia12a319@gmail.com
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid_column-2 grid_full">
                    <div className="contact_heading">
                        <div className="contact_heading-item">
                        <i className="contact_heading-item-icon fas fa-share-alt" />
                        <div className="contact_heading-item-content">
                            <h3 className="contact_heading-item-heading">social media</h3>
                            <span className="contact_heading-item-detail">
                            <a className="social-link" href="https://www.facebook.com/tsmnonames/">
                                <i className="fab fa-facebook-square" />
                            </a>
                            <a className="social-link" href="https://www.instagram.com/big_meanz">
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="social-link" href="https://www.youtube.com/channel/UCDjlavMuBissUQsDBAtrpZA">
                                <i className="fab fa-youtube-square" />
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* contact form */}
                    <span className="contact_form-text">
                    Feel free to get in touch with me. I am always open to discussing new
                    projects, creative odeas or opportunities to be part of your visions.
                    </span>
                    <div className="grid_column-2 grid_full">
                        <input
                            placeholder="Name"
                            type="text"
                            className="contact_form-input"
                        />
                    </div>
                    <div className="grid_column-2 grid_full">
                        <input
                            placeholder="Email"
                            type="email"
                            className="contact_form-input"
                        />
                    </div>
                    <div className="grid_column-2 grid_full">
                        <input
                            placeholder="Phone Number"
                            type="number"
                            className="contact_form-input"
                        />
                    </div>
                    <div className="grid_column-2 grid_full">
                        <input
                            placeholder="Subject"
                            type="text"
                            className="contact_form-input"
                        />
                    </div>
                    <textarea
                    placeholder="Type your messsage here..."
                    rows={4}
                    type="text"
                    className="contact_form-input-full-size"
                    defaultValue={""}
                    />
                    <button className="contact_form-btn">Send Message</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;