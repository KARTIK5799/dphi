import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import './Form.scss';

const getStatus = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'active';
  } else {
    return 'ended';
  }
};

const Form = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [level, setLevel] = useState('easy');
  const [status, setStatus] = useState('Active'); // Initialize with default value
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const { data, addOrUpdateChallenge } = useContext(DataContext);
  const navigate = useNavigate();

  const challengeData = data.find(challenge => challenge.id === parseInt(id));

  useEffect(() => {
    if (challengeData) {
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
      };

      setTitle(challengeData.title || '');
      setStartDate(challengeData.startDate ? formatDate(challengeData.startDate) : '');
      setEndDate(challengeData.endDate ? formatDate(challengeData.endDate) : '');
      setDescription(challengeData.description || '');
      setImage(challengeData.image || null);
      setLevel(challengeData.difficulty || 'easy');
      setStatus(challengeData.status || 'Active');
    }
  }, [challengeData]);

  useEffect(() => {
    // Update status whenever startDate or endDate changes
    if (startDate && endDate) {
      setStatus(getStatus(startDate, endDate));
    }
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatDateForSubmission = (dateString) => {
      const [year, month, day] = dateString.split('-');
      return `${year}-${month}-${day}T00:00:00`;
    };

    const newChallenge = {
      id: id ? parseInt(id) : data.length + 1,
      title,
      startDate: formatDateForSubmission(startDate),
      endDate: formatDateForSubmission(endDate),
      description,
      image: image || '',
      difficulty: level,
      status // Use the computed status
    };

    addOrUpdateChallenge(newChallenge);

    setMessage(id ? 'Challenge updated successfully!' : 'Challenge created successfully!');

    setTimeout(() => {
      navigate('/');  // Redirect to homepage
    }, 2000);  // Delay for showing message
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-white h-full w-full flex flex-col justify-between items-start">
      <div className="bg-gray-200 w-full h-28 flex items-center px-12">
        <h1 className="text-2xl font-bold">
          {challengeData ? 'Edit Challenge' : 'Create Challenge'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-12 w-full">
        {/* Form fields */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Challenge Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full max-w-sm p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full max-w-sm p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full max-w-sm p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full max-w-lg p-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          {image && <img src={image} alt="Uploaded" className="w-40 h-40" />}
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label
            htmlFor="image"
            className="w-60 h-12 mt-2 cursor-pointer rounded-md border border-gray-300 bg-gray-200 flex justify-center items-center text-black"
          >
            {challengeData ? "Update Image" : "Upload"}<span className="ml-4 material-symbols-outlined">cloud_upload</span>
          </label>
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-700">
            Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 block w-full max-w-xs p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full max-w-xs bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          {challengeData ? 'Update Challenge' : 'Create Challenge'}
        </button>
      </form>

      {message && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default Form;
