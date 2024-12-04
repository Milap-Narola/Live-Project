
<h1>E-commerce Clone</h1>

<h2>Description</h2>
<p>This project is a simple e-commerce application built with Node.js, Express.js, and MongoDB. It aims to provide a seamless shopping experience similar to Amazon, allowing users to browse products, manage their shopping cart, and complete purchases.</p>

<h2>Features</h2>
<ul>
    <li><strong>User Roles:</strong> SuperAdmin, Admin, User</li>
    <li><strong>SuperAdmin Capabilities:</strong> Create, view, update, and delete categories; manage users, shops, products, and reviews.</li>
    <li><strong>Admin Capabilities:</strong> Manage their own shop and products.</li>
    <li><strong>User Capabilities:</strong> Browse products, manage profiles, create reviews.</li>
    <li><strong>Shopping Cart:</strong> Users can add items to their cart and proceed to checkout.</li>
    <li><strong>Responsive Design:</strong> Built using TailwindCSS for a modern user interface.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap</li>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB (or MySQL)</li>
    <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
    <li><strong>Other Tools:</strong> Docker for containerization</li>
</ul>

<h2>Installation Instructions</h2>
<ol>
    <li><strong>Clone the Repository:</strong>
        <pre><code>git clone https://github.com/your-username/ecommerce-clone.git
cd ecommerce-clone</code></pre>
    </li>
    <li><strong>Set Up Backend:</strong>
        <ul>
            <li>Navigating to the backend directory:
                <pre><code>cd backend</code></pre></li>
            <li>Install dependencies:
                <pre><code>npm install</code></pre></li>
            <li>Start the database using Docker:
                <pre><code>docker-compose up</code></pre></li>
            <li>Run the backend server:
                <pre><code>npm run watch</code></pre></li>
        </ul>
    </li>
    <li><strong>Set Up Frontend:</strong>
        <ul>
            <li>Navigating to the frontend directory:
                <pre><code>cd ../frontend</code></pre></li>
            <li>Install dependencies:
                <pre><code>npm install</code></pre></li>
            <li>Start the frontend server:
                <pre><code>npm run dev</code></pre></li>
        </ul>
    </li>
</ol>

<h2>Usage</h2>
<p>- Access the application in your web browser at <code>http://localhost:3000</code>.</p>
<p>- Register a new account or log in with existing credentials.</p>
<p>- Browse products and add them to your shopping cart.</p>
<p>- Manage your profile and view order history.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
