import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Data Sprint 72 - Butterfly Identification",
      startDate: "2024-09-01T09:00:00",
      endDate: "2024-09-30T17:00:00",
      image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      difficulty: "medium",
      description: `This challenge focuses on butterfly species identification using machine learning. Participants will work with a dataset of butterfly images to build a model that can accurately classify different species. The challenge requires knowledge of computer vision techniques and image processing. Key tasks include data augmentation, model training, and performance evaluation. Participants are expected to handle image data, apply various algorithms, and fine-tune their models to achieve high accuracy. This challenge is ideal for those interested in biological data and computer vision applications.`,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Data Sprint 71 - Weather Recognition",
      startDate: "2024-06-01T09:00:00",
      endDate: "2024-09-01T17:00:00",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      difficulty: "hard",
      description: `In this challenge, participants are tasked with developing a weather recognition model. Using a dataset of weather-related images, the goal is to classify various weather conditions such as sunny, rainy, snowy, and cloudy. This requires expertise in deep learning, image classification, and possibly weather data analysis. Participants will need to preprocess images, train convolutional neural networks, and evaluate their models' accuracy. This challenge is perfect for those looking to apply AI in practical, real-world scenarios and improve weather prediction systems.`,
      status: "ended"
    },
    {
      id: 3,
      title: "Data Sprint 70 - Airline Passenger Satisfaction",
      startDate: "2024-10-01T09:00:00",
      endDate: "2024-10-31T17:00:00",
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      difficulty: "easy",
      description: `This challenge revolves around predicting airline passenger satisfaction based on various features. Participants will use a dataset containing passenger feedback and ratings to build a model that can predict overall satisfaction. The challenge involves data cleaning, feature engineering, and model building. Participants are expected to handle structured data, apply machine learning algorithms, and interpret the results to provide actionable insights. This challenge is ideal for those interested in customer experience analysis and data-driven decision making.`,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Data Sprint 69 - Plant Disease Detection",
      startDate: "2024-08-01T09:00:00",
      endDate: "2024-09-15T17:00:00",
      image: "https://images.pexels.com/photos/3968168/pexels-photo-3968168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      difficulty: "medium",
      description: `This challenge is centered on detecting plant diseases from leaf images. Participants will be provided with a dataset of diseased and healthy plant leaves and are tasked with developing a model to identify and classify different plant diseases. This involves applying techniques in image classification, data augmentation, and model evaluation. The challenge requires understanding of plant pathology and image processing. Successful solutions will help in early detection and management of plant diseases, benefiting agricultural practices.`,
      status: "ended"
    },
    {
      id: 5,
      title: "Data Sprint 68 - Traffic Flow Analysis",
      startDate: "2024-05-01T09:00:00",
      endDate: "2024-07-15T17:00:00",
      image: "https://images.pexels.com/photos/3616659/pexels-photo-3616659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      difficulty: "hard",
      description: `This challenge involves analyzing traffic flow data to identify patterns and optimize traffic management. Participants will work with traffic sensor data, including vehicle counts and traffic speed, to develop models that can predict traffic congestion and suggest improvements. The challenge requires skills in data analysis, time series forecasting, and machine learning. Participants are expected to preprocess data, build predictive models, and provide actionable insights for traffic management. This challenge is suitable for those interested in smart city solutions and transportation systems.`,
      status: "ended"
    },
  ]);


  const addOrUpdateChallenge = (newChallenge) => {
    console.log(data);
    setData((prevData) => {
      const existingIndex = prevData.findIndex(challenge => challenge.id === newChallenge.id);
      if (existingIndex !== -1) {

        const updatedData = [...prevData];
        updatedData[existingIndex] = newChallenge;
        return updatedData;
      } else {
        return [...prevData, newChallenge];
      }
    });
  };

  return (
    <DataContext.Provider value={{ data, addOrUpdateChallenge }}>
      {children}
    </DataContext.Provider>
  );
};
