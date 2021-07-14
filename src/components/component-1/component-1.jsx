import React from "react";
import classes from './component-1.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Component1 = (props) => {

    return (
        <div className={classes.component1}>
            <div className={classes.paint}>
                <line className={classes.header}>
                    <a href="https://blog.allo.ua/ua/">Блог</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/award-in-the-hello-with-fishka/">Fishka</a>
                </line>
                <line className={classes.header}>
                    <a href="https://work.allo.ua/">Вакансії</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/offline_stores/" className="info1_magaziny">Магазини</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/help/shipment_payment/" className="info1_dostavka">Доставка та оплата</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/help/credit/" className="info1_kredit">Кредит</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/warranty_and_service/" className="info1_garantija">Гарантія / Повернення</a>
                </line>
                <line className={classes.header}>
                    <a href="https://allo.ua/ua/contact-us/" className="info1_kontakty">Контакти</a>
                </line>
            </div>
        </div>
)
}

export default Component1;