# History
<div class="step-text">
<h3 id="description">Description</h3>
<p>The main idea behind forms is to make requests to the servers. In this stage, when users submit the form data, you will save it into the local storage and show them on the history page. For that reason, you need to create another HTML file.</p>
<h3 id="objectives">Objectives</h3>
<p>Create another HTML file that shows the <code class="java">submit</code> history to users.</p>
<p>Each data submission should be represented as a <code class="java">div</code> block with the <code class="java">submit-history-card</code> class. Each <code class="java">div</code> block should contain the following elements:</p>
<ol>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-first-name</code> class. Inside this tag, show the first name from the submitted form;</li>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-last-name</code> class. Inside this tag, show the last name from the submitted form;</li>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-email</code> class. Inside this tag, show the email from the submitted form.</li>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-phone</code> class. Inside this tag, show the phone from the submitted form.</li>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-company</code> class. Inside this tag, show the company from the submitted form.</li>
<li><code class="java">&lt;p&gt;</code> element with the <code class="java">card-address</code> class. Inside this tag, show the address from the submitted form.</li>
<li><code class="java">&lt;button&gt;</code> element with the <code class="java">delete-button</code> class. Clicking on it should do nothing for now.</li>
</ol>
<p>Both pages should contain the navigation bar with the following elements:</p>
<ol>
<li><code class="java">&lt;a&gt;</code> tag with the <code class="java">form-link</code> ID. When users click on this link, navigate them to the main page with the form. To do so, you should set the <code class="java">href</code> attribute value to the path of the main HTML file;</li>
<li><code class="java">&lt;a&gt;</code> tag with the <code class="java">history-link</code> ID. When this link is clicked you should navigate to the history page. To do so you should set the <code class="java">href</code> attribute value to the path to the history HTML file.</li>
</ol>
<p>Once users visit the history page, get all the history of the submission and create a <code class="java">div</code> block with the <code class="java">submit-history-card</code> class for each submission. Add it to the DOM.</p>
<p>After submitting the main page, clear all the input fields on the form.</p>
<h3 id="example">Example</h3>
<p><strong>Example 1:</strong> <em>this is how your history page may look like</em></p>
<p><img alt="Magic Form site: history page" name="image.png" src="https://ucarecdn.com/f96ec8fc-0d8f-49ec-9c16-2bc8db6c80b1/" width="1601"/></p>
</div>
