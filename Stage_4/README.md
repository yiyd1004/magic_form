# Synchronization
<div class="step-text">
<h3 id="description">Description</h3>
<p>This is the last step, nevertheless, an important one. Let's add the option to delete a submission from the history and synchronize data fields within different opened browser tabs.</p>
<p>To synchronize forms within different tabs, use <code class="java">setInterval()</code> function. You can learn more about this function on <a href="https://javascript.info/settimeout-setinterval" rel="noopener noreferrer nofollow" target="_blank">javascript.info</a>.</p>
<h3 id="objectives">Objectives</h3>
<p>On the history page, each <code class="java">submit</code> card should contain a button with the <code class="java">delete-button</code> class. When users click on this button, delete the card related to the button. Also, don't forget to delete this submission from the local storage, so it won't be shown after reloading.</p>
<p>When users open two browser tabs with the HTML form and change data in one of them, the data also should be updated in the other tab. Check every 100 ms whether the data in the local storage is changed; if so, update the data in the form.</p>
</div>
