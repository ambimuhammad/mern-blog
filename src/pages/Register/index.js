import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

function Register() {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={15} />
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={15} />
                <Input label="Email" placeholder="Email" />
                <Gap height={15} />
                <Input
                    label="Password"
                    placeholder="Password"
                    type="password"
                />
                <Gap height={20} />
                <Button title="Register" />
                <Link title="Kembali Ke Login" />
            </div>
        </div>
    );
}

export default Register;
