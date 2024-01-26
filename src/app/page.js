import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link href="" className="nav-link">Your Feed</Link>
                </li>
                <li className="nav-item">
                  <Link href="" className="nav-link active">Global Feed</Link>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></Link>
                <div className="info">
                  <Link href="" className="author">author</Link>
                  <span className="date">date</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <Link href="" className="preview-link">
                <h1>title</h1>
                <p>description</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">realworld</li>
                  <li className="tag-default tag-pill tag-outline">implementations</li>
                </ul>
              </Link>
            </div>

            <ul className="pagination">
              <li className="page-item active">
                <Link className="page-link" href="">1</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">2</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Link href="" className="tag-pill tag-default">programming</Link>
                <Link href="" className="tag-pill tag-default">javascript</Link>
                <Link href="" className="tag-pill tag-default">emberjs</Link>
                <Link href="" className="tag-pill tag-default">angularjs</Link>
                <Link href="" className="tag-pill tag-default">react</Link>
                <Link href="" className="tag-pill tag-default">mean</Link>
                <Link href="" className="tag-pill tag-default">node</Link>
                <Link href="" className="tag-pill tag-default">rails</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
