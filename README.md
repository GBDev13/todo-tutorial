
# React Todo App

This is a simple Todo application built using React for the frontend and Django for the backend. The application allows users to add new tasks, mark tasks as completed, delete tasks, and updates the completion status to reflect in the backend.

## ✅ Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Real-time updates with backend for task completion status

## 💡 Technologies Used

- **Frontend:**
  - React
  - React Icons
  - CSS Modules

- **Backend:**
  - Django
  - Django Rest Framework

## ⚙️ Setup -> Backend

To set up the React Todo App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ethandiedericks/todo-react.git
   ```
2. Enter todo-react directory:
   ```bash
   cd todo-react
   ```
3. Create a virtual environment: (mac)
   ```bash
   python3 -m venv .venv
   ```
4. Activate the virtual environment:
   ```bash
   source .venv/bin/activate
   ```
5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
6. Enter config directory:
    ```bash
    cd config
    ```
7. Create a copy of the .env.template file and name it .env:
   ```bash
   cp .env.template .env
   ```

8. Generate new Django secret key: 
    ```bash
    python generate_secret_key.py
    ```
9. Make migrations:
   ```bash
   python manage.py makemigrations
   ```
10. Apply migrations:
    ```bash
    python manage.py migrate
    ```
11. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```
12. Start the development server:
    ```bash
    python manage.py runserver
    ```
## ⚙️ Setup -> Frontend

1. Open seperate terminal and enter todo-react directory:
   ```bash
   cd todo-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the following command and go to the url:
   ```bash
   npm run dev
   ```
