import React from "react";
import classes from './component-2.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Component2 = (props) => {

    return (
        <div className={classes.component2}>

            <div className={classes.paint}>
                <a href="https://allo.ua/" >
                    <img width={152} height={76} src="https://i.allo.ua/media/theme/default/logo_Allo_slogan_white_80x40_2_3.svg"/>
                </a>

                <line className={classes.header}>
                    <a href="https://allo.ua/ua/smart-live/"><img src="https://i.allo.ua/media/infoblockitem/Smart_11.png"/>
                    Живи Смарт</a>
                </line>

                <line className={classes.header}>
                    <a href="https://allo.ua/ua/loyalty/account/info/" ><img src="https://i.allo.ua/media/infoblockitem/Loyalty_11.png"/>
                    Алло-Гроші</a>
                </line>

                <line className={classes.header}>
                    <a href="https://allo.ua/ua/promo/tradein/"><img src="https://i.allo.ua/media/infoblockitem/upgrade_new.png"/>
                    Алло-Апгрейд</a>
                </line>

                <line className={classes.header}>
                    <a href="https://allo.ua/ua/tradein/" ><img src="https://i.allo.ua/media/infoblockitem/Allo-tradein_11.png"/>
                        Алло Обмін</a>
                </line>

                <line className={classes.header}>
                    <a href="https://outlet.allo.ua/ua/" className="allo-programs__link"><img src="https://i.allo.ua/media/infoblockitem/Markdown_11.png"/>
                        Уцінка</a>
                </line>

                <line className={classes.header}>
                    <a href="https://allo.ua/ua/events-and-discounts/">
                        <img src="https://i.allo.ua/media/infoblockitem/Discounts_11.png"/>Акції</a>
                </line>


            </div>
        </div>
    )
}

export default Component2;