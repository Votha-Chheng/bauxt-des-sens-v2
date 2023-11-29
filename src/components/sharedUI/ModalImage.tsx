import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Modal from 'react-modal'

type ModalImageProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
  modalIsOpen: boolean
  imageUrl: string
}

const ModalImage: FC<ModalImageProps> = ({ modalIsOpen, setModalIsOpen, imageUrl}) => {
  const { width } = useWindowSize()

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=> setModalIsOpen(false)}
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'auto'}
      ariaHideApp={false}
      style={{
        overlay: {
          margin:"auto",
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          zIndex: 10000
        },
        content: {
          margin: 'auto',
          maxHeight: `800px` ,
          maxWidth: `1200px`,
          overflow: "hidden",
          justifyContent: 'center',
          borderRadius: '20px',
          border: '2.5px solid #C4A77D',
          overflowY: 'scroll'
        }
      }}
    >
      <Image src={`/images/${imageUrl}`} alt={imageUrl} width={900} height={900} className='mx-auto' />
    </Modal>
  )
}
  


export default ModalImage