import SignOut from './SignOut';
import AddFriend from './AddFriend';
import BackButton from './BackButton';
import ProfilePhoto from './ProfilePhoto';
import Preferences from './Preferences';


export default function settings() {
  return (
    <div className="bg-settings-background h-screen">
      <BackButton />
      <ProfilePhoto />
      <Preferences />
      <AddFriend />
      <SignOut />
    </div>
  )
}