import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaLoader = () => {
    return  <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="132" cy="142" r="115" />
        <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
        <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
    // <ContentLoader
    //     speed={2}
    //     width={280}
    //     height={460}
    //     viewBox="0 0 280 460"
    //     backgroundColor="#f3f3f3"
    //     foregroundColor="#ecebeb"
    // >
    //     <rect x="0" y="292" rx="0" ry="0" width="280" height="26" />
    //     <rect x="0" y="329" rx="6" ry="6" width="280" height="84" />
    //     <rect x="8" y="460" rx="0" ry="0" width="88" height="40" />
    //     <rect x="0" y="428" rx="3" ry="3" width="113" height="30" />
    //     <rect x="140" y="425" rx="20" ry="20" width="141" height="36" />
    //     <circle cx="132" cy="132" r="132" />
    // </ContentLoader>
}