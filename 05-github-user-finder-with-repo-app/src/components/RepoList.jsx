const RepoList = ({ userRepo }) => {
  return (
    <div className="col-lg-8">
      <div
        className="card h-100 border-0 p-4 shadow-lg gap-2"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h5 className="fw-bold mb-4 text-white-50 tracking-wide">
          Latest Repositories (Top {userRepo.length})
        </h5>

        {/* Repo container with loop logic structure */}
        {userRepo.map((repo) => (
          <div
            key={repo.id}
            className="p-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3"
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div>
              <h5
                className="fw-bold text-white mb-1"
                style={{ fontSize: "16px" }}
              >
                {repo.name}
              </h5>
              <p className="text-secondary small mb-2">
                {repo.description}
              </p>

              <div
                className="d-flex gap-3 small"
                style={{
                  color: "#DFDEDE",
                }}
              >
                <span>
                  Language:{" "}
                  <strong className="text-warning">{repo.language}</strong>
                </span>
                <span>Stars: ⭐ {repo.stargazers_count}</span>
                <span>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </div>

            <div>
              <a
                href={repo.html_url}
                target="_blank"
                className="btn btn-sm btn-outline-info px-3 py-2 fw-semibold rounded-pill"
                style={{ fontSize: "12px", letterSpacing: "0.5px" }}
              >
                VIEW ON GITHUB
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
