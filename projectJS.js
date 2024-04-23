function generateMealPlan(name, email, goal, meals) {
    // Generate HTML for meal plan
    let mealPlanHTML = `
        <html>
        <head>
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: monospace; /* Using monospaced font for text wrapping */
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Snack</th>
                    <th>Lunch</th>
                    <th>Snack</th>
                    <th>Dinner</th>
                </tr>`;
    
    // Add meal plan to HTML
    for (let day in meals) {
        mealPlanHTML += `
            <tr>
                <td>${day}</td>`;
        for (let meal of meals[day]) {
            mealPlanHTML += `<td>${meal}</td>`;
        }
        mealPlanHTML += `</tr>`;
    }
    
    // Close HTML
    mealPlanHTML += `
            </table>
        </body>
        </html>`;
    
    // Open new window and write meal plan HTML
    let newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
}
