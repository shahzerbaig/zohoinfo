const ll = document.createElement('div')
const toolTemplate = `  <div class="tools">
<h4>The tools from Zoho spans 11 different Departments</h4>
<ol>
    <li>Sales</li>
        <ul>
            <li>CRM</li>
            <li>Simple Small Business CRM</li>
            <li>Appointment Scheduling</li>
        </ul>
    <li>Marketing</li>
        <ul>
            <li>Marketing Automation</li>
            <li>Email Marketing</li>
            <li>Social Media Marketing</li>
            <li>Survey</li>
            <li>forms</li>
        </ul>
    <li>Support</li>
        <ul>
            <li>Customer Support</li>
        </ul>    
    <li>Communications</li>    
        <ul>
            <li>Email Hosting</li>
        </ul>
    <li>Colaboration</li>
        <ul>
            <li>Project Managment</li>
        </ul>
    <li>Productivity</li>
        <ul>
            <li>Word Processor</li>
        </ul>
    <li>Finance</li>
        <ul>
            <li>Accounting</li>
        </ul>
    <li>Operations</li>
        <ul>
            <li>Subscription Managment</li>
        </ul>
    <li>Human Resource</li>
        <ul>
            <li>H.R</li>
        </ul>
    <li>Buisness Process</li>
        <ul>
            <li>Custom Application</li>
        </ul>
    <li>Legal</li>
        <ul>
            <li>Contract Managment</li>
        </ul>
</ol>
</div>`
const button = document.querySelector('button')
let change = document.getElementById('change')
let dum = document.getElementById('dum22')
let container = document.getElementById('zohoone')

button.addEventListener('click',()=>{
    console.log("clicked");
    change.innerHTML = ll ;
    container.appendChild(ll)
    
})