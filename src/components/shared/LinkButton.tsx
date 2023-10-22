import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface LinkButtonProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    children: string;
    classnames?: string;
    onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ leftIcon, rightIcon, children, classnames,
    onClick
}) => {
    return (
        <button className={classNames("group font-medium py-2 px-4 rounded flex items-center",
            'text-primary-0', 'transition-all', classnames
        )}
            onClick={onClick}
        >
            {leftIcon && <span className="mr-3 font-bold group-hover:-translate-y-1 transition-all">{leftIcon}</span>}
            {children && children}
            {rightIcon && <span className="ml-3 font-bold group-hover:-translate-y-1 transition-all">{rightIcon}</span>}
        </button>
    );
};

export default LinkButton;