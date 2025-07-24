# AI Image Editor

A web-based application for intelligent image editing built with Django.

## Features

- User account creation and authentication
- Upload images in various formats (JPG, PNG, GIF, BMP)
- Apply various edits to images:
  - Grayscale conversion
  - Blur with adjustable strength
  - Resize with custom dimensions
  - Rotate images
  - Convert between image formats
- View all your uploaded and edited images
- Download edited images

## Technology Stack

- **Backend**: Django
- **Frontend**: Bootstrap 5, JavaScript
- **Image Processing**: OpenCV, Pillow
- **Database**: SQLite (default)

## Installation

1. Clone the repository:
```
git clone <repository-url>
cd ai-image-editor
```

2. Create a virtual environment and activate it:
```
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/MacOS
```

3. Install required packages:
```
pip install -r requirements.txt
```

4. Apply database migrations:
```
python manage.py migrate
```

5. Create a superuser (admin):
```
python manage.py createsuperuser
```

6. Run the development server:
```
python manage.py runserver
```

7. Access the application at http://127.0.0.1:8000/

## Usage

1. Create an account or log in
2. Upload an image
3. Select the image to edit
4. Choose an edit type (grayscale, blur, resize, rotate, format change)
5. Apply the edit and download the result

## Project Structure

- **accounts**: Handles user authentication
- **editor**: Core app for image editing functionality
- **templates**: HTML templates for the application
- **media**: Storage for uploaded and edited images

## License

MIT 