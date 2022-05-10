import SignOut from '../components/SignOut';
import SaveChanges from '../components/SaveChanges';
import BackButton from '../components/BackButton';
import ProfilePhoto from '../components/ProfilePhoto';
import Preferences from '../components/Preferences';


export default function settings() {
  return (
    <div className="bg-black h-screen">
      <BackButton />
      <ProfilePhoto />
      <Preferences />
      <SaveChanges />
      <SignOut />
    </div>
  )
}