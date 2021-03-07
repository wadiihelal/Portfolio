import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div >
            <header >
                <h1>
                    Hi, I am 
                    <span> Wadii HELAL.</span>
                </h1>
                <p >
                  simple description
                </p>
                <div>
                    <Link >
                        <FontAwesomeIcon icon={faFacebook}  />
                    </Link>
                    <Link >
                        <FontAwesomeIcon icon={faGithub}  />
                    </Link>
                    <Link >
                        <FontAwesomeIcon icon={faYoutube}/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
