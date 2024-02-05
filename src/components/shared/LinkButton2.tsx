import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface LinkButtonProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children: string;
    classnames?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const LinkButton2: React.FC<LinkButtonProps> = ({ leftIcon, rightIcon, children, classnames,
    onClick,
    type = 'button'
}) => {
    return (
        <button className={classNames("group font-medium py-2  rounded flex items-center",
            'transition-all', classnames ? classnames : 'px-4'
        )}
            onClick={onClick}
            type={type}
        >
            {leftIcon && <span className="mr-3 font-bold group-hover:-translate-y-1 transition-all">{leftIcon}</span>}
            {children && children}
            {rightIcon && <span className="ml-3 font-bold group-hover:-translate-y-1 transition-all">{rightIcon}</span>}
        </button>
    );
};

export default LinkButton2;