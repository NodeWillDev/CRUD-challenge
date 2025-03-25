## 🚀 Backend Configuration

### 📌 Requirements

To initialize the Back-end, make sure you have installed:

-   ✅ **PHP 8.1**
-   ✅ **MySQL**
-   ✅ **Composer**

### ⚙️ Settings

In the `.env` file, configure the following fields:

```env
# Database configuration EX:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=crud
DB_USERNAME=root
DB_PASSWORD=root
```

### ▶️ Installation and Startup

1. Install the project dependencies:
    ```sh
    composer install
    ```
2. Perform database migrations:
    ```sh
    php artisan migrate
    ```
3. Start the local server:
    ```sh
    php artisan serve
    ```

⚠️ **WARNING:** Make sure your database is turned on and configured correctly.

---

## 🌐 API routes

### ➕ Create a Task

-   **Método:** `POST`
-   **URL:** `http://127.0.0.1:8000/api/tasks/create`
-   **Body:**
    ```json
    {
        "description": "string opcional",
        "title": "string (dedfault: 'Unknow')",
        "status": "inteiro (dedfault: 1)"
    }
    ```
-   **Status Codes:**

    -   `200` - Success
    -   `400` - Request error

-   **Status:**
    -   `1` - COMPLETED
    -   `2` - PROCESSING...
    -   `3` - NOT STARTED

---

### 📌 Get a Task by ID

-   **Method:** `GET`
-   **URL:** `http://127.0.0.1:8000/api/tasks/{id}`
-   **Response:**
    ```json
    {
      "id": int,
      "title": "string",
      "description": "string",
      "status": int,
      "created_at": "TIMESTAMP",
      "updated_at": "TIMESTAMP"
    }
    ```
    or `null` if not found.
-   **Status Codes:**
    -   `200` - Success
    -   `404` - Not found

---

### ❌ Delete a Task by ID

-   **Method:** `DELETE`
-   **URL:** `http://127.0.0.1:8000/api/tasks/delete/{id}`
-   **Response:**
    ```json
    {
      "id": int,
      "title": "string",
      "description": "string",
      "status": int,
      "created_at": "TIMESTAMP",
      "updated_at": "TIMESTAMP"
    }
    ```
    or `null` if not found.

---

### 📜 List All Tasks

-   **Method:** `GET`
-   **URL:** `http://127.0.0.1:8000/api/tasks/all`
-   **Response:**
    ```json
    [
      {
        "id": int,
        "title": "string",
        "description": "string",
        "status": int,
        "created_at": "TIMESTAMP",
        "updated_at": "TIMESTAMP"
      },
      ...
    ]
    ```
    or `[]` if there are no records.
-   **Status Code:** `200`

---

### ✏️ Update a Task

-   **Method:** `POST`
-   **URL:** `http://127.0.0.1:8000/api/update/{id}`
-   **Body:**
    ```json
    {
        "description": "string opcional",
        "title": "string opcional",
        "status": "int opcional"
    }
    ```
-   **Response:**
    ```json
    [
      {
        "id": int,
        "title": "string",
        "description": "string",
        "status": int,
        "created_at": "TIMESTAMP",
        "updated_at": "TIMESTAMP"
      }
    ]
    ```
    or `[]` if there are no records.
-   **Status Codes:**
    -   `200` - Success
    -   `404` - Not found

📝 **Obs:** You can only pass the ID and the field to be changed.
