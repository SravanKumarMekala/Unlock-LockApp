// Write your code here
import {useState} from 'react'

import {AppContainer, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const handleToggle = () => setIsLocked(prevState => !prevState)

  return (
    <AppContainer>
      <Image
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <Text>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Text>
      <Button onClick={handleToggle}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </AppContainer>
  )
}

export default Unlock
