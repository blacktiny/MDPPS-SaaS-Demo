import React from 'react';
import SidebarItem from '../../common/components/SidebarItem';
import { SettingsItems } from '../../common/utils/constants';

function SettingsSidebar(props) {
  const { type } = props;

  return (
    <div className="Settings-sidebar">
      {SettingsItems.map((item, index) => {
        return (
          <SidebarItem key={index} item={item} isActive={item.id === type} />
        );
      })}
    </div>
  );
}

export default SettingsSidebar;
