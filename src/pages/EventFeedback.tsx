import { useState, type FormEvent} from "react";

interface Feedback {
  name: string;
  eventName: string;
  rating: string;
  comments: string;
}

function EventFeedback() {
  const [formData, setFormData] = useState<Feedback>({
    name: "",
    eventName: "",
    rating: "",
    comments: "",
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

    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");

    // Reset form
    setFormData({
      name: "",
      eventName: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Event Feedback</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Enter event name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <select
            className="form-select"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Comments</label>
          <textarea
            className="form-control"
            name="comments"
            rows={4}
            value={formData.comments}
            onChange={handleChange}
            placeholder="Share your experience..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default EventFeedback;