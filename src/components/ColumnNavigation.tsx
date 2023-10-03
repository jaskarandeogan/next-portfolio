import classNames from 'classnames';
import React, { useState } from 'react';

interface NavigationItem {
  label: string;
  url: string;
}

const ColumnNavigation: React.FC = () => {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([
    { label: 'About', url: '#' },
    { label: 'Experience', url: '#experience' },
    { label: 'Projects', url: '#projects' },
    { label: 'Blogs', url: '#blogs'}
  ]);
  const [activeItem, setActiveItem] = useState<NavigationItem | null>({ label: 'About', url: '#' },);

  const handleItemClick = (item: NavigationItem) => {
    setActiveItem(item);
  };

  return (
    <nav className="
    flex flex-col gap-4">
      {navigationItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className={item === activeItem ? classNames('flex', 'text-xl', 'font-medium', 'text-primary-0', 'gap-3') : classNames('text-xl','font-medium', 'flex', 'gap-3')}
          onClick={() => handleItemClick(item)}
        >
          <hr className={classNames("border-2 border-t  my-4 w-[60px]", item === activeItem && 'w-[100px] border-primary-0', item !== activeItem && 'border-grey-5')}/>{item.label}
        </a>
      ))}
    </nav>
  );
};

export default ColumnNavigation;