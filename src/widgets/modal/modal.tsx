import { ReactElement } from 'react'
import './modal.scss'

interface ModalProps {
  active: boolean
  children: ReactElement
}

export default function Modal({ active, children }: ModalProps) {
  return active ? (
    <div className='modal'>
      <div className='content-modal'>{children}</div>
    </div>
  ) : null
}
