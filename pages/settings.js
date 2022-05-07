import SignOut from './SignOut';
import AddFriend from './AddFriend';
import BackButton from './BackButton';

export default function settings() {
  return (
    <div className="bg-settings-background h-screen">
      <BackButton />
      <AddFriend />
      <SignOut />
    </div>
  )
}