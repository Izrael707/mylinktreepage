const Profile = () => {
  return ( 
    <div className="text-center py-4">
      <img src="profile-img.jpg" alt="" className="img-fluid my-3" id="profile__img" />
      <img src="logo.svg" alt="" id="share-logo" className="d-none d-md-inline" />
      <img src="logo2.svg" alt="" id="dots-logo" className="d-md-none" />
      <p className="lead fw-bold p-1 m-0" id="twitter">Tonobuende</p>
      <p className="lead fw-bold p-1 m-0 d-none" id="slack">Israel707</p>
    </div>
   );
}
 
export default Profile;