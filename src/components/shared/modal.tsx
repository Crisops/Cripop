import { type ModalProps as ModalPropsHero, Modal as ModalHero, ModalContent, ModalBody } from '@heroui/modal'

interface ModalProps extends ModalPropsHero {}

const Modal = ({ ...props }: ModalProps) => {
  return (
    <ModalHero
      {...props}
      classNames={{
        base: 'bg-black/90',
        closeButton: 'hover:bg-default-100/20 transition-colors hover:text-white lg:end-10 lg:top-4 lg:z-50',
      }}
    >
      <ModalContent>
        <>
          <ModalBody>{props.children}</ModalBody>
        </>
      </ModalContent>
    </ModalHero>
  )
}

export default Modal
