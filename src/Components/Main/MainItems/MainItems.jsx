import React from 'react';
import './MainItems.css';
const MainItems = (props) => {
    const {ccy, baseCcy, buy, sale} = props;
    return (
            <tbody>
                <tr className="item">
                    <td className="item-list"><span className="color-text">CCY :</span> {ccy}</td>
                    <td className="item-list"><span className="color-text">BASE-CYY :</span> {baseCcy}</td>
                    <td className="item-list"><span className="color-text">BUY :</span> {buy}</td>
                    <td className="item-list"><span className="color-text">SALE :</span> {sale}</td>
                </tr>


            </tbody>
    );
};

export default MainItems;
