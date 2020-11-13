import React, { createRef, useEffect, useState } from 'react';
import Cropper from 'cropperjs';
import { Container, Header, Content, Footer } from 'rsuite';
import { ButtonItem, MDPPSModal } from '../../../common/components';
import 'cropperjs/dist/cropper.min.css';

function ImageCropper(props) {
  const { src, onImageDestinationChanged } = props;

  const imageEleRef = createRef()

  useEffect(() => {
    if (imageEleRef.current) {
      const cropper = new Cropper(imageEleRef.current, {
        zoomable: false,
        scalable: false,
        // aspectRatio: 1,
        crop: () => {
          const canvas = cropper.getCroppedCanvas();
          onImageDestinationChanged(canvas.toDataURL("image/png"))
        }
      });
    }
  }, [imageEleRef.current])

  return (
    <div className="image-cropper">
      <img ref={imageEleRef} src={src} crossOrigin />
    </div>
  )
}

function EditImageModal(props) {
  const { src, show, onClosed, type = 'cover' } = props;

  // eslint-disable-next-line no-unused-vars
  const [cropedImage, setCropedImage] = useState('')

  return (
    <MDPPSModal fullscreen show={show} onClosed={onClosed}>
      <Container className="page-container Edit-image">
        <Header className="Edit-image-header">
          <h1>{type === 'cover' ? 'Edit Cover Image' : (type === 'profile' ? 'Edit your profile image' : 'Edit your Logo')}</h1>
          <p className="Edit-image-header-description">
            To crop {type === 'logo' ? 'your logo' : 'the image'}, drag it to fit the fixed region and then click “Set {type === 'cover' ? 'Cover' : (type === 'profile' ? 'Photo' : 'Logo')}”
          </p>
        </Header>
        <Content className="Edit-image-content">
          <ImageCropper src={src} onImageDestinationChanged={setCropedImage} />
        </Content>
        <Footer className="Edit-image-footer">
          <div className="Edit-image-delete-btn">
            Delete Current {type === 'cover' ? 'Cover' : (type === 'logo' ? 'Logo' : 'Photo')}
          </div>
          <div className="btn-group">
            <ButtonItem
              className="Default-btn"
              appearance="default"
              title="Cancel"
              onClick={() => onClosed()}
            />
            <ButtonItem
              className="Save-btn"
              appearance="primary"
              title={type === 'cover' ? 'Set Cover' : (type === 'logo' ? 'Set Logo' : 'Set Photo')}
              onClick={() => onClosed()}
            />
          </div>
        </Footer>
      </Container>
    </MDPPSModal>
  )
}

export default EditImageModal;
