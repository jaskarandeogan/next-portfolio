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
    { label: 'About', url: '#', active: true },
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
      {/* {console.log(navigationItems)} */}
      {navigationItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className={item.active ? classNames('flex', 'text-xl', 'font-medium', 'text-primary-0', 'gap-3') : classNames('text-xl', 'font-medium', 'flex', 'gap-3')}
          onClick={() =>
            handleSelection(item.label)}
        >
          <hr className={classNames("border-2 border-t  my-4 transition-all", item.active && 'w-[100px] border-primary-0 transition-all', !item.active && 'border-grey-5 w-[60px] transition-all')} />{item.label}
        </a>
      ))}
    </nav>
  );
};

export default ColumnNavigation;