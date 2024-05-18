import classNames from 'classnames';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface NavigationItem {
  label: string;
  url: string;
  active?: boolean;
}

const ColumnNavigation = (
  {
    activeItem = 'About',
    setActiveItem = () => { },
    setIsNavigated = () => { },
  }: {
    activeItem: string; setActiveItem: Dispatch<SetStateAction<string>>;
    setIsNavigated: Dispatch<SetStateAction<boolean>>;
  }
) => {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([
    { label: 'About', url: '#about', active: true },
    { label: 'Experience', url: '#experience', active: false },
    { label: 'Projects', url: '#projects', active: false },
    { label: 'Blogs', url: '#blogs', active: false }
  ]);

  useEffect(() => {
    setNavigationItems(prevNavigationItems => prevNavigationItems.map((item) => ({ ...item, active: item.label === activeItem })));

  }, [activeItem]);

  const handleSelection = (label: string) => {
    setActiveItem(label);
    setIsNavigated(true);
  }


  return (
    <nav className="flex flex-col gap-4">
      {navigationItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className={item.active ? classNames( 'flex', 'text-xl', 'font-medium', 'text-primary-0', 'gap-3') : classNames('group','text-base', 'font-medium', 'flex', 'gap-3', 'transition-all')}
          onClick={() =>
            handleSelection(item.label)}
        >
          <hr className={classNames("group-hover:border-grey-8 border-2 border-t  my-4 transition-all", item.active && 'w-[100px] border-primary-0 transition-all', !item.active && 'border-grey-5 w-[60px] transition-all',)} />
          <span className={'group-hover:text-grey-8 uppercase text-base'}>
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default ColumnNavigation;