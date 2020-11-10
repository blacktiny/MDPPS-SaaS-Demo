import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SidebarItem(props) {
  const { item: {
    name, pathname, Icon
  }, isActive } = props;

  return (
    <SidebarItemContainer className={'row Sidebar_item ' + (isActive ? 'active' : '')} to={pathname}>
      <Icon />
      <ItemName>{name}</ItemName>
    </SidebarItemContainer>
  );
}

export default SidebarItem;

const ItemName = styled.div`
  color: #555555;
  font-size: 14px;
  padding-left: 25px;
  text-decoration: none !important;
`;

const SidebarItemContainer = styled(Link)`
  width: 100%;
  height: 50px;
  padding: 15px 0 15px 26px;
  border-left: 4px solid #ffffff;
  box-sizing: border-box;
  text-decoration: none !important;

  svg {
    path {
      fill: #b6d0fd;
    }
  }

  &.active {
    background: #f5f8fa;
    border-left: 4px solid #3be051;

    svg {
      path {
        fill: #4284fc;
      }
    }

    ${ItemName} {
      color: #000000;
    }
  }

  &:hover {
    background: #f5f8fa;

    svg {
      path {
        fill: #4284fc;
      }
    }
  }
`;
