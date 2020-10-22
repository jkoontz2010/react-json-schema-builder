import React from 'react'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'


type Props = {
  onClick: () => void
  isCollapsed?: boolean
}

const CollapseButton: React.FunctionComponent<Props> = ({isCollapsed=false, onClick}: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      className='text-white bg-blue-500 hover:bg-blue-700'
    >
      <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronDown} />
    </RoundedButton>
  )
}

export default CollapseButton