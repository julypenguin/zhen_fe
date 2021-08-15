import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import zhenBlack from '../../img/zhenBlack.png'
import data from './nav.json'

const NavIcon = ({
    imageSrc,
    className,
    push,
}) => {
    return (
        <div 
            className="flex-shrink-0 flex items-center select-none cursor-pointer"
            onClick={() => push('/')}
        >
            <img className={className ? className : "block  h-11 lg:mr-2"} src={imageSrc || zhenBlack} />
            <div className='hidden md:flex lg:flex h-8 sm:hidden w-auto font-bold text-2xl items-center'>
                <FormattedMessage id={`nav.${data.navTitle.name_intl}`} />
            </div>
        </div>
    );
};

export default NavIcon;