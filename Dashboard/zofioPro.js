import React, { useState } from "react";

export default function RecruitingProduct() {
  const [job, setJob] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [shortlist, setShortlist] = useState([]);

  const addCandidate = () => {
    setCandidates([...candidates, { name: "", resume: "" }]);
  };

  const handleCandidateChange = (index, field, value) => {
    const updated = [...candidates];
    updated[index][field] = value;
    setCandidates(updated);
  };

  const screenCandidates = async () => {
    // 👇 For now mock AI screening
    const shortlisted = candidates.filter((c, i) => i % 2 === 0);
    setShortlist(shortlisted);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-info text-center">ZofioPro Recruiter</h2>
      <p className="text-center text-muted">End-to-end AI-powered hiring assistant</p>

      {/* Job Posting */}
      <div className="card p-4 shadow mt-4">
        <h5 className="fw-bold">Job Posting</h5>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter Job Title"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>

      {/* Candidates */}
      <div className="card p-4 shadow mt-4">
        <h5 className="fw-bold">Add Candidates</h5>
        {candidates.map((c, i) => (
          <div key={i} className="row mt-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Candidate Name"
                value={c.name}
                onChange={(e) => handleCandidateChange(i, "name", e.target.value)}
              />
            </div>
            <div className="col-md-8">
              <textarea
                className="form-control"
                placeholder="Paste Resume / Skills"
                value={c.resume}
                onChange={(e) => handleCandidateChange(i, "resume", e.target.value)}
              />
            </div>
          </div>
        ))}
        <button className="btn btn-outline-info mt-3" onClick={addCandidate}>
          ➕ Add Candidate
        </button>
      </div>

      {/* Screening */}
      <div className="text-center mt-4">
        <button className="btn btn-info text-white" onClick={screenCandidates}>
          🚀 Run AI Screening
        </button>
      </div>

      {/* Shortlist */}
      {shortlist.length > 0 && (
        <div className="card p-4 shadow mt-4">
          <h5 className="fw-bold">Shortlisted Candidates</h5>
          {shortlist.map((c, i) => (
            <div key={i} className="alert alert-info mt-2">
              <strong>{c.name}</strong> – {c.resume.slice(0, 50)}...
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
