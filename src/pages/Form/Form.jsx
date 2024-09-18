import { useState, useEffect } from 'react';

const Form = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [level, setLevel] = useState('easy');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setStartDate(initialData.startDate || '');
      setEndDate(initialData.endDate || '');
      setDescription(initialData.description || '');
      setImage(initialData.image || null);
      setLevel(initialData.level || 'easy');
    } else {
      setTitle('');
      setStartDate('');
      setEndDate('');
      setDescription('');
      setImage(null);
      setLevel('easy');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, startDate, endDate, description, image, level });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="bg-white h-full w-full flex flex-col justify-between items-start">
      {/* Header */}
      <div className="bg-gray-200 w-full h-28 flex items-center px-12">
        <h1 className="text-2xl font-bold">
          {initialData ? 'Edit Challenge' : 'Create Challenge'}
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 p-12 w-full">
        {/* Challenge Title */}
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

        {/* Start Date */}
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

        {/* End Date */}
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

        {/* Description */}
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

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
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
            Upload <img src="src/assets/cloude.png" alt="cloud" className="ml-2" />
          </label>
        </div>

        {/* Level */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full max-w-xs bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          {initialData ? 'Update Challenge' : 'Create Challenge'}
        </button>
      </form>
    </div>
  );
};

export default Form;
