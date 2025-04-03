import Avatar from "./Avatar";

const Profile = () => {
  const name = "John";
  const age = 30;
  return (
    <div className="Profile">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <Avatar />
    </div>
  );
};
export default Profile;
