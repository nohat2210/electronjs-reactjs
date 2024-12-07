import Button from "@/renderer/shared/components/Button";
import ProfileForm from "@/renderer/modules/profile/components/ProfileForm";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigate();

  const goToDashboard = () => {
    navigation("/");
  };

  return (
    <div className="space-y-4">
      <div>Profile</div>
      <ProfileForm />
      <Button variant="outlined" className="uppercase" onClick={goToDashboard}>
        back
      </Button>
    </div>
  );
};

export default Profile;
