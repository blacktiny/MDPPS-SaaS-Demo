import React, { useCallback } from 'react';
import { Row, Col, Icon, Divider } from 'rsuite';
import { components } from 'react-select';
import {
  MDPPSSelect,
  SelectCustomPickerItem,
} from '../../../common/components';
import {
  TeamMemberSelectData,
  DesignationSelectData,
} from '../../../common/utils/constants';

export const ValueContainer = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      <div className="mdpps-select-search-icon">
        <Icon icon="search" />
      </div>
      <div style={{ display: 'flex', width: 'calc(100% - 60px)' }}>
        {children}
      </div>
    </components.ValueContainer>
  );
};

const MenuList = props => {
  return (
    <components.MenuList {...props}>
      {props.children}
      <Divider />
      <div className="Select-custom-menu-item add-btn" onClick={() => {}}>
        <Icon icon="plus-circle" />
        <p>Add new</p>
      </div>
    </components.MenuList>
  );
};

function CompanyOfficialListItem(props) {
  const {
    data: { id, member, designation },
    hasRemoveBtn,
    onChanged,
  } = props;

  // handler for team member update event
  const handlerTeamMemberChange = useCallback(
    newMember => {
      onChanged({ id, member: newMember, designation });
    },
    [onChanged, id, designation]
  );

  // handler for designation update event
  const handlerDesignationChange = useCallback(
    newDesignation => {
      onChanged({ id, member, designation: newDesignation });
    },
    [id, member, onChanged]
  );

  return (
    <Row className="Official-list-item">
      <Col xs={24} md={16}>
        <MDPPSSelect
          options={TeamMemberSelectData}
          value={member}
          onChanged={(value, _event) => handlerTeamMemberChange(value)}
          components={{ ValueContainer, MenuList }}
        />
      </Col>
      <Col xs={24} md={7} mdPush={1}>
        <SelectCustomPickerItem
          data={DesignationSelectData}
          value={designation.value}
          onChanged={item => handlerDesignationChange(item)}
        />
      </Col>
      {hasRemoveBtn && (
        <div
          className="Official-list-item-remove-btn"
          onClick={() => onChanged({ id })}
        >
          <Icon icon="close" />
        </div>
      )}
    </Row>
  );
}

export default CompanyOfficialListItem;
