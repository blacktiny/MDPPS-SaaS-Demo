import React, { useCallback, useMemo } from 'react';
import { Container, Header, Content, Footer } from 'rsuite';
import SocialAccountListItem from './SocialAccountListItem';
import AddSocialBtnImgURL from '../../../assets/images/add_social_btn.png';

function SocialAccountList(props) {
  const { data, onChanged } = props;

  const openedSocials = useMemo(() => {
    return data.filter(item => item.isOpened === true)
  }, [data])

  const unOpenedSocials = useMemo(() => {
    return data.filter(item => item.isOpened === false)
  }, [data])

  // handler for social accounts info update event
  const handlerSocialAccountChange = useCallback((oldType, newType, url, isRemoved = false) => {
    if (isRemoved) { // remove social account
      const indexOfOldSocial = data.findIndex(social => social.value === oldType)
      data[indexOfOldSocial].isOpened = false
      const indexOfFirstUnOpenedSocial = unOpenedSocials.length > 0 ? data.findIndex(social => social.value === unOpenedSocials[0].value) : data.length
      data.splice(indexOfFirstUnOpenedSocial, 0, data[indexOfOldSocial])
      data.splice(indexOfOldSocial, 1)
    } else if (oldType === newType) { // update accountURL
      const indexOfOldSocial = data.findIndex(social => social.value === newType)
      data[indexOfOldSocial].url = url
    } else { // switch other social type
      // new
      const indexOfNewSocial = data.findIndex(social => social.value === newType)
      data[indexOfNewSocial].isOpened = true
      // old
      const indexOfOldSocial = data.findIndex(social => social.value === oldType)
      data[indexOfOldSocial].isOpened = false
      // replace
      const tmpSocial = data[indexOfNewSocial]
      data[indexOfNewSocial] = data[indexOfOldSocial]
      data[indexOfOldSocial] = tmpSocial
    }
    onChanged(JSON.parse(JSON.stringify(data)))
  }, [data, onChanged])

  // handler for add new social event
  const handlerAddNewSocial = useCallback(() => {
    const indexOfNewSocial = data.findIndex(social => social.value === unOpenedSocials[0].value)
    data[indexOfNewSocial].isOpened = true
    onChanged(JSON.parse(JSON.stringify(data)))
  }, [unOpenedSocials, data])

  return (
    <Container className="Social-list">
      <Header className="Input-item-title">
        Social Media Accounts
      </Header>

      <Content>
        {openedSocials.map((social, index) => {
          return (
            <SocialAccountListItem
              key={index}
              data={social}
              unOpenedAccounts={unOpenedSocials}
              onChanged={handlerSocialAccountChange}
              onRemoved={oldType => handlerSocialAccountChange(oldType, null, null, true)}
              hasRemoveBtn={openedSocials.length > 1}
            />
          )
        })}
      </Content>

      <Footer>
        {Boolean(unOpenedSocials.length) && (
          <div className="Social-list-add-btn" onClick={handlerAddNewSocial}>
            <img src={AddSocialBtnImgURL} alt="add new social" />
          </div>
        )}
      </Footer>
    </Container>
  );
}

export default SocialAccountList;
