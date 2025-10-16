import React, { useState, useEffect } from "react";
import client from "./contentfulClient";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First, let's check what content types are available
        const contentTypes = await client.getContentTypes();
        console.log('Available content types:', contentTypes.items.map(ct => ct.sys.id));
        
        // Try to fetch entries with different possible content type names
        const possibleContentTypes = ['project', 'Project', 'projects', 'Projects'];
        
        for (const contentType of possibleContentTypes) {
          try {
            const response = await client.getEntries({
              content_type: contentType
            });
            console.log(`Found entries for content type '${contentType}':`, response.items);
            setProjects(response.items);
            setLoading(false);
            return; // Exit if successful
          } catch (err) {
            console.log(`Content type '${contentType}' not found:`, err.message);
          }
        }
        
        // If no content type worked, show available content types
        setError(`No valid content type found. Available content types: ${contentTypes.items.map(ct => ct.sys.id).join(', ')}`);
        setLoading(false);
        
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return (
      <div>
        <h2>Error loading projects</h2>
        <p>{error}</p>
        <p>Please check your Contentful configuration and make sure the content type exists.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div>
          {projects.map((project) => (
            <div key={project.sys.id}>
              <h3>{project.fields.title || 'Untitled'}</h3>
              <p>{JSON.stringify(project.fields, null, 2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
