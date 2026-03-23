import { useState, FormEvent } from "react";

interface Request {
  studentName: string;
  studentID: string;
  bookTitle: string;
  author: string;
  reason: string;
  requestType: string;
}

function BookRequest() {
  const [formData, setFormData] = useState<Request>({
    studentName: "",
    studentID: "",
    bookTitle: "",
    author: "",
    reason: "",
    requestType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Book request submitted successfully!");

    setFormData({
      studentName: "",
      studentID: "",
      bookTitle: "",
      author: "",
      reason: "",
      requestType: "",
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Book Request Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Student ID</label>
          <input
            type="text"
            className="form-control"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            className="form-control"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason for Request</label>
          <textarea
            className="form-control"
            name="reason"
            rows={3}
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Request Type</label>
          <select
            className="form-select"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            required
          >
            <option value="">Select Request Type</option>
            <option value="borrow">Borrow</option>
            <option value="reserve">Reserve</option>
            <option value="suggest">Suggest Purchase</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default BookRequest;