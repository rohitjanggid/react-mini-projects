const ProfileCard = ({ userProfile }) => {
  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="col-lg-4">
      <div
        className="card h-100 border-0 p-4 shadow-lg text-center"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="position-relative d-inlinie-block mx-auto mb-3 mt-2">
          <img
            src={userProfile.avatar_url}
            alt="Avatar"
            className="rounded-circle img-fluid"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
              border: "3px solid #a855f7",
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
            }}
          />
        </div>

        {/* user details */}
        <h3 className="text-white fw-bold m-0">{userProfile.name}</h3>
        <p className="text-white small mb-3">@{userProfile.login}</p>
        <p className="small text-secondary px-2 mb-4">{userProfile.bio}</p>

        {/* Location, company, blog */}
        <div className="text-start text-secondary small mb-4 px-2">
          <div className="mb-2">
            📍 <span>{userProfile.location || "Not Available"}</span>
          </div>
          <div className="mb-2">
            🏢
            <span className="ms-2">
              {userProfile.company || "Not Available"}
            </span>
          </div>
        </div>

        {/* stats badges grid */}
        <div className="row g-2 mt-2">
          <div className="col-6">
            <div
              className="p-2 rounded-3 text-center"
              style={{
                border: "1px solid rgba(99, 102, 241, 0.4)",
                backgroundColor: "rgba(99, 102, 241, 0.05,)",
              }}
            >
              <span
                className="text-white d-block"
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                FOLLOWERS
              </span>
              <span className="fw-bold text-secondary fs-5">
                {userProfile.followers}
              </span>
            </div>
          </div>
          <div className="col-6">
            <div
              className="p-2 rounded-3 text-center"
              style={{
                border: "1px solid rgba(236, 72, 153, 0.4)",
                backgroundColor: "rgba(236, 72, 153, 0.05,)",
              }}
            >
              <span
                className="text-white d-block"
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                FOLLOWING
              </span>
              <span className="fw-bold text-secondary fs-5">
                {userProfile.following}
              </span>
            </div>
          </div>
          <div className="col-6">
            <div
              className="p-2 rounded-3 text-center"
              style={{
                border: "1px solid rgba(34, 197, 94, 0.4)",
                backgroundColor: "rgba(34, 197, 94, 0.05)",
              }}
            >
              <span
                className="text-white d-block"
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                REPOSITORIES
              </span>
              <span className="fw-bold text-secondary fs-5">
                {userProfile.public_repos}
              </span>
            </div>
          </div>

          <div className="col-6">
            <div
              className="p-2 rounded-3 text-center"
              style={{
                border: "1px solid rgba(234, 179, 8, 0.4)",
                backgroundColor: "rgba(234, 179, 8, 0.05)",
              }}
            >
              <span
                className="text-white d-block"
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                GISTS
              </span>
              <span className="fw-bold text-secondary fs-5">
                {userProfile.public_gists}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
