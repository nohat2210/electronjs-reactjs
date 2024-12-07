import { useNavigate } from "react-router-dom";
import Button from "../shared/components/Button";
import { useEffect, useState } from "react";
import { Profile } from "@/types";

function Dashboard() {
  const [files, setFiles] = useState<Profile[]>([]);
  const navigation = useNavigate();

  const openNewTab = () => {
    window.electron.openBrowserWindow("https://iphey.com/");
  };

  const goToAddProfile = () => {
    navigation("/profile");
  };

  const fetchProfiles = async () => {
    const profiles = await window.electron.getProfiles();
    setFiles(profiles);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="container px-2">
      <div className="flex gap-x-2 justify-between">
        <div>
          <p className="text-primary font-bold">Hello world!!</p>
          <Button className="uppercase" onClick={openNewTab}>
            open
          </Button>
        </div>
        <div>
          <Button className="uppercase" onClick={goToAddProfile}>
            add
          </Button>
        </div>
      </div>
      <div>
        {files.length > 0 ? (
          <ul className="list-disc ml-5">
            {files.map((file, index) => (
              <li key={index}>{file.email}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No profiles found.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
