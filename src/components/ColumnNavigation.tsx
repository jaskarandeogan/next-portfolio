import classNames from 'classnames';
import React, { Dispatch, SetStateAction, use, useEffect, useState } from 'react';

interface NavigationItem {
  label: string;
  url: string;
  active?: boolean;
}

const ColumnNavigation = (
  {
    activeItem = 'About',
    setActiveItem = () => { },
  }: {
    activeItem: string; setActiveItem: Dispatch<SetStateAction<string>>;
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
  }


  return (
    <nav className="flex flex-col gap-4">
      {navigationItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className={item.active ? classNames('group', 'flex', 'text-xl', 'font-medium', 'text-primary-0', 'gap-3') : classNames('text-xl', 'font-medium', 'flex', 'gap-3', 'hover:text-grey-8', 'transition-all')}
          onClick={() =>
            handleSelection(item.label)}
        >
          <hr className={classNames("group-hover:border-grey-0 border-2 border-t  my-4 transition-all", item.active && 'w-[100px] border-primary-0 transition-all', !item.active && 'border-grey-5 w-[60px] transition-all',)} />
          <span className={'group-hover:border-text-grey-0'}>
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default ColumnNavigation;