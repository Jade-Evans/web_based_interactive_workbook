const dashboardToolsArray = Array.from(document.querySelectorAll(".dashboardTool"));
const dashboardToolKit = document.querySelector("#dashboardToolKit");
function updateDateTimeEachSecond(){
    const currentDateTime = new Date();
    readableDateTime= currentDateTime.toLocaleString("en-GB");
    const dateTime = document.querySelector(".currentDateTime");
    dateTime.textContent = readableDateTime;
}
updateDateTimeEachSecond();
setInterval(updateDateTimeEachSecond, 1000);
//Pikaday Calendar logic:
const picker = new Pikaday({
  field: document.getElementById('calendarInput'),
  format: 'D MMM YYYY',
  firstDay: 1, // Monday start (UK-friendly)
  theme: 'dark-theme', // optional custom class
});
    
    
    //    <caption>Learning Progress Tracker</caption>
    //       <thead>
    //         <tr>
    //           <th scope="col">Module</th>
    //           <th scope="col">section</th>
    //           <th scope="col">Course</th>
    //           <th scope="col">Progress</th>
    //           <th scope="col">Date</th>
    //           <th scope="col">Notes</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td><a href="01_emmet.html">Emmet</a></td>
    //           <td>Intermediate HTML Concepts</td>
    //           <td>The Odin Project JS Path</td>
    //           <td><fieldset id="progressOptions" class="options hidden">
    //                 <select id="progressOptions" name="progressOptions">
    //                     <option value="notStarted">Not Started</option>
    //                     <option value="inProgress">In Progress</option>
    //                     <option value="needsReview">Lesson Needs Review</option>
    //                     <option value="confident">Lesson Complete: Confident</option>
    //                 </select>
    //             </fieldset></td>
    //             <td><input type="date" name="dateUpdate" id="dateUpdated"></td>
    //           <td><textarea name="notes"></textarea></td>
    //         </tr>
    //         <tr>
    //           <td><a href="02_svg.html">SVGs</a></td>
    //           <td>Intermediate HTML Concepts</td>
    //           <td>The Odin Project JS Path</td>
    //           <td><fieldset id="progressOptions" class="options hidden">
    //                 <select id="progressOptions" name="progressOptions">
    //                     <option value="notStarted">Not Started</option>
    //                     <option value="inProgress">In Progress</option>
    //                     <option value="needsReview">Lesson Needs Review</option>
    //                     <option value="confident">Lesson Complete: Confident</option>
    //                 </select>
    //             </fieldset></td>
    //             <td><input type="date" name="dateUpdate" id="dateUpdated"></td>
    //           <td><textarea name="notes"></textarea></td>
    //         </tr>
    //         <tr>
    //           <td><a href="03_tables.html">Tables</a></td>
    //           <td>Intermediate HTML Concepts</td>
    //           <td>The Odin Project JS Path</td>
    //           <td><fieldset id="progressOptions" class="options hidden">
    //                 <select id="progressOptions" name="progressOptions">
    //                     <option value="notStarted">Not Started</option>
    //                     <option value="inProgress">In Progress</option>
    //                     <option value="needsReview">Lesson Needs Review</option>
    //                     <option value="confident">Lesson Complete: Confident</option>
    //                 </select>
    //             </fieldset></td>
    //             <td><input type="date" name="dateUpdate" id="dateUpdated"></td>
    //           <td><textarea name="notes"></textarea></td>
    //         </tr>  
    //         <td><a href="04_defaultCSS.html">Default CSS</a></td>
    //           <td>Intermediate CSS Concepts</td>
    //           <td>The Odin Project JS Path</td>
    //           <td><fieldset id="progressOptions" class="options hidden">
    //                 <select id="progressOptions" name="progressOptions">
    //                     <option value="notStarted">Not Started</option>
    //                     <option value="inProgress">In Progress</option>
    //                     <option value="needsReview">Lesson Needs Review</option>
    //                     <option value="confident">Lesson Complete: Confident</option>
    //                 </select>
    //             </fieldset></td>
    //             <td><input type="date" name="dateUpdate" id="dateUpdated"></td>
    //           <td><textarea name="notes"></textarea></td>
    //         </tr>  