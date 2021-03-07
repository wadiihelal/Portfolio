import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div>
            <div >
                <img src={about} alt=""/>
            </div>
            <div>
                <h4>I am<span> Wadii HELAL</span></h4>
                <p>
                   description technical of my profile
                </p>
                <div >
                    <div>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div >
                        <p>:Wadii HELAL</p>
                        <p>: @#</p>
                        <p>: TUNISIAN</p>
                        <p>: Arab, French, English</p>
                        <p>: Ghomrassen , Tataouine</p>
                        <p>: Tunisia, Algerie, French</p>
                    </div>
                </div>
                <button >Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
