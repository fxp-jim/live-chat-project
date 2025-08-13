### **Day 1: The Blueprint \- Structuring the Chat UI with HTML**

* **Daily Goal:** Understand the role of HTML as the skeleton of a webpage and build the static, unstyled structure of your chat application.  
* **Topic Breakdown:**  
  * **Core Concepts:** Learn what HTML is and its "box-like" nature.  
  * **Document Structure:** `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`.  
  * **Key Elements:** `<div>` (the primary building block), `<header>`, `<main>`, `<footer>` (for semantic structure), `<h1>`, `<p>`, `<input>`, and `<button>`.  
  * **Attributes:** `id` (a unique name for an element) and `class` (a reusable group name).  
* **6-Hour Schedule:**  
  * **Hour 1-2 (Learn):** Watch a primer on HTML fundamentals. Focus on understanding that every element is a box you can put other boxes into. Don't memorize tags; understand their purpose.  
  * **Hour 3-5 (Apply):** Create your project folder. Inside, create an `index.html` file. Open it in VS Code and build the chat window's structure. You'll need:  
    1. A main container `<div>`.  
    2. A `<header>` with an `<h1>` for the title (e.g., "Live Support Chat").  
    3. A `<main>` section to hold the chat messages.  
    4. Inside `<main>`, add a few static `<div>` elements with `<p>` tags to represent a fake conversation.  
    5. A `<footer>` containing a form with an `<input type="text">` and a `<button>`.  
  * **Hour 6 (Version Control):** Open the terminal in VS Code.  
    1. Initialize Git: `git init`  
    2. Add your file: `git add index.html`  
    3. Create your first commit using the message below.  
    4. Create a new, empty repository on GitHub and push your code to it.  
* **FileMaker Parallels:**  
  * **HTML Elements (`<div>`, `<button>`)** are your **Layout Objects** (Fields, Portals, Buttons).  
  * An **`id` attribute** is the **Object Name** you assign in the Inspector—a unique identifier.  
  * A **`class` attribute** is like a **Custom Style** you create and apply to multiple objects for consistency.  
  * The **`<body>` tag** is your entire **Layout Canvas**.  
* **End-of-Day Deliverable:** A single `index.html` file that opens in a browser to show the raw, unstyled chat interface.  
  * **Git Commit Message:** `feat: Initial HTML structure for chat UI`

---

### **Day 2: The Style \- Designing the Chat UI with CSS**

* **Daily Goal:** Apply CSS to transform the raw HTML structure into a visually appealing and professional-looking chat interface.  
* **Topic Breakdown:**  
  * **Core Concepts:** CSS syntax (selectors, properties, values), linking a stylesheet.  
  * **The Box Model:** The most crucial concept in CSS. Understand that every element has `content`, `padding`, `border`, and `margin`.  
  * **Flexbox:** The modern standard for aligning and distributing items within a container. This will be your primary layout tool.  
  * **Selectors:** Targeting elements using their tag name (e.g., `div`), `class` (e.g., `.message-bubble`), and `id` (e.g., `#chat-window`).  
* **6-Hour Schedule:**  
  * **Hour 1-2 (Learn):** Focus entirely on Flexbox and the Box Model. These two concepts are 80% of what you need for layout.  
  * **Hour 3-5 (Apply):**  
    1. Create a `style.css` file and link it in the `<head>` of your `index.html`.  
    2. Style the main chat window: give it a fixed size, a border, and center it on the page.  
    3. Use Flexbox to style the message area, making messages stack vertically.  
    4. Create two classes: `.user-message` and `.bot-message`. Style them with different background colors and use Flexbox to align them to the right and left, respectively.  
    5. Style the input field and button to look modern.  
  * **Hour 6 (Refine & Commit):** Tweak colors, spacing, and fonts. Ensure it looks clean. Add and commit your new `style.css` file.  
* **FileMaker Parallels:**  
  * **CSS** is the **Inspector Panel**. You're not changing the data (HTML), just its appearance (color, size, position).  
  * A **CSS Rule** (e.g., `button { background-color: blue; }`) is like setting the **Fill Color** for all button objects using a specific style.  
  * **Flexbox** is like using **Auto-Resize Anchors**, but infinitely more powerful for arranging groups of objects dynamically.  
* **End-of-Day Deliverable:** A styled, professional-looking (but not yet interactive) chat application.  
  * **Git Commit Message:** `feat: Apply CSS for chat UI styling and layout`

---

### **Day 3: The Spark \- Basic Interactivity with JavaScript**

* **Daily Goal:** Use JavaScript to "listen" for user actions, capture input, and dynamically add new messages to the chat window.  
* **Topic Breakdown:**  
  * **The DOM:** Understanding that your HTML is a live "Document Object Model" that JavaScript can manipulate.  
  * **Event Handling:** Using `.addEventListener()` to run code on a `click` or `submit`.  
  * **DOM Manipulation:** Selecting elements (`document.querySelector`), creating new elements (`document.createElement`), and adding them to the page (`.append()`).  
  * **Variables:** Storing references to HTML elements and user input (`const`, `let`).  
* **6-Hour Schedule:**  
  * **Hour 1-2 (Learn):** Focus on the core loop: **Select an element \-\> Add an event listener \-\> Run a function.**  
  * **Hour 3-5 (Apply):**  
    1. Create an `app.js` file and link it at the *bottom* of your `<body>` tag in `index.html`.  
    2. In `app.js`, select the form, input field, and message area, storing them in variables.  
    3. Add an event listener to the form for the `submit` event.  
    4. Inside the event listener function, write code to:  
       * Prevent the page from reloading.  
       * Get the text value from the input field.  
       * Create a new `<div>` for the message bubble.  
       * Add the user's text and the correct CSS class to it.  
       * Append the new bubble to the message area.  
       * Clear the input field.  
  * **Hour 6 (Polish & Commit):** Add a simple function that makes the message area auto-scroll to the bottom as new messages are added. Commit your `app.js` file.  
* **FileMaker Parallels:**  
  * **JavaScript** is your **Script Workspace**.  
  * `addEventListener` is setting up a **Script Trigger** (`OnObjectEnter`, `OnLayoutKeystroke`).  
  * `document.querySelector` is the equivalent of `GetLayoutObjectAttribute`.  
  * Manipulating the DOM is like using script steps (`New Record/Request`, `Set Field`) to dynamically change what's on the layout.  
* **End-of-Day Deliverable:** A UI where a user can type a message, click send, and see their message instantly appear in the chat window.  
  * **Git Commit Message:** `feat: Implement JS for local message display`

---

### **Day 4: The Brain \- Building the Logic (JS & n8n)**

* **Daily Goal:** Create the response logic, first with a temporary "fake" bot in JavaScript, and then build the real backend logic in a new n8n workflow.  
* **Topic Breakdown:**  
  * **JS Logic:** Basic conditional `if/else` statements and functions.  
  * **n8n Core:** Creating a workflow, using the **Webhook node** (as a trigger), the **IF node** (for routing), and the **Set node** (to craft a response).  
* **6-Hour Schedule:**  
  * **Hour 1 (JS "Wizard of Oz"):** In `app.js`, create a simple function `getBotResponse(message)`. Use an `if/else` statement to check for keywords and return a hard-coded string. For now, make your main function call this and display the bot's response a second after the user's.  
  * **Hour 2-4 (n8n Backend):**  
    1. In your n8n instance, create a new workflow.  
    2. Add a **Webhook** node. This is your API endpoint. Copy the **Test URL**.  
    3. Add an **IF** node. Configure it to check the incoming message from the webhook (e.g., `{{ $json.body.message }}` contains "help").  
    4. Branch the IF node. On the "true" path, add a **Set** node and configure it to create a JSON response: `{"reply": "How can I assist you?"}`. On the "false" path, add another Set node with a default reply.  
    5. **Activate** the workflow.  
  * **Hour 5-6 (Test & Commit):** Use a simple API tool (like the one built into VS Code or a standalone app like Insomnia) to send a test `POST` request to your n8n **Test URL**. Verify the logic works. Commit the `app.js` changes.  
* **FileMaker Parallels:**  
  * The **n8n Workflow** is a **Script run on the Server**.  
  * The **Webhook Node** is the **Data API endpoint** that triggers the script.  
  * The **IF Node** is the `If/Else If` script step.  
  * The **Set Node** is like using `Set Variable` to prepare the `Script Result`.  
* **End-of-Day Deliverable:** A JS file with temporary bot logic and a separate, functional, and activated n8n workflow ready to receive requests.  
  * **Git Commit Message:** `feat: Add 'Wizard of Oz' JS bot logic`

---

### **Day 5: The Bridge \- Connecting to n8n with `fetch()`**

* **Daily Goal:** Replace the "fake" JavaScript bot with a real API call to your n8n workflow using the `fetch()` API. This is the core challenge.  
* **Topic Breakdown:**  
  * **Asynchronous JavaScript:** The concept that some operations (like API calls) take time and won't block the rest of your code. Learn the modern `async/await` syntax.  
  * **`fetch()` API:** The built-in browser function for making web requests.  
  * **HTTP `POST` Request:** Sending data to a server.  
  * **JSON:** The standard data format for web APIs. You'll use `JSON.stringify()` to send it and `response.json()` to parse it.  
* **6-Hour Schedule:**  
  * **Hour 1-2 (Learn):** This is the most abstract day. Focus on understanding `async/await`. It's a way to write asynchronous code that looks clean and synchronous.  
  * **Hour 3-5 (Apply):**  
    1. In `app.js`, modify your main function by adding the `async` keyword before it.  
    2. Get the **Production URL** from your n8n Webhook node.  
    3. After displaying the user's message, use `fetch()` to `POST` to your n8n URL.  
    4. The `fetch` call needs an options object specifying the `method: 'POST'`, `headers: { 'Content-Type': 'application/json' }`, and a `body` containing the user's message formatted as JSON.  
    5. Use `await` on the `fetch` call.  
    6. Use `await` again to parse the response as JSON.  
    7. Extract the reply from the response data and display it in a new bot message bubble.  
  * **Hour 6 (Cleanup & Commit):** Delete the old "Wizard of Oz" JS function. Your app is now fully integrated\! Debug any issues and commit.  
* **FileMaker Parallels:**  
  * `fetch()` is the **`Insert from URL`** script step using cURL options.  
  * **`async/await`** is how JavaScript handles the delay, similar to how a FileMaker script pauses and waits for a `Perform Script on Server` to return a result before continuing.  
  * `JSON.stringify()` is like using FileMaker's `JSONSetElement` to build your request data.  
* **End-of-Day Deliverable:** A fully integrated application. User messages are sent to n8n, and the live response from the workflow is displayed in the UI.  
  * **Git Commit Message:** `feat: Integrate fetch API to connect with n8n workflow`

---

### **Day 6: The Polish \- Refinement and Error Handling**

* **Daily Goal:** Elevate the user experience by cleaning up the code, adding a "typing" indicator, and gracefully handling potential network errors.  
* **Topic Breakdown:**  
  * **Code Refactoring:** Breaking down large functions into smaller, single-purpose functions for readability.  
  * **UI/UX Enhancements:** Providing visual feedback to the user.  
  * **Error Handling:** Using `try...catch` blocks to manage failed API calls.  
* **6-Hour Schedule:**  
  * **Hour 1-2 (Refactor):** Review your `app.js`. Break the code into smaller functions like `displayUserMessage()`, `displayBotMessage()`, and `getN8nResponse()`. This makes your code much easier to read and debug.  
  * **Hour 3-4 (UX):** Implement a "Bot is typing..." indicator.  
    * Before you `await` the `fetch()` call, create and display a "typing" bubble.  
    * After the response is received and displayed, remove the "typing" bubble.  
  * **Hour 5 (Error Handling):** Wrap your `fetch` call and response handling inside a `try...catch` block. In the `catch` block, if an error occurs (e.g., n8n is offline), display a friendly error message in the chat window (e.g., "Sorry, I'm having trouble connecting.").  
  * **Hour 6 (Final Review & Commit):** Add comments to your code explaining what each part does. Test everything thoroughly. Commit your polished code.  
* **FileMaker Parallels:**  
  * **Refactoring** is like organizing your scripts into **Sub-scripts** for clarity.  
  * The **"typing" indicator** is like showing a **Custom Dialog** or progress bar during a long-running script.  
  * `try...catch` is the direct equivalent of using **`Set Error Capture [On]`** and checking `Get(LastError)` to handle script errors gracefully.  
* **End-of-Day Deliverable:** A robust, polished, and production-ready chat application.  
  * **Git Commit Message:** `refactor: Add loading indicators, error handling, and code cleanup`

---

### **Day 7: The Launch \- Deployment to a Live URL**

* **Daily Goal:** Deploy your static website to a live, public URL using the standard professional workflow of Git and Netlify.  
* **Topic Breakdown:**  
  * **Static Site Hosting:** Understanding what it means to host files that don't require a complex server.  
  * **Continuous Deployment (CI/CD):** The concept of automatically deploying changes whenever you push to your GitHub repository.  
  * **Netlify:** A popular, user-friendly platform for deploying static sites.  
* **6-Hour Schedule:**  
  * **Hour 1:** Double-check that your GitHub repository is fully up to date with your final code from Day 6\.  
  * **Hour 2:** Sign up for a free Netlify account. Choose the option to sign up with your GitHub account.  
  * **Hour 3:** In the Netlify dashboard, click "Add new site" \-\> "Import an existing project" \-\> "Deploy with GitHub".  
  * **Hour 4:** Authorize Netlify to access your GitHub account and select your chat app repository. The build settings should be simple: since you have no build step, you can likely leave the fields blank. Click "Deploy site".  
  * **Hour 5:** Netlify will build and deploy your site in about 30 seconds. It will provide you with a random URL (e.g., `witty-biscuit-12345.netlify.app`). Click it and test your live application\!  
  * **Hour 6 (The Magic Moment):** Go back to VS Code. Make a tiny change to your `index.html` file (e.g., change the `<h1>` title). Commit and `git push` the change to GitHub. Now, watch your Netlify dashboard—it will automatically detect the push and redeploy your site. This is the professional workflow in action.  
* **FileMaker Parallels:**  
  * **Netlify** is your **Web Host**, the equivalent of the machine running FileMaker Server.  
  * **Deploying** is like **uploading your `.fmp12` file** to the server to make it accessible.  
  * The **automatic redeployment** on `git push` is a modern, automated version of that upload process, ensuring your live version is always in sync with your master code branch.  
* **End-of-Day Deliverable:** A live, publicly accessible URL for your chat application that you can share with anyone.  
  * **Final Git Commit Message (for the small text change):** `docs: Update header title for final deployment`