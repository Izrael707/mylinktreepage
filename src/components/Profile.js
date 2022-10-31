const Profile = () => {
  return ( 
    <div className="text-center py-4 py-xl-5">
      <img className="img-fluid my-3" id="profile__img" />
      <img src="share-default.png" alt="" id="share-icon" className="d-none d-md-inline" />
      <img src="more-default.png" alt="" id="more-icon" className="d-md-none" />
      <p className="lead fw-bold p-1 m-0" id="twitter">Tonobuende</p>
      <p className="lead fw-bold p-1 m-0 d-none" id="slack">Israel707</p>
    </div>
   );
}
 
export default Profile;