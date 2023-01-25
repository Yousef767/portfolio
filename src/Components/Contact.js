import React, { Component } from "react";
import img from '../Media/writingHand.png'
import { Link } from "react-router-dom";
class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="form">
                    <h1>GET IN TOUCH</h1>
                    <p>Fill out the form and i will get back to you ASAP.</p>
                    <form>
                        <div className="field">
                            <label>full name :</label>
                            <div className="input-inner">
                                <input type={'text'} placeholder='ex: Yousef Ahmed'></input>
                                <i class="fa-solid fa-user"></i>
                                <span></span>
                            </div>
                        </div>
                        <div className="field">
                            <label>email :</label>
                            <div className="input-inner">
                                <input type={'text'} placeholder='ex: example@gmail.com'></input>
                                <i class="fa-solid fa-envelope"></i>
                                <span></span>
                            </div>
                        </div>
                        <div className="field">
                            <label>message :</label>
                            <div className="input-inner">
                                <textarea placeholder="ex: Let's Work Together"></textarea>
                                <i class="fa-solid fa-paper-plane mi"></i>
                                <span></span>
                            </div>
                        </div>
                        <div className="submit">
                            <input type={'submit'} value='SEND'></input>
                        </div>
                    </form>
                </div>
                <div className="card">
                    <h1>CONTACT INFO</h1>
                    <span>Let's level up your brand together.</span>
                    <div className="con-info">
                        <span><i class="fa-solid fa-phone"></i> +201006770769</span>
                        <span><i class="fa-solid fa-envelope"></i> floky4444@gmail.com</span>
                    </div>
                    <div className="con-info2">
                        <a href="##">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="##">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="##">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <img className="cimg" src={img} alt=''></img>
                    <span className="bub"></span>
                    <Link to='/' className="exit">
                        <i class="fa-solid fa-x"></i>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Contact