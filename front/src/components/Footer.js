import React from 'react';
import "./css/footer.css"
import iconf from "./assets/iconf.png"
import iconi from "./assets/iconi.png"
import icont from "./assets/icont.png"
import icontw from "./assets/icontw.png"
import icony from "./assets/icony.png"

export default () => (
    <div className="container-fluid" id="footer"> 
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <div id="primerfila" className="container">
                    <span><img className="red" src={iconf}/></span>
                    <span><img className="red" src={iconi}/></span>
                    <span><img className="red" src={icont}/></span>
                    <span><img className="red" src={icontw}/></span>
                    <span><img className="red" src={icony}/></span>
                </div>
            </div>
            <div className="col-4"></div>
        </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="container">
                    <span className="primero">Get the OMDb App</span>
                    <span>Help</span>
                    <span>Site Index</span>
                    <span>OMDbPro</span>
                    <span>Box Office Mojo</span>
                    <span>OMDb Developer</span>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="container">
                    <span>Press Room</span>
                    <span>Advertising</span>
                    <span>Jobs</span>
                    <span>Conditions of Use</span>
                    <span>Privacy Policy</span>
                    <span>Interest Ads</span>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-3 company">
            <span><strong>A BautiGonzalez company</strong></span>
            </div>
            <div className="col-4"></div>
        </div>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
            <h6>© 2020 Plataforma5</h6>
            </div>
            <div className="col-5"></div>
        </div>
    </div>
);