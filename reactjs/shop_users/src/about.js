import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                {/* about-section */}
                <section className="about footer-padding">
                    <div className="container">
                        <div className="about-section">
                            <div className="row align-items-center gy-5">
                                <div className="col-lg-6">
                                    <div className="about-img" data-aos="fade-right">
                                        <img src="theme/assets/images/homepage-one/about/about-img-1.webp" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content" data-aos="fade-up">
                                        <h3 className="about-title">Know More About Us?</h3>
                                        <p className="about-info">
                                            It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. It is a long established fact a
                                            that a reader will be distracted by the readable content of a page when our
                                            looking at its layout.
                                        </p>
                                        <div className="about-list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12.5" cy="12.5" r="12.5" fill="#AE1C9A" />
                                                            <path d="M10.1691 13.2566C10.5172 12.8649 10.8498 12.4803 11.198 12.1029C12.7761 10.3864 14.4973 8.80535 16.4699 7.47353C16.6749 7.33465 16.8876 7.20289 17.1042 7.0747C17.1739 7.03552 17.2628 7.00347 17.344 7.00347C17.7888 6.99635 18.2337 6.99991 18.6746 6.99991C18.8138 6.99991 18.926 7.04265 18.9763 7.16728C19.0266 7.28836 18.9879 7.39163 18.8835 7.48065C17.0772 8.99765 15.588 10.7639 14.1724 12.5872C12.8689 14.2644 11.6621 16.0022 10.5288 17.7863C10.4901 17.8504 10.4398 17.918 10.3741 17.9572C10.2348 18.0462 10.0763 17.9964 9.97183 17.8432C9.79777 17.5868 9.63532 17.3233 9.44966 17.074C8.36278 15.6318 7.26817 14.1896 6.17742 12.751C6.13488 12.6976 6.08846 12.6441 6.04978 12.5872C5.97243 12.4732 5.97629 12.3486 6.07686 12.256C6.36695 11.9853 6.66478 11.7147 6.96261 11.4476C7.07864 11.3444 7.20242 11.3515 7.35713 11.4476C7.83675 11.7539 8.31637 12.0637 8.79212 12.3699C9.24853 12.6655 9.70495 12.9575 10.1691 13.2566Z" fill="white" />
                                                        </svg>
                                                    </span>
                                                    <p>Complete Sanitization and cleaning of bathroom</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12.5" cy="12.5" r="12.5" fill="#AE1C9A" />
                                                            <path d="M10.1691 13.2566C10.5172 12.8649 10.8498 12.4803 11.198 12.1029C12.7761 10.3864 14.4973 8.80535 16.4699 7.47353C16.6749 7.33465 16.8876 7.20289 17.1042 7.0747C17.1739 7.03552 17.2628 7.00347 17.344 7.00347C17.7888 6.99635 18.2337 6.99991 18.6746 6.99991C18.8138 6.99991 18.926 7.04265 18.9763 7.16728C19.0266 7.28836 18.9879 7.39163 18.8835 7.48065C17.0772 8.99765 15.588 10.7639 14.1724 12.5872C12.8689 14.2644 11.6621 16.0022 10.5288 17.7863C10.4901 17.8504 10.4398 17.918 10.3741 17.9572C10.2348 18.0462 10.0763 17.9964 9.97183 17.8432C9.79777 17.5868 9.63532 17.3233 9.44966 17.074C8.36278 15.6318 7.26817 14.1896 6.17742 12.751C6.13488 12.6976 6.08846 12.6441 6.04978 12.5872C5.97243 12.4732 5.97629 12.3486 6.07686 12.256C6.36695 11.9853 6.66478 11.7147 6.96261 11.4476C7.07864 11.3444 7.20242 11.3515 7.35713 11.4476C7.83675 11.7539 8.31637 12.0637 8.79212 12.3699C9.24853 12.6655 9.70495 12.9575 10.1691 13.2566Z" fill="white" />
                                                        </svg>
                                                    </span>
                                                    <p>when looking at its layout. It is a long established fact </p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12.5" cy="12.5" r="12.5" fill="#AE1C9A" />
                                                            <path d="M10.1691 13.2566C10.5172 12.8649 10.8498 12.4803 11.198 12.1029C12.7761 10.3864 14.4973 8.80535 16.4699 7.47353C16.6749 7.33465 16.8876 7.20289 17.1042 7.0747C17.1739 7.03552 17.2628 7.00347 17.344 7.00347C17.7888 6.99635 18.2337 6.99991 18.6746 6.99991C18.8138 6.99991 18.926 7.04265 18.9763 7.16728C19.0266 7.28836 18.9879 7.39163 18.8835 7.48065C17.0772 8.99765 15.588 10.7639 14.1724 12.5872C12.8689 14.2644 11.6621 16.0022 10.5288 17.7863C10.4901 17.8504 10.4398 17.918 10.3741 17.9572C10.2348 18.0462 10.0763 17.9964 9.97183 17.8432C9.79777 17.5868 9.63532 17.3233 9.44966 17.074C8.36278 15.6318 7.26817 14.1896 6.17742 12.751C6.13488 12.6976 6.08846 12.6441 6.04978 12.5872C5.97243 12.4732 5.97629 12.3486 6.07686 12.256C6.36695 11.9853 6.66478 11.7147 6.96261 11.4476C7.07864 11.3444 7.20242 11.3515 7.35713 11.4476C7.83675 11.7539 8.31637 12.0637 8.79212 12.3699C9.24853 12.6655 9.70495 12.9575 10.1691 13.2566Z" fill="white" />
                                                        </svg>
                                                    </span>
                                                    <p>Complete Sanitization and cleaning of bathroom</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/contact" className="shop-btn">
                                            Contact us
                                            <span>
                                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.45312" y="0.914062" width="9.25346" height="2.05632" transform="rotate(45 1.45312 0.914062)" fill="white" />
                                                    <rect x="8" y="7.45703" width="9.25346" height="2.05632" transform="rotate(135 8 7.45703)" fill="white" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* services section */}
                <section className="about-service product ">
                    <div className="container">
                        <div className="about-service-section">
                            <div className="about-wrapper">
                                <div className="wrapper-img">
                                    <span>
                                        <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="52" cy="52" r="52" fill="#AE1C9A" />
                                            <path d="M33.2764 39.0627C33.2764 39.3893 33.2764 39.6479 33.2764 39.9064C33.2764 47.772 33.2764 55.6376 33.2764 63.5033C33.2764 64.7008 33.3443 64.7688 34.5392 64.7824C37.4858 64.7824 40.446 64.7824 43.3926 64.7824C43.6778 64.7824 43.9901 64.8097 44.2345 64.9321C44.3703 65.0002 44.4789 65.3132 44.4518 65.4765C44.411 65.667 44.2209 65.9119 44.0308 65.98C43.8 66.0752 43.5148 66.048 43.2432 66.0616C40.2966 66.0616 37.3365 66.0616 34.3899 66.0616C32.6925 66.0616 32 65.3812 32 63.7074C32 53.923 32 44.1386 32 34.3542C32 32.6532 32.6654 32 34.3763 32C46.4207 32 58.4787 32 70.5231 32C72.2068 32 72.8722 32.6668 72.8722 34.3815C72.8722 44.1386 72.8722 53.8958 72.8722 63.6529C72.8722 65.3812 72.2068 66.048 70.4416 66.048C68.8936 66.048 67.3592 66.0616 65.8112 66.048C65.1594 66.0344 64.7521 65.6262 65.0236 65.2043C65.173 64.973 65.5668 64.796 65.852 64.796C67.4407 64.7552 69.043 64.7688 70.6453 64.7824C71.3106 64.7824 71.6094 64.5239 71.5958 63.8299C71.5822 55.6921 71.5822 47.5679 71.5822 39.4301C71.5822 39.3213 71.5686 39.226 71.5551 39.0491C58.8181 39.0627 46.0948 39.0627 33.2764 39.0627ZM33.2764 37.6475C46.1084 37.6475 58.8181 37.6475 71.5822 37.6475C71.5822 36.5724 71.5822 35.5654 71.5822 34.5448C71.5822 33.32 71.5415 33.2792 70.3194 33.2792C58.3836 33.2792 46.4478 33.2792 34.5121 33.2792C34.3491 33.2792 34.1998 33.2792 34.0368 33.2792C33.5616 33.2792 33.2764 33.4969 33.2764 34.0004C33.2764 35.198 33.2764 36.3955 33.2764 37.6475Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="wrapper-content">
                                    <h4 className="heading">Customer Support</h4>
                                    <p>Experience hassle-free online shopping with our service! enjoy fast delivery right to your doorstep.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* promotion section */}
                <div className="about-promotion">
                    <a href="theme/assets/images/homepage-one/about/advertrisement-vedio.mp4" target="_blank" rel="noreferrer" className="about-btn">
                        <span>
                            <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.19276 0.628906C6.04182 0.925379 6.95574 1.10689 7.72983 1.53849C15.5883 5.91299 23.4346 10.3097 31.2626 14.7386C34.8453 16.7655 34.8595 21.3861 31.2829 23.413C23.4569 27.846 15.6126 32.2467 7.75617 36.6252C4.10052 38.6622 0.0780744 36.3267 0.0618631 32.1478C0.0294404 23.4452 0.0395725 14.7426 0.0578102 6.04005C0.0659159 2.98657 2.26255 0.751933 5.19276 0.628906Z" fill="#AE1C9A" />
                            </svg>
                        </span>
                    </a>
                    <video src="theme/assets/images/homepage-one/about/advertrisement-vedio.mp4" autoPlay loop muted></video>
                </div>

                {/* feedback section */}
                <section className="about-feedback product">
                    <div className="container p-0">
                        <div className="position-relative px-5">
                            <div className="swiper about-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide testimonial-wrapper">
                                        <div className="blockquote">
                                            <span>
                                                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.82644 11.9446C8.29006 9.03034 11.9328 5.91742 14.7808 5.85119C14.9795 5.85119 15.1782 5.78496 15.3107 5.65249C15.4431 5.58626 15.5756 5.52003 15.6418 5.32133C16.6353 3.46683 16.1055 2.00972 14.4497 0.817536C12.5289 -0.573341 9.48225 0.817536 7.9589 2.07595C4.11743 5.2551 0.20973 10.7523 0.408427 15.9847C-0.253896 19.4951 -0.121431 23.2703 0.872052 26.3832C1.53437 28.3702 3.45511 29.3636 5.44208 29.4961C7.42905 29.6287 11.5354 30.2247 13.3237 29.0326C15.112 27.8403 15.2445 25.5222 15.4431 23.5353C15.6418 21.3496 16.2379 17.2431 14.3834 15.5211C12.5289 13.8653 7.23035 15.6536 7.82644 11.9446Z" fill="#f6f6f6" />
                                                    <path d="M29.683 11.9446C30.1466 9.03034 33.7893 5.91742 36.6374 5.85119C36.8361 5.85119 37.0348 5.78496 37.1673 5.65249C37.2998 5.58626 37.4322 5.52003 37.4985 5.32133C38.492 3.46683 37.9622 2.00972 36.3064 0.817536C34.3856 -0.573341 31.3389 0.817536 29.8155 2.07595C25.974 5.2551 22.0663 10.7524 22.265 15.9847C21.6027 19.4951 21.7351 23.2703 22.7285 26.3832C23.3908 28.3702 25.3116 29.3636 27.2987 29.4961C29.2856 29.6287 33.392 30.2247 35.1803 29.0326C36.9685 27.8403 37.101 25.5222 37.2997 23.5353C37.4984 21.3496 38.0945 17.2431 36.24 15.5211C34.3855 13.8653 29.0207 15.6536 29.683 11.9446Z" fill="#f6f6f6" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="testimonial-details">enean ullamcorper at magna et in to
                                            <span className="testimonial-inner-text"> the a iaculis. Mauris mattis ac diam</span> a ultricies. Sed pretium.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
