import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hackathons } from '../../../public/data';
import './Form.scss'; 

const Form = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [level, setLevel] = useState('easy');

  const { id } = useParams();
  const challengeData = hackathons.find(challenge => challenge.id === parseInt(id));

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
      setLevel(challengeData.level || 'easy');
    } else {
      setTitle('');
      setStartDate('');
      setEndDate('');
      setDescription('');
      setImage(null);
      setLevel('easy');
    }
  }, [challengeData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formatDateForSubmission = (dateString) => {
      const [year, month, day] = dateString.split('-');
      return `${year}-${month}-${day}T00:00:00`;
    };

    console.log("Form submitted with data:", { 
      title, 
      startDate: formatDateForSubmission(startDate), 
      endDate: formatDateForSubmission(endDate), 
      description, 
      image, 
      level 
    });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="bg-white h-full w-full flex flex-col justify-between items-start">
      <div className="bg-gray-200 w-full h-28 flex items-center px-12">
        <h1 className="text-2xl font-bold">
          {challengeData ? 'Edit Challenge' : 'Create Challenge'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-12 w-full">
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
          {challengeData && <div className='w-[20rem] h-auto overflow-hidden p-2 bg-gray-200 rounded-lg max-h-[20rem]'>
            <img src={challengeData.image} alt={challengeData.title} className='rounded'/>
            <div id="img-2"></div>
          </div>}
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
            {challengeData ? "Update Image" : "Upload"}<span className="ml-4 material-symbols-outlined">
cloud_upload
</span>
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
    </div>
  );
};

export default Form;
