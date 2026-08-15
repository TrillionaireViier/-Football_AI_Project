from fastapi import FastAPI, UploadFile, File
import shutil
import os
from services.video_processor import process_video

app = FastAPI(title="Player Analysis AI Video Service")

@app.get("/")
def health_check():
    return {"status": "AI Service is running"}

@app.post("/api/analyze-video")
async def analyze_video(file: UploadFile = File(...)):
    # Save the uploaded video temporarily
    temp_video_path = f"temp_{file.filename}"
    with open(temp_video_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Run the AI processing pipeline
    results = process_video(temp_video_path)
    
    # Cleanup temp file
    if os.path.exists(temp_video_path):
        os.remove(temp_video_path)
        
    return {"status": "success", "results": results}
