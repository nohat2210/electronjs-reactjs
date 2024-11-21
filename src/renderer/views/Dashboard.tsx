import Button from "../shared/components/Button";

function Dashboard() {
  const openNewTab = () => {
    window.electron.openBrowserWindow("https://iphey.com/");
  };

  return (
    <div className="container px-2">
      <p className="text-primary font-bold">Hello world!!</p>
      <div className="flex gap-x-2">
        <Button className="uppercase" onClick={openNewTab}>
          open
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
