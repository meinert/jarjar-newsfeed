import React from 'react';

interface TemplateComponentProps {
  // Define your prop types here
  title: string;
  description: string;
}

const TemplateComponent: React.FC<TemplateComponentProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TemplateComponent;
