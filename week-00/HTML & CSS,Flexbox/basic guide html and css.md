
A quick guide to some basic HTML and CSS tags:

### Basic HTML Tags
1. **`<!DOCTYPE html>`**: Declares the document type.
2. **`<html>`**: Root element of the HTML page.
3. **`<head>`**: Contains meta-information about the document (e.g., title, links).
4. **`<title>`**: Sets the title of the document (displayed in the browser tab).
5. **`<body>`**: Contains the content of the document.
6. **`<h1> to <h6>`**: Headings, where `<h1>` is the highest level.
7. **`<p>`**: Paragraph.
8. **`<a href="URL">`**: Hyperlink.
9. **`<img src="URL" alt="description">`**: Image.
10. **`<ul>`**: Unordered list, with list items `<li>`.
11. **`<ol>`**: Ordered list, with list items `<li>`.
12. **`<div>`**: Division or section in an HTML document.
13. **`<span>`**: Inline container for text.
14. **`<form>`**: Form element.
15. **`<input>`**: Input field within a form.
16. **`<button>`**: Button element.

### Basic CSS Properties
1. **`color:`** Changes text color.
   ```css
   color: red;
   ```

2. **`background-color:`** Sets the background color.
   ```css
   background-color: blue;
   ```

3. **`font-size:`** Sets the size of the text.
   ```css
   font-size: 16px;
   ```

4. **`margin:`** Sets the space outside an element.
   ```css
   margin: 10px;
   ```

5. **`padding:`** Sets the space inside an element.
   ```css
   padding: 10px;
   ```

6. **`border:`** Sets the border of an element.
   ```css
   border: 1px solid black;
   ```

7. **`width:`** Sets the width of an element.
   ```css
   width: 100px;
   ```

8. **`height:`** Sets the height of an element.
   ```css
   height: 100px;
   ```

9. **`text-align:`** Aligns text inside an element.
   ```css
   text-align: center;
   ```

10. **`display:`** Sets the display behavior of an element.
    ```css
    display: block;
    ```

11. **`position:`** Positions an element in a certain way (relative, absolute, fixed).
    ```css
    position: absolute;
    ```

12. **`flex:`** Defines a flex container.
    ```css
    display: flex;
    ```

### Example HTML with Embedded CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML & CSS Example</title>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
            color: #666;
        }
        .container {
            border: 1px solid #ccc;
            padding: 20px;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <p>This is a basic example of HTML and CSS.</p>
    </div>
</body>
</html>
```