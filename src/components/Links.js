const Links = () => {
  return (
    <div className="text-center p-3 p-xl-5">
      <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" className="btn btn-lg rounded w-100 py-3 mb-3" id="btn__zuri">
        <span className="fw-semibold">Zuri Team</span>
      </a>
      <a href="http://books.zuri.team" target="_blank" rel="noreferrer" title="Design and Coding Books" className="btn btn-lg border-0 rounded w-100 py-3 mb-3" id="books">
        <span className="fw-semibold">Top Design and Coding books</span>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?PB-01et=israel707" target="_blank" rel="noreferrer" className="btn btn-lg border-0 rounded w-100 py-3 mb-3" id="book__python">
        <span className="fw-semibold">World Class Python Book for Dummies</span>
      </a>
      <a href="https://background.zuri.team" target="_blank" rel="noreferrer" className="btn btn-lg border-0 rounded w-100 py-3 mb-3" id="pitch">
        <span className="fw-semibold">For Solid Background Checks on Your Favorite Coders</span>
      </a>
      <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" className="btn btn-lg border-0 rounded w-100 py-3 mb-3" id="book__design">
        <span className="fw-semibold">Best Free Design Book from Zuri</span>
      </a>
      <div className="d-flex justify-content-center p-3 gap-3">
        <img src="slack.png" alt="slack-logo" />
        <img src="git.png" alt="git-logo" />
      </div>
    </div>
  );
}
 
export default Links;