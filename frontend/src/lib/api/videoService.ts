/**
 * API Client to communicate with the Python FastAPI Video Microservice
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_AI_API_URL || 'http://localhost:8000';

export async function analyzeVideo(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze-video`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`AI Video Service Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to analyze video:", error);
    throw error;
  }
}
